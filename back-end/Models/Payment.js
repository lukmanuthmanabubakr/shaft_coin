const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Please Input A name"],
  },
  last_name: {
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
  country: {
    type: String,
    required: [true, "Please Input A name"],
  },
});

const paymentUser = mongoose.model("paymentUser", userSchema);

module.exports = paymentUser;
