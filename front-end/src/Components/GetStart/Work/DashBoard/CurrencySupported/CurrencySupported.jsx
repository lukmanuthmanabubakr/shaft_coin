import axios from "axios";
import React, { useEffect, useState } from "react";

const CurrencySupported = () => {
  const [supportedIncomingCurrencies, setSupportedIncomingCurrencies] = useState([]);
  const [supportedOutgoingCurrencies, setSupportedOutgoingCurrencies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/payment/user/currency/supported", {
        withCredentials: true,
      })
      .then((response) => {
        setSupportedIncomingCurrencies(response.data.data.incomingCurrencies);
        setSupportedOutgoingCurrencies(response.data.data.outgoingCurrencies);
      })
      .catch((error) => {
        console.error("Error fetching .incomingCurrenciesd currencies:", error);
      });
  }, []);


  return (
    <div>
      <select>
        {supportedOutgoingCurrencies.map((currency, index) => (
          <option key={index} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySupported;


