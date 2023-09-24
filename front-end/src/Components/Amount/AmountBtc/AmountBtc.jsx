import React, { useState, useEffect } from "react";
import "./AmountBtc.css";
import Logo from "../../../Asset/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import CurrencyRate from "../../GetStart/Work/DashBoard/CurrencyRate/CurrencyRate";
import CurrencySupported from "../../GetStart/Work/DashBoard/CurrencySupported/CurrencySupported";

const AmountBtc = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
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
          <p>1USD</p>
          <p>=</p>
          <p>981.20 NGN</p>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="(0.00 to send)"
          />
          <select>
            
          </select>
        </div>
      </div>
    </section>
  );
};

export default AmountBtc;
