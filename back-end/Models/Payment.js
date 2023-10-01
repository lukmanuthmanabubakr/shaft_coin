const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userBalance: {
    type: Number,
    default: 0,
  },
});

const paymentUser = mongoose.model("Payment", userSchema);

module.exports = paymentUser;
