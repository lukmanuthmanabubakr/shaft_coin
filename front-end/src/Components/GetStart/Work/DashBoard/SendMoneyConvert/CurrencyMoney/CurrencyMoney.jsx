import axios from "axios";
import React, { useEffect, useState } from "react";

const CurrencyMoney = () => {
    // const [supportedIncomingCurrencies, setSupportedIncomingCurrencies] = useState([]);
    const [supportedOutgoingCurrencies, setSupportedOutgoingCurrencies] = useState([]);
    
  
    const handleSelect = (value) => {
      console.log('select', value)
      setcurrency(value)
    }
    useEffect(() => {
      axios
        .get("http://localhost:5000/payment/user/currency/supported", {
          withCredentials: true,
        })
        .then((response) => {
        //   setSupportedIncomingCurrencies(response.data.data.incomingCurrencies);
        //   console.log(response.data.data.incomingCurrencies);
          setSupportedOutgoingCurrencies(response.data.data.outgoingCurrencies);
          console.log(response.data.data.outgoingCurrencies);
        })
        .catch((error) => {
          console.error("Error fetching .incomingCurrenciesd currencies:", error);
        });
    }, []);
  
  
    return (
      <div className="currencySupported">
       <select className="currensup" onChange={(e) => handleSelect(e.target.value)}>
        {supportedOutgoingCurrencies.map((currency, index) => (
          <option className="currenOp" key={index} value={currency} onClick={() => {
            handleSelect(currency)
          }}>
            {currency}
          </option>
        ))}
      </select>
      </div>
    );
  
}

export default CurrencyMoney