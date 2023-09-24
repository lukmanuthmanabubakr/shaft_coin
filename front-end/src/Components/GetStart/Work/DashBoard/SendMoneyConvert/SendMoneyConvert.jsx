import React, { useState, useEffect } from "react";
import "./SendMoneyConvert.css";
import Logo from "../../../../../Asset/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import BalSend from "./BalSend/BalSend";
import RateConvert from "./RateConvert/RateConvert";
import axios from "axios";
import UseRedirectLogOutUser from "../../../../Register/Component/customHook/UseRedirectLogOutUser";

import { toast } from "react-toastify";

import { TbSend, TbArrowsExchange2 } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { RiShareCircleFill } from "react-icons/ri";
import Balance from "../Balance/Balance";

import CurrencySupported from "../CurrencySupported/CurrencySupported";
import MinimuAllowed from "../MinimuAllowed/MinimuAllowed";

const SendMoneyConvert = ({ currency }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");
  const [minimumAllowed, setMinimumAllowed] = useState(null);


  UseRedirectLogOutUser("/login");
  // const [number, setNumber] = useState(0);
  const [number, setNumber] = useState({ send: 0, receive: 0 });
  const [exchangeRate, setExchangeRate] = useState(null); // State to store exchange rate

  // const handleInputChange = (e) => {
  //   const value = e.target.value;
  //   if (/^\d*$/.test(value)) {
  //     setNumber(value);
  //   }
  // };

  const handleInputChange = (e, inputType) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setNumber(prevState => ({
        ...prevState,
        [inputType]: value
      }));
    }
  };

  const isNextButtonDisabled = number.send < minimumAllowed || number.receive < minimumAllowed;


  const handleButtonClick = () => {
    const balanceAmount = Balance(selectedCurrency);
    setNumber(balanceAmount.toString());
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/payment/user/currency/rate")
      .then((response) => {
        const rates = response.data.data;
        const usdToNgnRate = rates.USDNGN_.rate;
        setExchangeRate(usdToNgnRate);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
          <div className="btcRate">
            {exchangeRate && <RateConvert exchangeRate={exchangeRate} />}
          </div>

          <div className="inputAmount">
            <div className="bel">
              <label>send</label>
              <input
                type="text"
                value={number.send}
                onChange={(e) => handleInputChange(e, "send")}
              />
            </div>
            <div className="selcet">
              <CurrencySupported setcurrency={setSelectedCurrency} />
            </div>
          </div>
          <div className="myBal">
            <p className="baln">Balance:</p>
            <p className="the_bal">
              <Balance
                currency={selectedCurrency}
                onClick={handleButtonClick}
              />
            </p>
          </div>

          <div className="inputAmount">
            <div className="bel">
              <label>Receive</label>
              <input
                type="text"
                value={number.receive}
                onChange={(e) => handleInputChange(e, "receive")}
              />
            </div>
            <div className="selcet"></div>
          </div>
          <NavLink to="/get-start/SendMoneyConvert/user">
          <button className="btn_next" disabled={isNextButtonDisabled}>Next</button>
          </NavLink>
        </div>
      </div>
      <MinimuAllowed />
    </section>
  );
};

export default SendMoneyConvert;
