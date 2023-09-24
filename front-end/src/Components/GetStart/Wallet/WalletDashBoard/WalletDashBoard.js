import React, { useEffect, useState } from "react";
import PaystackPop from "@paystack/inline-js";
import { toast } from "react-toastify";
import "./WalletSashBoard.css";
import { NavLink } from "react-router-dom";
import CurrencySupported from "../../Work/DashBoard/CurrencySupported/CurrencySupported";
import Balance from "../../Work/DashBoard/Balance/Balance";
import { TbSend } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";


const DashBoard = () => {

  const [selectedCurrency, setSelectedCurrency] = useState("NGN");
  const [selectedCurrencyUsd, setSelectedCurrencyUsd] = useState("USD");

  const convertedUsdToNgn = setSelectedCurrencyUsd * 410;

  return (
    <article className="my_dash">
      <div className="dashBoard">
      <Balance currency={selectedCurrency}/>
      <Balance currency={selectedCurrencyUsd}/> 
      </div>
    </article>
  );
};

export default DashBoard;
