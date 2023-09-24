import React, { useState, useEffect } from "react";
import axios from "axios";

const BalanceWithDraw = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    axios
      .post("http://localhost:5000/payment/user/balance/withdraw")
      .then((response) => {
        setResponseData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return <div></div>;
};

export default BalanceWithDraw;
