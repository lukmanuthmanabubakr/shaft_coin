const asyncHandler = require("express-async-handler");
const User = require("../Models/UserModel");
const Transaction = require("../Models/Transaction");
const SendWallet = require("../Models/SendWalletModel");
const SendOrAddHistory = require("../Models/SendOrAddWalletHistory");

const getTransactions = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  try {
    const transactions = await Transaction.find({ userId }).sort({ time: -1 });
    return res.status(200).json({ transactions });
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving transactions" });
  }
});

const AddMoney = asyncHandler(async (req, res) => {
  const { amount } = req.body;
  const randomAccountNumber = req.body.randomAccountNumber; // Assuming it comes from the request body
  // console.log(randomAccountNumber);

  if (!amount || isNaN(amount)) {
    return res.status(400).json({ message: "Please provide both amount" });
  }

  if (!randomAccountNumber && !req.user) {
    return res.status(400).json({
      message:
        "Please provide a valid account number or log in to your account",
    });
  }

  let user;

  // if (randomAccountNumber) {
  //   user = await User.findOne({ randomAccountNumber });
  // } else {
  //   user = await User.findById(req.user._id);
  // }

  if (randomAccountNumber) {
    user = await User.findOneAndUpdate(
      { randomAccountNumber },
      { $inc: { userBalance: amount } }, // Increment userBalance by amount
      { new: true } // Return the updated document
    );
  } else {
    user = await User.findByIdAndUpdate(
      req.user._id,
      { $inc: { userBalance: amount } }, // Increment userBalance by amount
      { new: true } // Return the updated document
    );
  }

  // Find the user by randomAccountNumber

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const transaction = new Transaction({
    userId: user._id,
    amount: amount,
    type: "Add Money",
    time: new Date(),
  });

  try {
    await transaction.save();
    await user.save();

    const notificationMessage = `${user.name} has added ${parseFloat(
      amount
    )} to their account`;

    return res.status(200).json({
      message: notificationMessage,
      userBalance: user.userBalance,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error processing transaction" });
  }
});

const userBalance = asyncHandler(async (req, res) => {
  const userId = req.user._id; // Assuming you have authntication middleware

  const user = await User.findById(userId);
  // console.log(user);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const userBalance = user.userBalance;

  res.json({ userBalance });
});


const sendWallet = asyncHandler(async (req, res) => {
  const { amount, randomAccountNumber } = req.body;
  const senderUserId = req.user._id;

  if (!amount || !randomAccountNumber) {
    return res.status(400).json({
      message: "Please provide both amount and recipient account number",
    });
  }

  try {
    let sender = await User.findById(senderUserId);
    let recipient = await User.findOne({ randomAccountNumber });

    if (!sender || !recipient) {
      return res.status(404).json({ message: "User not found" });
    }

    if (sender.userBalance < amount) {
      return res.status(400).json({ message: "Insufficient funds" });
    }

    if (sender.randomAccountNumber === randomAccountNumber) {
      return res.status(400).json({ message: "Cannot send funds to your own wallet" });
    }

    await User.updateOne(
      { _id: sender._id },
      { $inc: { userBalance: -amount } }
    );

    await User.updateOne(
      { _id: recipient._id },
      { $inc: { userBalance: amount } }
    );

    const transaction = new SendWallet({
      sender: sender._id,
      recipient: recipient._id,
      amount: amount,
      successful: true,
      sendername: sender.name,
      recipientname: recipient.name,
    });

    await transaction.save();

    return res.status(200).json({
      message: `Successfully sent ${amount} to ${recipient.name}`,
      senderBalance: sender.userBalance - amount,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

const getSendTransactions = asyncHandler(async (req, res) => {
  try {
    const transactions = await SendWallet.find().sort({ dateTime: -1 });

    const formattedTransactions = transactions.map(transaction => {
      return {
        _id: transaction._id,
        sender: transaction.sender,
        recipient: transaction.recipient,
        amount: transaction.amount,
        successful: transaction.successful,
        senderName: transaction.senderName,
        recipientName: transaction.recipientName,
        dateTime: transaction.dateTime
      };
    });

    res.json(formattedTransactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


const addOrSendMoney = asyncHandler(async (req, res) => {
  const { amount, randomAccountNumber, action } = req.body;
  const senderUserId = req.user._id;

  if (!amount || isNaN(amount)) {
    return res.status(400).json({ message: "Please provide a valid amount" });
  }

  try {
    let sender, recipient;

    if (action === "add") {
      if (!randomAccountNumber && !req.user) {
        return res.status(400).json({
          message:
            "Please provide a valid account number or log in to your account",
        });
      }

      if (randomAccountNumber) {
        sender = await User.findOneAndUpdate(
          { randomAccountNumber },
          { $inc: { userBalance: amount } },
          { new: true }
        );
      } else {
        sender = await User.findByIdAndUpdate(
          req.user._id,
          { $inc: { userBalance: amount } },
          { new: true }
        );
      }
    } else if (action === "send") {
      if (!randomAccountNumber) {
        return res.status(400).json({
          message: "Please provide recipient account number",
        });
      }

      sender = await User.findById(senderUserId);
      recipient = await User.findOne({ randomAccountNumber });

      if (!sender || !recipient) {
        return res.status(404).json({ message: "User not found" });
      }

      if (sender.userBalance < amount) {
        return res.status(400).json({ message: "Insufficient funds" });
      }

      if (sender.randomAccountNumber === randomAccountNumber) {
        return res.status(400).json({
          message: "Cannot send funds to your own wallet",
        });
      }

      await User.updateOne({ _id: sender._id }, { $inc: { userBalance: -amount } });
      await User.updateOne({ _id: recipient._id }, { $inc: { userBalance: amount } });
    }

    const transactionType = action === "add" ? "Add Money" : "Send Money";

    const transaction = new SendOrAddHistory({
      sender: sender._id,
      recipient: recipient ? recipient._id : null,
      amount: amount,
      successful: true,
      senderName: sender.name,
      recipientName: recipient ? recipient.name : null,
      type: transactionType,
      dateTime: new Date(),
    });

    await transaction.save();

    return res.status(200).json({
      message: `Successfully ${action === "add" ? "added" : "sent"} ${amount}`,
      userBalance: sender.userBalance,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});




module.exports = {
  getTransactions,
  AddMoney,
  userBalance,
  sendWallet,
  getSendTransactions,
  addOrSendMoney
};
