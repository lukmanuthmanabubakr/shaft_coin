const asyncHandler = require("express-async-handler");
const User = require("../Models/UserModel");
const bcrypt = require("bcryptjs");
const { generateToken, hashToken } = require("../Utils/Utils");
const parser = require("ua-parser-js");
const jwt = require("jsonwebtoken");
const sendEmail = require("../Utils/SendEmail");
const Token = require("../Models/tokenModel");
const crypto = require("crypto");
const Cryptr = require("cryptr");

const { OAuth2Client } = require("google-auth-library");

const cryptr = new Cryptr(process.env.CRYPTR_KEY);

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


//Register User


const registerUser = asyncHandler(async (req, res) => {
  // Extract data from request body
  const { name, email, password } = req.body;

  // Generate random account number
  const randomAccountNumber = Math.floor(Math.random() * 10 ** 10).toString().padStart(10, '0');




  // Validation checks
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }

  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be at least 6 characters");
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Email already exists");
  }

  // Get user agent
  const ua = parser(req.headers["user-agent"]);
  const userAgent = [ua.ua];

  // Create new user
  const user = await User.create({
    name,
    email,
    password,
    userAgent,
    randomAccountNumber,
    userBalance: 0,
  });

  // Generate Token
  const token = generateToken(user._id);

  // Set HTTP-only cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
  });

  if (user) {
    const { _id, name, email, phoneNumber, bio, photo, role, isVerified, randomAccountNumber,userBalance } = user;

    res.status(201).json({
      _id,
      name,
      email,
      phoneNumber,
      bio,
      photo,
      role,
      token,
      isVerified,
      randomAccountNumber,
      userBalance
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});


//Login User

const loginUser = asyncHandler(async (req, res) => {
  // res.send("login User")
  const { email, password } = req.body;

  //Validation
  if (!email || !password) {
    res.status(400);
    throw new Error("Add email and password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("User not found, Please Sign Up");
  }

  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  if (!passwordIsCorrect) {
    res.status(400);
    throw new Error("Invalid Email Or Password");
  }

  //Trigerr 2fa for unknown agent

  const ua = parser(req.headers["user-agent"]);
  const thisUserAgent = ua.ua;
  console.log(thisUserAgent);
  const allowedAgent = user.userAgent.includes(thisUserAgent);

  if (!allowedAgent) {
    // Generate 6 digit code

    const loginCode = Math.floor(100000 + Math.random() * 900000);
    console.log(loginCode);

    //Encrpt Login code before saving to db
    const encryptedLoginCode = cryptr.encrypt(loginCode.toString());

    //delete token if it exist in DB
    let userToken = await Token.findOne({ userId: user._id });

    if (userToken) {
      await userToken.deleteOne();
    }

    //Save to DB
    await new Token({
      userId: user._id,
      lToken: encryptedLoginCode,
      createdAt: Date.now(),
      expiresAt: Date.now() + 60 * (60 * 1000), //60 mins
    }).save();

    res.status(400);
    throw new Error("New browser or device detected");
  }

  //Generate Token

  const token = generateToken(user._id);

  if (user && passwordIsCorrect) {
    //Send http-only token
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), //1 day
      sameSite: "none",
      secure: true,
    });

    const { _id, name, email, phoneNumber, bio, photo, role, isVerified, randomAccountNumber , userBalance } =
      user;

    res.status(200).json({
      _id,
      name,
      email,
      phoneNumber,
      bio,
      photo,
      token,
      role,
      isVerified,
      randomAccountNumber ,
      userBalance
    });
  } else {
    res.status(500);
    throw new Error("Something went wrong please try again");
  }
});

