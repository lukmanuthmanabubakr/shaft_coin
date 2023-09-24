import React from "react";
import "./LocateUserFunds.css";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../Asset/logo.png";
import { RxAvatar } from "react-icons/rx";
import { AiFillBank } from "react-icons/ai";

const LocateUserFunds = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="locateUserSec">
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

      <p className="sender">Who are you sending money to?</p>

      <div className="shaftBank">
        <NavLink to="/get-start/SendMoneyConvert/receiverAmount">
          <p className="shaftId">ShaftCoin User</p>
          <p className="avatar">
            <RxAvatar />
          </p>
        </NavLink>
      </div>
      <div className="bank">
        <NavLink>
          <p className="shaftId">Bank Account</p>
          <p className="avatar">
            <AiFillBank />
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default LocateUserFunds;
