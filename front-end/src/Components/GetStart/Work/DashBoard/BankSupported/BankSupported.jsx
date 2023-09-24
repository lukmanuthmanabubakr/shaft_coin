import axios from 'axios';
import React, { useEffect, useState } from 'react'

const BankSupported = () => {
    const [supportedBanks, setSupportedBanks] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:5000/payment/user/bank/supported", {
            withCredentials: true,
          })
          .then((response) => {
            setSupportedBanks(response.data.data);
            // console.log(response.data.data)
          })
          .catch((error) => {
            console.error("Error fetching supported banks:", error);
          });
      }, []);
  return (
    <div>
        
    </div>
  )
}

export default BankSupported