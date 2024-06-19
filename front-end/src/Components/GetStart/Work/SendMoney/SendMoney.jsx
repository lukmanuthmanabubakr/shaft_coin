import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SendMoney.css";
import { toast } from "react-toastify";
import TransactionHistory from "../SendTransactionHistory/SendTransactionHistory"
import Success from "../../../../Succes-Page/Success"
import { useNavigate } from "react-router-dom";


const SendMoney = () => {
  const [amount, setAmount] = useState("");
  const [recipientAccountNumber, setRecipientAccountNumber] = useState("");
  const [showTransaction, setShowTransaction] = useState(false); // Add this line to initialize showTransaction state
  const navigate = useNavigate()
  const handleSendMoney = async () => {
    try {
      if (parseInt(amount) < 100) { // Use parseInt to compare numbers
        toast.error("Minimum amount to send is 100");
        return;
      }
      
      const response = await axios.post(
        "http://localhost:5000/api/payment/send-money",
        {
          amount,
          randomAccountNumber: recipientAccountNumber,
        }
      );
      navigate("/success-page")
      
      if (parseInt(amount) > response.data.senderBalance) { // Use parseInt to compare numbers
        return
      } else {
        // Reset input fields on successful send
        setAmount("");
        setRecipientAccountNumber("");

        setTimeout(() => {
          navigate("/get-start/home");
        }, 2000);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error(`Error: ${error.response.status}`);
        }
      } else if (error.request) {
        toast.error("Network Error");
      } else {
        toast.error(`Error: ${error.message}`);
      }
    }
  };

  const handleFetchHistory = () => {
    setShowTransaction(!showTransaction); // Toggle the state
  };


  return (
    <div className="sendMoney">
      <p className="sendContainer">Send Money</p>
      <div className="send-input-group">
        <label>Amount</label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label>Receiver account number</label>
        <input
          type="number"
          placeholder="Recipient Account Number"
          value={recipientAccountNumber}
          onChange={(e) => {
            if (e.target.value.length <= 10) {
              setRecipientAccountNumber(e.target.value);
            }
          }}
          max="9999999999"
        />

        <button className="sendButton" onClick={handleSendMoney}>Send Money</button>
      </div>
      <button className="fetchHistoryButton" onClick={handleFetchHistory}>View Transaction History</button>
      {showTransaction && <TransactionHistory/>} 
    </div>
  );
};

export default SendMoney;
