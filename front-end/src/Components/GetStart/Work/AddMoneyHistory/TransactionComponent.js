import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TransactionComponent.css";

const TransactionComponent = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/payment/transactions");
        const simplifiedTransactions = response.data.transactions.map(transaction => ({
          amount: transaction.amount,
          type: transaction.type,
          time: transaction.time,
        }));
        setTransactions(simplifiedTransactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="transaction-list">
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            <ul>
              {Object.entries(transaction).map(([key, value]) => (
                <li key={key}>
                  {key}: {value}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionComponent;
