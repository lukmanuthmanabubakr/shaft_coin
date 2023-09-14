import React from "react";
import "./Amount.css";
import Logo from "../../Asset/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Payment from "../GetStart/Work/DashBoard/Payment/Payment";

const Amount = () => {
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
      <div className="main">
        <p className="sending">Where are you sending money from?</p>
       <NavLink>
       <div className="paymentMethod">
          <p className="walllet">Your shaftCoin wallet</p>
          <NavLink>
          <div className="paymentMethodType">
            <div className="send">
              <p>Send from Wallet</p>
              <p>
                <BsArrowRight color="#ffbf00"  size={30}/>
              </p>
            </div>
            <div className="fees">
              <p className="ins">Instant</p>
              <p className="ins">No fees</p>
            </div>
          </div>
          </NavLink>
        </div>
       </NavLink>
       <div className="paymentMethod">
          <p className="walllet">Account or wallet outside Coinprofile</p>
          <NavLink to="/get-start/amount/amountbtc">
          <div className="paymentMethodType">
            <div className="send">
              <p>Send from crypto wallet</p>
              <p>
                <BsArrowRight color="#ffbf00"  size={30}/>
              </p>
            </div>
            <div className="fees">
              <p className="five">5 minutes</p>
            </div>
          </div>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Amount;
