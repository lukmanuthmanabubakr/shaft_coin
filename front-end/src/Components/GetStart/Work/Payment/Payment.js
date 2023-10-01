import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import "./Payment.css";
import PaymentLoader from "../../../../PaymentLoader/PaymentLoader";
import AddMoneyComponent from "../AddMoney/AddMoney";
import { NavLink } from "react-router-dom";
import {AiOutlineCopy} from "react-icons/ai"
import { toast } from "react-toastify";

const Payment = () => {
  const [userBalance, setUserBalance] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("NGN"); 
  // const randomAccountNumber = useSelector(state => state.auth.user.randomAccountNumber);
  const randomAccountNumber = useSelector(state => state.auth.user?.randomAccountNumber || '');


  const textRef = useRef(null);

  const handleCopy = () => {
    textRef.current.select();
    document.execCommand('copy');
    toast.success("account number copied successfully")
  };

  // const handleCurrencyChange = (e) => {
  //   setSelectedCurrency(e.target.value);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/payment/user/balance?currency=${selectedCurrency}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setUserBalance(response.data.userBalance);
        selectedCurrency = selectedCurrency.toLocaleString();
      } catch (error) {
        console.error("Error fetching user balance:", error);
      }
    };

    fetchData();
  }, [selectedCurrency]);

 

  return (
    <div className="myInboxes">
      <div className="userBalances">
        {userBalance !== null ? (
          <p className="selectUserBal">
            Balance: <p className="currency">{selectedCurrency}</p>{" "}
            <p className="balUser">{userBalance}</p>
          </p>
        ) : (
          <PaymentLoader />
        )}
{/* 
        <select value={selectedCurrency} onChange={handleCurrencyChange}>
          <option value="NGN">NGN</option>
          <option value="USD">USD</option>
          <option value="EURO">EURO</option>
        </select> */}
        <div className="add_send">
          <NavLink to="/get-start/home/add-money">Add Money</NavLink>
          <NavLink to="/get-start/home/send-money">Send Money</NavLink>
        </div>
      </div>
      <div className="acct_balance">
          <div className="copyContain"><p className="copyAcctun">Account Number</p><p className="copyNum"><input type="text" ref={textRef} value={randomAccountNumber} readOnly />
          </p>
          <button className="copy-button" onClick={handleCopy}>
            <AiOutlineCopy/>
          </button></div>
          
      </div>
    </div>
  );
};

export default Payment;
