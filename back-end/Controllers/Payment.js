const asyncHandler = require("express-async-handler");
const User = require("../Models/UserModel");

const { COINPROFILE_NAME } = require("../config");

const balance = asyncHandler(async (req, res) => {
  //     const {email} = req.body
  // const user = await User.findOne({ email });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-Api-User": process.env.COINPROFILE_NAME,
      "X-Api-Key": process.env.COINPROFILE_KEY,
      "X-User-Version": "v2",
    },
  };

  fetch("https://staging-biz.coinprofile.co/v2/balance", options)
    .then((response) => response.json())
    .then((response) => {
      res.status(200).json({
        ...response,
      });
    })
    .catch((err) => console.error(err));
});

const balanceWithDraw = asyncHandler(async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "X-Api-User": "oladimeji",
      "X-Api-Key": "c95ad5321aba42a39c916fbad99ce43f--1709915170542--dba1b62b",
      "X-User-Version": "v2",
    },
    body: JSON.stringify({
      otpType: "otp",
      accountNumber: "9032024600",
      accountName: "ABUBAKR AKANNI LUKMAN-UTHMAN",
      bank: "OPAY",
      bankCode: "858",
      currency: "NGN",
      amount: "2000",
    }),
  };

  fetch("https://staging-biz.coinprofile.co/v2/balance/withdraw", options)
    .then((response) => response.json())
    .then((response) => {
      res.status(200).json({
        ...response,
      });
    })
    .catch((err) => console.error(err));
});
const bankSupported = asyncHandler(async (req, res) => {
  const options = { method: "GET", headers: { accept: "application/json" } };

  fetch(
    "https://staging-biz.coinprofile.co/v2/bank/supported?country=NG",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      res.status(200).json({
        ...response,
      });
    })
    .catch((err) => console.error(err));
});

const bankResolve = asyncHandler(async (req, res) => {
  const options = {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({ bankCode: "100004", accountNumber: "9032024600" }),
  };

  fetch("https://staging-biz.coinprofile.co/v2/bank/resolve", options)
    .then((response) => response.json())
    .then((response) => {
      res.status(200).json({
        ...response,
      });
    })
    .catch((err) => console.error(err));
});

const currencyRate = asyncHandler(async (req, res) => {
  const options = { method: "GET", headers: { accept: "application/json" } };

  fetch("https://staging-biz.coinprofile.co/v2/currency/rate", options)
    .then((response) => response.json())
    .then((response) => {
      res.status(200).json({
        ...response,
      });
    })
    .catch((err) => console.error(err));
});
const currencySupported = asyncHandler(async (req, res) => {
  const options = { method: "GET", headers: { accept: "application/json" } };

  fetch("https://staging-biz.coinprofile.co/v2/currency/supported", options)
    .then((response) => response.json())
    .then((response) => {
      res.status(200).json({
        ...response,
      });
    })
    .catch((err) => console.error(err));
});
const minimumAllowed = asyncHandler(async (req, res) => {
  const options = { method: "GET", headers: { accept: "application/json" } };

  fetch(
    "https://staging-biz.coinprofile.co/v2/currency/minimum-allowed",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      res.status(200).json({
        ...response,
      });
    })
    .catch((err) => console.error(err));
});

const apiKey = asyncHandler(async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "X-Api-User": "oladimeji",
      "X-Api-Key": "c95ad5321aba42a39c916fbad99ce43f--1709915170542--dba1b62b",
      "X-User-Version": "v2",
    },
  };

  fetch("https://staging-biz.coinprofile.co/v2/auth/api-key", options)
    .then((response) => response.json())
    .then((response) => {
      res.status(200).json({
        ...response,
      });
    })
    .catch((err) => console.error(err));
});

const transaction = asyncHandler(async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-Api-User": "oladimeji",
      "X-Api-Key": "c95ad5321aba42a39c916fbad99ce43f--1709915170542--dba1b62b",
      "X-User-Version": "v2",
    },
  };

  fetch("https://staging-biz.coinprofile.co/v2/transaction", options)
    .then((response) => response.json())
    .then((response) => {
      res.status(200).json({
        ...response,
      });
    })
    .catch((err) => console.error(err));
});

const transactionSummary = asyncHandler(async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-Api-User": "oladimeji",
      "X-Api-Key": "c95ad5321aba42a39c916fbad99ce43f--1709915170542--dba1b62b",
      "X-User-Version": "v2",
    },
  };

  fetch("https://staging-biz.coinprofile.co/v2/transaction", options)
    .then((response) => response.json())
    .then((response) => {
      res.status(200).json({
        ...response,
      });
    })
    .catch((err) => console.error(err));
});
const payment = asyncHandler(async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "X-Api-User": "oladimeji",
      "X-Api-Key": "c95ad5321aba42a39c916fbad99ce43f--1709915170542--dba1b62b",
      "X-User-Version": "v2",
    },
    body: JSON.stringify({
      businessId: "coinprofileremittance",
      outgoingAmount: 1000,
      incomingCurrency: "USDT",
      outgoingCurrency: "NGN",
      customerEmail: "shaftcoin4600@gmail.com",
      paymentType: "profile",
      coinprofileUsername: "shaftcoin",
    }),
  };

  fetch("https://staging-biz.coinprofile.co/v2/payment", options)
    .then((response) => response.json())
    .then((response) => {
      res.status(200).json({
        ...response,
      });
    })
    .catch((err) => console.error(err));
});
const transferFunds = asyncHandler(async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "X-Api-User": "oladimeji",
      "X-Api-Key": "c95ad5321aba42a39c916fbad99ce43f--1709915170542--dba1b62b",
      "X-User-Version": "v2",
    },
    body: JSON.stringify({
      currency: "NGN",
      receiverUsername: "shaftcoin",
      amount: "2000",
      otpType: "otp",
    }),
  };

  fetch("https://staging-biz.coinprofile.co/v2/balance/transfer", options)
    .then((response) => response.json())
    .then((response) => {
      res.status(200).json({
        ...response,
      });
    })
    .catch((err) => console.error(err));
});
const balanceConvert = asyncHandler(async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "X-Api-User": "oladimeji",
      "X-Api-Key": "c95ad5321aba42a39c916fbad99ce43f--1709915170542--dba1b62b",
      "X-User-Version": "v2",
    },
    body: JSON.stringify({
      fromCurrency: "NGN",
      toCurrency: "USD",
      amount: "200",
    }),
  };

  fetch("https://staging-biz.coinprofile.co/v2/balance/convert", options)
    .then((response) => response.json())
    .then((response) => {
      res.status(200).json({
        ...response,
      });
    })
    .catch((err) => console.error(err));
});

module.exports = {
  balance,
  balanceWithDraw,
  bankSupported,
  bankResolve,
  currencyRate,
  currencySupported,
  minimumAllowed,
  apiKey,
  transaction,
  transactionSummary,
  payment,
  transferFunds,
  balanceConvert,
};
