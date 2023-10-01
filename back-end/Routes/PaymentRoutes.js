const express = require("express");
const { AddMoney, userBalance, getTransactions, sendWallet, getSendTransactions, addOrSendMoney } = require("../Controllers/Payment");
const { protect } = require("../MiddleWare/authMiddleWare");


const router = express.Router();

router.post("/add_money", protect, AddMoney)
router.get("/user/balance", protect, userBalance)
router.post("/send-money", protect, sendWallet);
// router.get("/transaction-detail/:userid", protect,);
router.get("/transactions", protect, getTransactions);
router.get("/send-details-history", protect, getSendTransactions);
router.get("/add-send-details-history", protect, addOrSendMoney);


module.exports = router;
