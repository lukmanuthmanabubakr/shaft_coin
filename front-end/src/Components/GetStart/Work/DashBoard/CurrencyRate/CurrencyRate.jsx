import axios from "axios";
import React, { useEffect, useState } from "react";

const CurrencyRate = () => {
  const [currencyRates, setCurrencyRates] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/payment/user/currency/rate")
      .then((response) => {
        const rates = response.data.data;
        setCurrencyRates(rates);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return null;
};

export default CurrencyRate;

