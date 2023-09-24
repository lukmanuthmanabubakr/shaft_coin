
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./BalSend.css"

const BalSend = () => {
  // const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [isUsd, setIsUsd] = useState(false)
  const [isNaira, setIsNaira] = useState(true)
  const [balances, setBalances] = useState(null)
  useEffect(() => {
    axios
      .get("http://localhost:5000/payment/user/balance", {
        withCredentials: true,
      })
      .then(({data}) => {
        setBalances(data?.data?.balances)
        console.log(data?.data?.balances);
        setAmount(data?.data?.balances?.[0]?.currency);
        setBalances(data?.data?.balances?.[0]?.formattedAmount);
        console.log(data?.data?.balances, 'guihfuiduifuidh');
      })
      .catch((error) => {
        console.error("Error fetching balance:", error);
      });
  }, []);
  return (
    <div className="currency">
    <span className="note"></span>

  </div>
  );
};

export default BalSend;

