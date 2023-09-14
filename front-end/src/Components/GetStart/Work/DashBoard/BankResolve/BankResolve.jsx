import axios from 'axios';
import React, { useEffect, useState } from 'react'

const BankResolve = () => {
    const [bankData, setBankData] = useState(null);

    useEffect(() => {
        axios
          .post("http://localhost:5000/payment/user/bank/resolve")
          .then((response) => {
            setBankData(response.data.data.data);
            console.log(response.data.data.data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
  return (
    <div></div>
  )
}

export default BankResolve