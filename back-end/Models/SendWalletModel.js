const mongoose = require("mongoose");

const SendWalletSchema = new mongoose.Schema({
    sender: mongoose.Types.ObjectId,
    recipient: mongoose.Types.ObjectId,
    amount: Number,
    successful: Boolean,
    senderName: String,
    recipientName: String,
    dateTime: Date,
  });

const SendWallet = mongoose.model("SendWallet", SendWalletSchema);

module.exports = SendWallet;
