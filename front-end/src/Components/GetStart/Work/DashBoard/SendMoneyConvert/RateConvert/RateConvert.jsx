import axios from "axios";
import React, { useEffect, useState } from "react";

const RateConvert = ({ exchangeRate }) => {
  const [currencyRates, setCurrencyRates] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/payment/user/currency/rate")
      .then((response) => {
        const rates = response.data.data;
        setCurrencyRates(rates);
        console.log(rates);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (currencyRates === null) {
    return <div>Loading...</div>;
  }

  const rateEntries = Object.entries(currencyRates);

  // Use forEach to loop through the array
  rateEntries.forEach(([currency, data]) => {
    // console.log(currency, data);
    
  });

  return (
    <div>
         <div className="btcRate">
      <p className="rate">1 USD</p>
      <p className="eqaulTo">=</p>
      <p className="rateCurrency">{exchangeRate} NGN</p>
    </div>
    </div>
  );
};

export default RateConvert;