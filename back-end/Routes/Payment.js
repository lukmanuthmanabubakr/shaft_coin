const express = require("express");
const { createNewUser, upgradeCustomer, getAllCusomers } = require("../Controllers/Payment");

const paymentRouter = express.Router();

paymentRouter.post("/customers",createNewUser)
paymentRouter.get("/customers",getAllCusomers)

paymentRouter.patch("/customers/upgrade/tier1",upgradeCustomer)

module.exports = paymentRouter
