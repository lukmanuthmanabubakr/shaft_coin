
import axios from 'axios';
import React, { useEffect } from 'react'

const TransactionSummary = () => {
    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/payment/user/transaction/summary');
          console.log(response.data.data);
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        fetchData();
      }, []);
  return (
    <div>
        
    </div>
  )
}

export default TransactionSummary