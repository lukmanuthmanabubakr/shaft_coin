import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Transaction = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/payment/user/transaction');
            setData(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);


    return (
    <div></div>
  )
}

export default Transaction