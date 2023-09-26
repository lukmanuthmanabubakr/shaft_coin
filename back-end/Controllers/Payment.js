const asyncHandler = require("express-async-handler");
const fetch = require("node-fetch");
const paymentUser = require("../Models/Payment");
const paymentUserInfo = require("../Models/paymentUserInfo");
const axios = require('axios');

// const { v4: uuidv4 } = require("uuid");
// const paymentUserInfo = require("../Models/paymentUserInfo");

// Create a new user
const createNewUser = asyncHandler(async (req, res) => {
  const { first_name, last_name, email, country } = req.body; // Destructure the values from req.body

  const url = "https://sandbox.api.maplerad.com/v1/customers";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        "Bearer mpr_sandbox_sk_114cd546-9197-4437-b6dc-2e3ff89d72fe",
    },
    body: JSON.stringify({
      first_name,
      last_name,
      email,
      country,
    }),
  };

  if (!first_name || !last_name || !email || !country) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }

  const userExists = await paymentUser.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Email already exists");
  }

  const newUser = new paymentUser({
    first_name,
    last_name,
    email,
    country,
  });
  await newUser.save();
  // console.log(newUser);

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    // const customerIds = json.data.id;
    // console.log(customerIds);
    const customerId = json.data;
    // console.log(customerId);
    const newPaymentUserInfo = new paymentUserInfo({
      customerId: customerId,
    });
    await newPaymentUserInfo.save();
    res.status(200).json(json);
  } catch (err) {
    console.error("error:", err);
    res.status(500).json({ message: "Internal Server Error" }); // Send an error response back to the client
  }
});

//Upgrade customer
const upgradeCustomer = asyncHandler(async (req, res) => {
  const {
    dob,
    phone_country_code,
    phone_number,
    street,
    street2,
    city,
    state,
    country,
    postal_code,
    identification_number,
    photo,
    customer_id,
  } = req.body;

  const { customerIds } = req.body;

  const url = "https://sandbox.api.maplerad.com/v1/customers/upgrade/tier1";
  const options = {
    method: "PATCH",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        "Bearer mpr_sandbox_sk_114cd546-9197-4437-b6dc-2e3ff89d72fe",
    },
    body: JSON.stringify({
      dob,
      phone: { phone_country_code, phone_number },
      address: {
        street,
        street2,
        city,
        state,
        country,
        postal_code,
      },
      customer_id,
      identification_number,
      photo,
    }),
  };

  if (
    !dob ||
    !phone_country_code ||
    !phone_number ||
    !street ||
    !state ||
    !city ||
    !postal_code ||
    !identification_number ||
    !country ||
    !customer_id
  ) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log("response:", json);
    res.status(200).json(json);
  } catch (err) {
    console.error("error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


const getAllCusomers = asyncHandler (async(req, res) => {
  const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://sandbox.api.maplerad.com/v1/customers?page=1&page_size=5',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer mpr_sandbox_sk_114cd546-9197-4437-b6dc-2e3ff89d72fe'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
})
module.exports = { createNewUser, upgradeCustomer, getAllCusomers };



// const asyncHandler = require("express-async-handler");
// const fetch = require("node-fetch");
// const paymentUser = require("../Models/Payment");
// const paymentUserInfo = require("../Models/paymentUserInfo");
// // const { v4: uuidv4 } = require("uuid");
// // const paymentUserInfo = require("../Models/paymentUserInfo");

// // Create a new user
// const createNewUser = asyncHandler(async (req, res) => {
//   const { first_name, last_name, email, country } = req.body; // Destructure the values from req.body

//   const url = "https://sandbox.api.maplerad.com/v1/customers";
//   const options = {
//     method: "POST",
//     headers: {
//       accept: "application/json",
//       "content-type": "application/json",
//       Authorization:
//         "Bearer mpr_sandbox_sk_114cd546-9197-4437-b6dc-2e3ff89d72fe",
//     },
//     body: JSON.stringify({
//       first_name,
//       last_name,
//       email,
//       country,
//     }),
//   };

//   if (!first_name || !last_name || !email || !country) {
//     res.status(400);
//     throw new Error("Please fill in all required fields");
//   }

//   const userExists = await paymentUser.findOne({ email });

//   if (userExists) {
//     res.status(400);
//     throw new Error("Email already exists");
//   }

//   const newUser = new paymentUser({
//     first_name,
//     last_name,
//     email,
//     country,
//   });
//   await newUser.save();
//   // console.log(newUser);

//   try {
//     const response = await fetch(url, options);
//     const json = await response.json();
//     // const customerIds = json.data;
//     // console.log(customerIds.id);
//     const customerId = json.data;
//     // console.log(customerId);
//     const newPaymentUserInfo = new paymentUserInfo({
//       customerId: customerId,
//     });
//     await newPaymentUserInfo.save();
//     res.status(200).json(json);
//   } catch (err) {
//     console.error("error:", err);
//     res.status(500).json({ message: "Internal Server Error" }); // Send an error response back to the client
//   }
// });

// //Upgrade customer
// const upgradeCustomer = asyncHandler(async (req, res) => {
//   const {
//     customer_id,
//     dob,
//     phone_country_code,
//     phone_number,
//     street,
//     street2,
//     city,
//     state,
//     country,
//     postal_code,
//     identification_number,
//     photo,
//   } = req.body;

//   const url = "https://sandbox.api.maplerad.com/v1/customers/upgrade/tier1";
//   const options = {
//     method: "PATCH",
//     headers: {
//       accept: "application/json",
//       "content-type": "application/json",
//       Authorization:
//         "Bearer mpr_sandbox_sk_114cd546-9197-4437-b6dc-2e3ff89d72fe",
//     },
//     body: JSON.stringify({
//       dob,
//       phone: { phone_country_code, phone_number },
//       address: {
//         street,
//         street2,
//         city,
//         state,
//         country,
//         postal_code,
//       },
//       customer_id,
//       identification_number,
//       photo,
//     }),
//   };

//   if (
//     !dob ||
//     !phone_country_code ||
//     !phone_number ||
//     !street ||
//     !state ||
//     !city ||
//     !postal_code ||
//     !identification_number ||
//     !country ||
//     !customer_id
//   ) {
//     res.status(400);
//     throw new Error("Please fill in all required fields");
//   }

//   try {
//     const response = await fetch(url, options);
//     const json = await response.json();
//     console.log("response:", json);
//     res.status(200).json(json);
//   } catch (err) {
//     console.error("error:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// module.exports = { createNewUser, upgradeCustomer };
