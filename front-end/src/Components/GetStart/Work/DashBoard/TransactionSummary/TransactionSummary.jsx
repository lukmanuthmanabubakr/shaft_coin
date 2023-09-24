
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const TransactionSummary = () => {
  const [transactionData, setTransactionData] = useState(null)
    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/payment/user/transaction/summary');
          const transactionHistory = response.data.data
          setTransactionData(transactionHistory);
          console.log(transactionHistory);
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        fetchData();
      }, []);


      if (transactionData === null) {
        return <div>Loading...</div>;
      }
    
      const rateEntries = Object.entries(transactionData);

      rateEntries.forEach((transaction, index) => {
        console.log(transaction, index);
        const amount = transaction.amount;
        console.log(`Transaction ${index + 1} - Amount: ${amount}`);      });


  return (
    <div>
        
    </div>
  )
}

export default TransactionSummary