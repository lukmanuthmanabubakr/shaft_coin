const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Input A name"],
    },
    email: {
      type: String,
      required: [true, "Input an Email"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please Input A Password"],
    },
    photo: {
      type: String,
      required: [true, "Please Input A Photo"],
      default: "https://is.gd/asKBnv",
    },
    phoneNumber: {
      type: String,
      default: "+2345678901",
    },
    bio: {
      type: String,
      default: "bio",
    },
    role: {
      type: String,
      required: true,
      default: "subscriber",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    userAgent: {
      type: Array,
      required: true,
      default: [],
    },
    randomAccountNumber: {
      type: String,
    },
    userBalance: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

//Encrypt password before saving to mdb
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  //Hash the password

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
