

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SendTransactionHistory.css"; // Create a CSS file for styling

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transaction history when the component mounts
    axios
      .get("http://localhost:5000/api/payment/send-details-history")
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching transaction history:", error);
      });
  }, []);

  return (
    <div className="transaction-history">
      <ul className="transaction-list">
        {transactions.map((transaction, index) => (
          <li className="transaction-item" key={index}>
            <div className="transaction-details">
              <p><strong>Transaction ID:</strong> {transaction._id}</p>
              <p><strong>Sender:</strong> {transaction.sender}</p>
              <p><strong>Recipient:</strong> {transaction.recipient}</p>
              <p><strong>Amount:</strong> {transaction.amount}</p>
              <p><strong>Successful:</strong> {transaction.successful ? "Yes" : "No"}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
