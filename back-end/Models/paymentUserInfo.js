const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    customerId: {}
});

const paymentUserInfo = mongoose.model("paymentUserInfo", userSchema);

module.exports = paymentUserInfo;