const sendLoginCode = asyncHandler(async (req, res) => {
  const { email } = req.params;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  //find login code in db
  let userToken = await Token.findOne({
    userId: user._id,
    expiresAt: { $gt: Date.now() },
  });

  if (!userToken) {
    res.status(404);
    throw new Error("Invalid or expired token, please login again");
  }

  const loginCode = userToken.lToken;
  const decryptedLoginCode = cryptr.decrypt(loginCode);

  //Login code To Access
  const subject = "Login Access Code - Shaft-Coin";
  const send_to = email;
  const sent_from = process.env.EMAIL_USER;
  const reply_to = "noreply@lukmanuthman.com";
  const template = "loginCode";
  const name = user.name;
  const link = decryptedLoginCode;
  try {
    await sendEmail(
      subject,
      send_to,
      sent_from,
      reply_to,
      template,
      name,
      link
    );
    res.status(200).json({ message: `Access code sent to ${email}` });
  } catch (error) {
    res.status(500);
    throw new Error("Email not sent, please try again");
  }
});

//Verification Email
const sendVerificationEmail = asyncHandler(async (req, res) => {
  // res.send("email")
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (user.isVerified) {
    res.status(404);
    throw new Error("User already verified");
  }

  //delete token if it exist in DB
  let token = await Token.findOne({ userId: user._id });

  if (token) {
    await token.deleteOne();
  }

  //create verification token and save
  const verificationToken = crypto.randomBytes(32).toString("hex") + user._id;
  console.log(verificationToken);
  //hash token and save
  const hashedToken = hashToken(verificationToken);
  await new Token({
    userId: user._id,
    vToken: hashedToken,
    createdAt: Date.now(),
    expiresAt: Date.now() + 60 * (60 * 1000), //60 mins
  }).save();

  //form a verification url
  const verificationUrl = `${process.env.FRONTEND_URL}/verify/${verificationToken}`;

  //send email
  const subject = "Verify Your Account - shaftCoin";
  const send_to = user.email;
  const sent_from = process.env.EMAIL_USER;
  const reply_to = "noreply@abu.com";
  const template = "verifyEmail";
  const name = user.name;
  const link = verificationUrl;

  try {
    await sendEmail(
      subject,
      send_to,
      sent_from,
      reply_to,
      template,
      name,
      link
    );
    res.status(200).json({ message: "verification Email Sent" });
  } catch (error) {
    res.status(500);
    throw new Error("Email not sent, please try again");
  }
});

//verify user
const verifyUser = asyncHandler(async (req, res) => {
  const { verificationToken } = req.params;
  console.log(verificationToken);

  const hashedToken = hashToken(verificationToken);

  const userToken = await Token.findOne({
    vToken: hashedToken,
    expiresAt: { $gt: Date.now() },
  });

  if (!userToken) {
    res.status(404);
    throw new Error("Invalid or expierd token");
  }

  //find User
  const user = await User.findOne({ _id: userToken.userId });

  if (user.isVerified) {
    res.status(400);
    throw new Error("User is already verified");
  }

  //Now verify User
  user.isVerified = true;
  await user.save();

  res.status(200).json({ message: "Account verfication successful" });
});

//forgot Password
const forgotPassword = asyncHandler(async (req, res) => {
  // res.send("forgot password")

  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("No User with this email");
  }

  //delete token if it exist in DB
  let token = await Token.findOne({ userId: user._id });

  if (token) {
    await token.deleteOne();
  }

  //create verification token and save
  const resetToken = crypto.randomBytes(32).toString("hex") + user._id;
  console.log(resetToken);
  //hash token and save
  const hashedToken = hashToken(resetToken);
  await new Token({
    userId: user._id,
    rToken: hashedToken,
    createdAt: Date.now(),
    expiresAt: Date.now() + 60 * (60 * 1000), //60 mins
  }).save();

  //construct reset url
  const resetUrl = `${process.env.FRONTEND_URL}/resetPassword/${resetToken}`;

  //send email
  const subject = "Password Reset Request - ShaftCoin";
  const send_to = user.email;
  const sent_from = process.env.EMAIL_USER;
  const reply_to = "noreply@abu.com";
  const template = "forgotPassword";
  const name = user.name;
  const link = resetUrl;

  try {
    await sendEmail(
      subject,
      send_to,
      sent_from,
      reply_to,
      template,
      name,
      link
    );
    res.status(200).json({ message: "Reset Password Sent" });
  } catch (error) {
    res.status(500);
    throw new Error("Password not sent, please try again");
  }
});

