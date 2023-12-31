import axios from "axios"

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
export const API_URL = `${BACKEND_URL}/api/users/`;

// Validate email
export const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

//Register User

const register = async (userData) => {
    const response = await axios.post(API_URL + "register", userData);
    return response.data;
}
//login User

const login = async (userData) => {
    const response = await axios.post(API_URL + "login", userData);
    return response.data;
}
//Logout User

const logOut = async () => {
    const response = await axios.get(API_URL + "logOut");
    return response.data.message;
}

//get login-status
const getLoginStatus = async () => {
    const response = await axios.get(API_URL + "loginStatus");
    return response.data;
}
//get User profile
const getUser = async () => {
    const response = await axios.get(API_URL + "getUser");
    return response.data;
}

//Update Profile
const updateUser = async (userData) => {
    const response = await axios.patch(API_URL + "updateUser", userData);
    return response.data;
}
//send Verification Email
const sendVerificationEmail = async () => {
    const response = await axios.post(API_URL + "sendVerificationEmail");
    return response.data.message;
}
//Verify user
const verifyUser = async (verificationToken) => {
    const response = await axios.patch(`${API_URL}verifyUser/${verificationToken}`);
    console.log(response);

    return response.data.message;
}


//Change Password
const changePassword = async (userData) => {
    const response = await axios.patch(API_URL + "changePassword", userData);

    return response.data.message;
}


//forgot password
const forgotPassword = async (userData) => {
    const response = await axios.post(API_URL + "forgotPassword", userData);

    return response.data.message;
}

//Reset password
const resetPassword = async (userData, resetToken) => {
    const response = await axios.patch(`${API_URL}resetPassword/${resetToken}` , userData);

    return response.data.message;
}

//get users
const getUsers = async () => {
    const response = await axios.get(API_URL + "getUsers");

    return response.data;
}
//delete users
const deleteUser = async (id) => {
    const response = await axios.delete(API_URL + id);

    return response.data.message;
}
//upgrade users
const upgradeUser = async (userData) => {
    const response = await axios.post(API_URL + "upgradeUser", userData);

    return response.data.message;
}
//Send Login Code
const sendLoginCode = async (email) => {
    const response = await axios.post(API_URL + `sendLoginCode/${email}`);

    return response.data.message;
}
//Send Login Code
const loginWithCode = async (code, email) => {
    const response = await axios.post(API_URL + `loginWithCode/${email}`, code);

    return response.data;
}

//S Login Google
const loginWithGoogle = async (userToken) => {
    const response = await axios.post(API_URL + "/google/callback", userToken);

    return response.data;
}

const AuthService = {
    register,
    login,
    logOut,
    getLoginStatus,
    getUser,
    updateUser,
    sendVerificationEmail,
    verifyUser,
    changePassword,
    forgotPassword,
    resetPassword,
    getUsers,
    deleteUser,
    upgradeUser,
    sendLoginCode,
    loginWithCode,
    loginWithGoogle
}


export default AuthService