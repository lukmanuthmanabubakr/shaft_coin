const mongoose = require("mongoose");

const sendOrAddHistorySchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  amount: Number,
  successful: Boolean,
  senderName: String,
  recipientName: String,
  type: String, // Add a field to indicate if it's a send or add transaction
  dateTime: Date,
});

const SendOrAddHistory = mongoose.model("SendOrAddHistory", sendOrAddHistorySchema);

module.exports = SendOrAddHistory;
