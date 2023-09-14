import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DashBoard.css";

const Dash = () => {
  //balance
  const [balance, setBalance] = useState(null);
  const [supportedBanks, setSupportedBanks] = useState([]);
  const [bankData, setBankData] = useState(null);
  const [currencyRates, setCurrencyRates] = useState(null);
  const [supportedIncomingCurrencies, setSupportedIncomingCurrencies] =
    useState([]);
  const [supportedOutgoingCurrencies, setSupportedOutgoingCurrencies] =
    useState([]);
  const [minimumAllowed, setMinimumAllowed] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/payment/user/balance", {
        withCredentials: true,
      })
      .then((response) => {
        setBalance(response?.data?.data?.balances?.[0]?.amount);
      })
      .catch((error) => {
        console.error("Error fetching balance:", error);
      });
  }, []);
  //bank supported
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
  //bank Resoolve
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
  //currency Rate
  useEffect(() => {
    axios
      .get("http://localhost:5000/payment/user/currency/rate")
      .then((response) => {
        const rates = response.data.data;

        Object.keys(rates).forEach((currencyPair) => {
          const rateData = rates[currencyPair];
          console.log(`${currencyPair}: ${rateData.rate}`);

          setCurrencyRates(rates);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  //currencySupported
  useEffect(() => {
    axios
      .get("http://localhost:5000/payment/user/currency/supported", {
        withCredentials: true,
      })
      .then((response) => {
        setSupportedIncomingCurrencies(response.data.data.incomingCurrencies);
        setSupportedOutgoingCurrencies(response.data.data.outgoingCurrencies);
        console.log(response.data.data.incomingCurrencies);
        console.log(response.data.data.outgoingCurrencies);
      })
      .catch((error) => {
        console.error("Error fetching .incomingCurrenciesd currencies:", error);
      });
  }, []);
  // minimum Allowed
  useEffect(() => {
    axios
      .get("http://localhost:5000/payment/user/currency/minimum-allowed", {
        withCredentials: true, // Send cookies along with the request (since you're using credentials in your server)
      })
      .then((response) => {
        setMinimumAllowed(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching minimum allowed currency:", error);
      });
  }, []);

  //api key
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
  //transaction
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/payment/user/transaction"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my_dash">
      <div className="dashBoard">
        <p className="welcome">Welcome to ShaftCoin</p>

        {balance && (
          <div>
            <p style={{ color: "black" }}>Available Balance: {balance}</p>
          </div>
        )}
        <h1>Supported Banks</h1>
        <ul>
          {supportedBanks.map((bank, index) => (
            <li  style={{ color: "#ffbf00" }} key={index}>{bank.Name}</li>
          ))}
        </ul>
        <ul>{bankData && <li>{bankData.responsecode}</li>}</ul>
        {bankData && (
          <div>
            <p style={{ color: "#ffbf00" }}>
              Available Balance: {bankData.accountname}
            </p>
          </div>
        )}
        {currencyRates && Object.keys(currencyRates).map((currencyPair) => (
        <div key={currencyPair}>
          <p style={{ color: "#ffbf00" }}>
            {currencyPair}:{currencyRates[currencyPair].rate}
          </p>
        </div>
      ))}

        <ul>
          {supportedIncomingCurrencies.map((currency, index) => (
            <li key={index}>{currency}</li>
          ))}
        </ul>
        <ul>
          {supportedOutgoingCurrencies.map((currency, index) => (
            <li key={index}>{currency}</li>
          ))}
        </ul>
        {/* <ul>
          {minimumAllowed.map((minimum, allowed) => (
            <li key={allowed}>{minimum.NGN}</li>
          ))}
        </ul>
        <button onClick={fetchApiKey}>Fetch API Key</button> */}
        {responseData && (
          <div>
            <h2>API Key:</h2>
            {responseData}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dash;
