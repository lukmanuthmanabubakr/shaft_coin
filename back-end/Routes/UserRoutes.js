const express = require("express");
const {
  protect,
  adminOnly,
  authorOnly,
} = require("../MiddleWare/authMiddleWare");
const {
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
  loginWithGoogle
} = require("../Controllers/UserController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logOut", logOutUser);
router.get("/getUser", protect, getUser);
router.patch("/updateUser", protect, updateUser);


router.delete("/:id", protect, adminOnly, deleteUser);
router.get("/getUsers", protect, getUsers);
router.get("/loginStatus", loginStatus);
router.post("/upgradeUser", protect, adminOnly, upgradeUser);
router.post("/sendAutomatedEmail", protect, sendAutomatedEmail);


router.post("/sendVerificationEmail", protect, sendVerificationEmail);
router.patch("/verifyUser/:verificationToken", verifyUser);
router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword/:resetToken", resetPassword );
router.patch("/changePassword", protect, changePassword );

router.post("/sendLoginCode/:email",  sendLoginCode );
router.post("/loginWithCode/:email",  loginWithCode );

router.post("/google/callback",  loginWithGoogle );


module.exports = router;
