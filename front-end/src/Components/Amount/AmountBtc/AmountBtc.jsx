// import React, { useState, useEffect } from "react";
// import "./AmountBtc.css";
// import Logo from "../../../Asset/logo.png";
// import { NavLink, useNavigate } from "react-router-dom";
// import CurrencyRate from "../../GetStart/Work/DashBoard/CurrencyRate/CurrencyRate";
// import CurrencySupported from "../../GetStart/Work/DashBoard/CurrencySupported/CurrencySupported";

// const AmountBtc = () => {
//   const navigate = useNavigate();
//   const [selectedCurrency, setSelectedCurrency] = useState("");
//   const [conversionRate, setConversionRate] = useState(null);
//   const [amount, setAmount] = useState("");
//   const [convertedAmount, setConvertedAmount] = useState(null);

//   const handleCurrencySelect = (currency, rate) => {
//     setSelectedCurrency(currency);
//     setConversionRate(rate);

//     // If an amount is entered, update the converted amount
//     if (amount) {
//       setConvertedAmount(amount * rate);
//     }
//   };

//   const handleAmountChange = (e) => {
//     const inputAmount = e.target.value;
//     setAmount(inputAmount);

//     if (selectedCurrency && conversionRate) {
//       setConvertedAmount(inputAmount * conversionRate);
//     }
//   };

//   const goHome = () => {
//     navigate("/");
//   };
//   return (
//     <section className="amountSec">
//       <div className="amountWallet">
//         <nav className="wallet">
//           <NavLink to="/" onClick={goHome}>
//             {" "}
//             <img src={Logo} alt="bird" />
//             <p>
//               Shaft<span>Coin</span>
//             </p>
//           </NavLink>

//           <NavLink to="/get-start/home" className="dash-board">
//             Go to DashBoard
//           </NavLink>
//         </nav>
//       </div>
//       <div className="btc">
//         <p className="much">How much are you sending?</p>
//         <div className="amountBtc">
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AmountBtc;


import React, {useState, useEffect} from "react";
import "./AmountBtc.css";
import Logo from "../../../Asset/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import CurrencyRate from "../../GetStart/Work/DashBoard/CurrencyRate/CurrencyRate";
import CurrencySupported from "../../GetStart/Work/DashBoard/CurrencySupported/CurrencySupported";

const AmountBtc = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <section className="amountSec">
      <div className="amountWallet">
        <nav className="wallet">
          <NavLink to="/" onClick={goHome}>
            {" "}
            <img src={Logo} alt="bird" />
            <p>
              Shaft<span>Coin</span>
            </p>
          </NavLink>

          <NavLink to="/get-start/home" className="dash-board">
            Go to DashBoard
          </NavLink>
        </nav>
      </div>
      <div className="btc">
      <p className="much">How much are you sending?</p>
            <div className="amountBtc">

            </div>
      </div>
    </section>
  );
};

export default AmountBtc;
