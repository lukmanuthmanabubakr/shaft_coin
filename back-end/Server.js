require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require('express-session');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoute = require("./Routes/UserRoutes");
const errorHandler = require("./MiddleWare/ErrorMiddleWare");
const jwt = require("jsonwebtoken");
const PaymentRoute = require("./Routes/PaymentRoutes");
const axios = require("axios")

const app = express();

//MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://shaft-coin.vercel.app"],
    credentials: true,
  })
);

app.use(session({
  secret: '(eehd7#$%^ndhd',
  resave: false,
  saveUninitialized: true,
}));

//Routes
app.use("/api/users", userRoute);
app.use("/api/payment", PaymentRoute);


app.get("/", (req, res) => {
  res.send("Home Page");
});

//Error Handler

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT} and connected successfully`);
    });
  })
  .catch((err) => console.log(err));