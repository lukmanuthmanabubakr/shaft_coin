const express = require("express");
const { balance, balanceWithDraw, bankResolve, bankSupported, payment, currencyRate, currencySupported, minimumAllowed, apiKey, transaction, transactionSummary, transferFunds, balanceConvert } = require("../Controllers/Payment");

const PaymentRoute = express.Router();

PaymentRoute.get("/balance", balance);
PaymentRoute.post("/balance/withdraw", balanceWithDraw);
PaymentRoute.post("/balance/convert", balanceConvert);
PaymentRoute.post("/balance/transfer", transferFunds);
PaymentRoute.get("/bank/supported", bankSupported);
PaymentRoute.post("/bank/resolve", bankResolve);
PaymentRoute.get("/currency/rate", currencyRate);
PaymentRoute.get("/currency/supported", currencySupported);
PaymentRoute.get("/currency/minimum-allowed", minimumAllowed);
PaymentRoute.post("/auth/api-key", apiKey);
PaymentRoute.get("/transaction", transaction);
PaymentRoute.post("/payment", payment);
PaymentRoute.get("/transaction/summary", transactionSummary);


module.exports = PaymentRoute;