const resetPassword = asyncHandler(async (req, res) => {
  // res.send("reset Password")

  const { resetToken } = req.params;
  const { password } = req.body;

  const hashedToken = hashToken(resetToken);

  const userToken = await Token.findOne({
    rToken: hashedToken,
    expiresAt: { $gt: Date.now() },
  });

  if (!userToken) {
    res.status(404);
    throw new Error("Invalid or expierd token");
  }

  //find User
  const user = await User.findOne({ _id: userToken.userId });

  //Now reset User password
  user.password = password;
  await user.save();

  res.status(200).json({ message: "Password Reset successful, Please Login" });
});

//Log-out user

const logOutUser = asyncHandler(async (req, res) => {
  //Send http-only token
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0), //1 day
    sameSite: "none",
    secure: true,
  });

  return res.status(200).json({ message: "Logout successful" });
});

//get user

const getUser = asyncHandler(async (req, res) => {
  //Send http-only token
  // res.send("Get User")
  const user = await User.findById(req.user._id);

  if (user) {
    const { _id, name, email, phoneNumber, bio, photo, role, isVerified,randomAccountNumber,userBalance } =
      user;

    res.status(200).json({
      _id,
      name,
      email,
      phoneNumber,
      bio,
      photo,
      role,
      isVerified,
      randomAccountNumber,
      userBalance
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//Update user

const updateUser = asyncHandler(async (req, res) => {
  // res.send("Update");

  const user = await User.findById(req.user._id);

  if (user) {
    const { name, email, phoneNumber, bio, photo } = user;

    user.email = email;
    user.name = req.body.name || name;
    user.phoneNumber = req.body.phoneNumber || phoneNumber;
    user.bio = req.body.bio || bio;
    user.photo = req.body.photo || photo;

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phoneNumber: updatedUser.phoneNumber,
      bio: updatedUser.bio,
      photo: updatedUser.photo,
      role: updatedUser.role,
      isVerified: updatedUser.isVerified,
      randomAccountNumber: updatedUser.randomAccountNumber,
      userBalance: updatedUser.userBalance
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//delete user

const deleteUser = asyncHandler(async (req, res) => {
  // res.send("delete user")

  const user = await User.findByIdAndRemove(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // await user.remove()
  res.status(200).json({ message: "User deleted successfully" });
});
//get user

const getUsers = asyncHandler(async (req, res) => {
  // res.send("Get user");

  const users = await User.find().sort("-createdAt").select("-password");
  if (!users) {
    res.status(500);
    throw new Error("Something went wrong");
  }

  res.status(200).json(users);
});

//Get Login status

const loginStatus = asyncHandler(async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json(false);
  }
  //verify token
  const verified = jwt.verify(token, process.env.JWT_SECRET);

  if (verified) {
    return res.json(true);
  }
  return res.json(false);
});

const upgradeUser = asyncHandler(async (req, res) => {
  const { role, id } = req.body;

  const user = await User.findById(id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  user.role = role;
  await user.save();

  res.status(200).json({
    message: `User role updated to ${role}`,
  });
});

const sendAutomatedEmail = asyncHandler(async (req, res) => {
  const { subject, send_to, reply_to, template, url } = req.body;

  if (!subject || !send_to || !reply_to || !template) {
    res.status(500);
    throw new Error("Missing email parameter");
  }

  // Get user
  const user = await User.findOne({ email: send_to });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const sent_from = process.env.EMAIL_USER;
  const name = user.name;
  const link = `${process.env.FRONTEND_URL}${url}`;

  try {
    await sendEmail(
      subject,
      send_to,
      sent_from,
      reply_to,
      template,
      name,
      link
    );
    res.status(200).json({ message: "Email Sent" });
  } catch (error) {
    res.status(500);
    throw new Error("Email not sent, please try again");
  }
});

//change password

const changePassword = asyncHandler(async (req, res) => {
  // res.send("Password changed")

  const { oldPassword, password } = req.body;
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (!oldPassword || !password) {
    res.status(404);
    throw new Error("Please enter old and new password");
  }

  //check if old passsword is correct
  const passwordIsCorrect = await bcrypt.compare(oldPassword, user.password);

  //THEN SAVE NEW PASSWORD
  if (user && passwordIsCorrect) {
    user.password = password;
    await user.save();
    res
      .status(200)
      .json({ message: "Password changed successfully, please login again" });
  } else {
    res.status(404);
    throw new Error("old password is incorrect");
  }
});

//login with code
const loginWithCode = asyncHandler(async (req, res) => {
  // res.send("Login with code")

  const { email } = req.params;
  const { loginCode } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  //find user login token

  const userToken = await Token.findOne({
    userId: user.id,
    expiresAt: { $gt: Date.now() },
  });

  if (!userToken) {
    res.status(404);
    throw new Error("Invalid or expires login, please login Again");
  }
  const decryptedLoginCode = cryptr.decrypt(userToken.lToken);

  if (loginCode !== decryptedLoginCode) {
    res.status(404);
    throw new Error("Incorrect login, please login again");
  } else {
    //Register user Agent
    const ua = parser(req.headers["user-agent"]);
    const thisUserAgent = ua.ua;

    user.userAgent.push(thisUserAgent);
    await user.save();

    const token = generateToken(user._id);

    //send HTTP-only cookie
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), //1 day
      sameSite: "none",
      secure: true,
    });

    const { _id, name, email, phoneNumber, bio, photo, role, isVerified,randomAccountNumber, userBalance } =
      user;

    res.status(200).json({
      _id,
      name,
      email,
      phoneNumber,
      bio,
      photo,
      role,
      token,
      isVerified,
      token,
      randomAccountNumber,
      userBalance
    });
  }
});

const loginWithGoogle = asyncHandler(async (req, res) => {
  const { userToken } = req.body;
  // console.log(userToken);

  const ticket = await client.verifyIdToken({
    idToken: userToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const { name, email, picture, sub } = payload;
  const password = Date.now() + sub;

  //get user AGENT
  const ua = parser(req.headers["user-agent"]);
  const userAgent = [ua.ua];

  //Check if user exists
  const user = await User.findOne({ email });

  if (!user) {
    //Create new user
    const newUser = await User.create({
      name,
      email,
      password,
      photo: picture,
      isVerified: true,
      userAgent,
      randomAccountNumber,
      userBalance
    });

    if (newUser) {
      //Generate Token

      const token = generateToken(newUser._id);

      //send HTTP-only cookie
      res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400), //1 day
        sameSite: "none",
        secure: true,
      });

      const { _id, name, email, phoneNumber, bio, photo, role, isVerified,randomAccountNumber,userBalance } =
        newUser;

      res.status(201).json({
        _id,
        name,
        email,
        phoneNumber,
        bio,
        photo,
        role,
        token,
        isVerified,
        token,
        randomAccountNumber,
        userBalance
      });
    }
  }

  //user Exists

  if (user) {
    const token = generateToken(user._id);

    //send HTTP-only cookie
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), //1 day
      sameSite: "none",
      secure: true,
    });

    const { _id, name, email, phoneNumber, bio, photo, role, isVerified,randomAccountNumber,userBalance } =
      user;

    res.status(201).json({
      _id,
      name,
      email,
      phoneNumber,
      bio,
      photo,
      role,
      token,
      isVerified,
      token,
      randomAccountNumber,
      userBalance
    });
  }
});

module.exports = {
  registerUser,
  loginUser,
  logOutUser,
  getUser,
  updateUser,
  deleteUser,
  getUsers,
  loginStatus,
  upgradeUser,
  sendAutomatedEmail,
  sendVerificationEmail,
  verifyUser,
  forgotPassword,
  resetPassword,
  changePassword,
  sendLoginCode,
  loginWithCode,
  loginWithGoogle,
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
