
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Balance.css"

const Balance = ({currency}) => {
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
      })
      .catch((error) => {
        console.error("Error fetching balance:", error);
      });
  }, []);
  return (
    <div className="currency">
    <span className="note"></span>

    {balances && (
      <>
        {currency === balances[0].currency && (
          <div className="amountRate">
            <p className="amount">{balances[0].currency}</p>
            <p className="rate">{balances[0].formattedAmount.toLocaleString()}</p>
          </div>
        )}

        {currency === balances[1].currency && (
          <div className="amountRate">
            <p className="amount">{balances[1].currency}</p>
            <p className="rate">{(balances[1].formattedAmount.toLocaleString())}</p>
            </div>
        )}
      </>
    )}
  </div>
  );
};

export default Balance;
