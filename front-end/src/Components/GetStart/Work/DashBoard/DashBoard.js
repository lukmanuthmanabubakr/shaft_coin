// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./DashBoard.css";

// const DashBoard = () => {
//   //balance
//   const [balance, setBalance] = useState(null);
//   const [supportedBanks, setSupportedBanks] = useState([]);
//   const [bankData, setBankData] = useState(null);
//   const [currencyRates, setCurrencyRates] = useState(null);
//   const [supportedIncomingCurrencies, setSupportedIncomingCurrencies] = useState([]);
//   const [supportedOutgoingCurrencies, setSupportedOutgoingCurrencies] = useState([]);
//   const [minimumAllowed, setMinimumAllowed] = useState(null);
//   const [responseData, setResponseData] = useState(null);
//   const [data, setData] = useState(null);


//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/payment/user/balance", {
//         withCredentials: true,
//       })
//       .then((response) => {
//         setBalance(response?.data?.data?.balances?.[0]?.amount);
//       })
//       .catch((error) => {
//         console.error("Error fetching balance:", error);
//       });
//   }, []);
//   //bank supported
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/payment/user/bank/supported", {
//         withCredentials: true,
//       })
//       .then((response) => {
//         setSupportedBanks(response.data.data);
//         // console.log(response.data.data)
//       })
//       .catch((error) => {
//         console.error("Error fetching supported banks:", error);
//       });
//   }, []);
//   //bank Resoolve
//   useEffect(() => {
//     axios
//       .post("http://localhost:5000/payment/user/bank/resolve")
//       .then((response) => {
//         setBankData(response.data.data.data);
//         console.log(response.data.data.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);
//   //currency Rate
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/payment/user/currency/rate")
//       .then((response) => {
//         setCurrencyRates(response.data.data);
//         console.log(response.data.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);
//   //currencySupported
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/payment/user/currency/supported", {
//         withCredentials: true,
//       })
//       .then((response) => {
//         setSupportedIncomingCurrencies(response.data.data.incomingCurrencies,);
//         setSupportedOutgoingCurrencies(response.data.data.outgoingCurrencies);
//         console.log(response.data.data.incomingCurrencies);
//         console.log(response.data.data.outgoingCurrencies);
//       })
//       .catch((error) => {
//         console.error("Error fetching .incomingCurrenciesd currencies:", error);
//       });
//   }, []);
//   // minimum Allowed
//   useEffect(() => {
//     axios.get('http://localhost:5000/payment/user/currency/minimum-allowed', {
//       withCredentials: true, // Send cookies along with the request (since you're using credentials in your server)
//     })
//     .then(response => {
//       setMinimumAllowed(response.data.data);
//       console.log(response.data.data);
//     })
//     .catch(error => {
//       console.error('Error fetching minimum allowed currency:', error);
//     });
//   }, []);

//   //api key
//   const fetchApiKey = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/payment/user/auth/api-key');
//       setResponseData(response.data.data.key);
//       console.log(response.data.data.key);
//     } catch (error) {
//       console.error('Error fetching API key:', error);
//     }
//   };
//   //transaction
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/payment/user/transaction');
//         setData(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="my_dash">
//       <div className="dashBoard">
//         <p className="welcome">Welcome to ShaftCoin</p>

//         {balance && (
//           <div>
//             <p style={{ color: "black" }}>Available Balance: {balance}</p>
//           </div>
//         )}
//         <h1>Supported Banks</h1>
//         <ul>
//           {supportedBanks.map((bank, index) => (
//             <li key={index}>{bank.Name}</li>
//           ))}
//         </ul>
//         <ul>{bankData && <li>{bankData.responsecode}</li>}</ul>
//         {bankData && (
//           <div>
//             <p style={{ color: "white" }}>
//               Available Balance: {bankData.accountname}
//             </p>
//           </div>
//         )}
//         {currencyRates && (
//           <div>
//             <p style={{ color: "white" }}>
//               mamaan Balance: {currencyRates.BNBBNB.key}
//             </p>
//           </div>
//         )}
//         <ul>
//           {supportedIncomingCurrencies.map((currency, index) => (
//             <li key={index}>{currency}</li>
//           ))}
//         </ul>
//         <ul>
//           {supportedOutgoingCurrencies.map((currency, index) => (
//             <li key={index}>{currency}</li>
//           ))}
//         </ul>
//         {/* <ul>
//           {minimumAllowed.map((minimum, allowed) => (
//             <li key={allowed}>{minimum.NGN}</li>
//           ))}
//         </ul> */}
//         <button onClick={fetchApiKey}>Fetch API Key</button>
//         {responseData && (
//         <div>
//           <h2>API Key:</h2>
//           {responseData}
//         </div>
//       )}
//       </div>
//     </div>
//   );
// };



// export default DashBoard;






import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./DashBoard.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { TbSend } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import Balance from "./Balance/Balance";
import BankSupported from "./BankSupported/BankSupported";
import BankResolve from "./BankResolve/BankResolve";
import CurrencyRate from "./CurrencyRate/CurrencyRate";
import CurrencySupported from "./CurrencySupported/CurrencySupported";
import MinimuAllowed from "./MinimuAllowed/MinimuAllowed";
import ApiKey from "./ApiKey/ApiKey";
import Transaction from "./Transaction/Transaction";
import BalanceWithDraw from "./BalanceWithDraw/BalanceWithDraw";
import Payment from "./Payment/Payment";
import TransactionSummary from "./TransactionSummary/TransactionSummary";
import TransferFunds from "./TransferFunds/TransferFunds";
import BalanceConverter from "./BalanceConverter/BalanceConverter";

const DashBoard = () => {
  return (
    <article className="my_dash">
      <div className="dashBoard">
        <p className="welcome">Welcome to ShaftCoin</p>
            <Balance/>
            <BankSupported/>
            <BankResolve/>
            <CurrencyRate/>
        <div className="balance">
          <p className="total">Estimated Total balance in</p>
            <CurrencySupported/>
            <MinimuAllowed/>
            <ApiKey/>
          <Transaction/>
          <BalanceWithDraw/>
          <Payment/>
          <TransactionSummary/>
          <TransferFunds/>
          <BalanceConverter/>

          <div className="money">
            <NavLink to="/get-start/amount">
              <button className="send"> <span><TbSend size={25}/></span> Send Money</button>
            </NavLink>
            <button className="add"> <span>
            <IoMdAdd size={25}/></span>  Add Money
            </button>
          </div>
        </div>
      </div>
      {/* {isModalOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>

            <p className="add_money">Add Money To your wallet</p>

            <form id="paymentForm" className="" onSubmit={payWithPaystack}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email-address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="tel"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  id="amount"
                />
              </div>

              {usdAmount !== null && (
                <p className="aprox">
                  {amount} Naira is approximately $
                  {usdAmount} USD.
                </p>
              )}

              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  id="first-name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  id="last-name"
                />
              </div>
              <div className="form-group">
                <button type="submit">Pay</button>
              </div>
            </form>
          </div>
        </div>
      )} */}
    </article>
  );
};

export default DashBoard;
