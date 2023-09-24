import axios from "axios";
import React, { useState } from "react";

const ApiKey = () => {
  const [responseData, setResponseData] = useState(null);

  const fetchApiKey = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/payment/user/auth/api-key"
      );
      setResponseData(response.data.data.key);
      console.log(response.data.data.key);
    } catch (error) {
      console.error("Error fetching API key:", error);
    }
  };
  return <div><button onClick={fetchApiKey}>fetch</button></div>;
};

export default ApiKey;
