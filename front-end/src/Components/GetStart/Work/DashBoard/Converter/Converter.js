// import React from 'react'
// import "./Conveter.css"

import axios from "axios";
import { useEffect, useState } from "react";
import "./Conveter.css"

// const Converter = () => {
//   return (
//     <div className='conveterx'>
        
//     </div>
//   )
// }

// export default Converter

const Converter = () => {
  const [supportedIncomingCurrencies, setSupportedIncomingCurrencies] = useState([]);
  const [supportedOutgoingCurrencies, setSupportedOutgoingCurrencies] = useState([]);
  const [currencyRates, setCurrencyRates] = useState(null);

  useEffect(() => {
    // Fetch supported currencies
    axios
      .get("http://localhost:5000/payment/user/currency/supported", {
        withCredentials: true,
      })
      .then((response) => {
        setSupportedIncomingCurrencies(response.data.data.incomingCurrencies);
        setSupportedOutgoingCurrencies(response.data.data.outgoingCurrencies);
      })
      .catch((error) => {
        console.error("Error fetching supported currencies:", error);
      });

    // Fetch currency rates
    axios
      .get("http://localhost:5000/payment/user/currency/rate")
      .then((response) => {
        const rates = response.data.data;
        setCurrencyRates(rates);
      })
      .catch((error) => {
        console.error("Error fetching currency rates:", error);
      });
  }, []);

  // Render the currency conversion form
  return (
    <div className='conveterx'>
      <h2>Currency Converter</h2>
      <div>
        <label>From:</label>
        <select>
          {supportedIncomingCurrencies.map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>To:</label>
        <select>
          {supportedOutgoingCurrencies.map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" />
      </div>
      <button>Convert</button>
    </div>
  );
};

export default Converter;
