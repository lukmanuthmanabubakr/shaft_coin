import React from "react";
import "./ReceiverAmount.css";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../Asset/logo.png";

const ReceiverAmount = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="receiverAmount">
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

      <div className="receiverContainer">
        <p className="choose">
          Choose from your recent contacts, or send to a new username.
        </p>

        <p className="listUser">You haven’t added any saved contacts yet</p>
      </div>
      <p className="senderOr">OR</p>

        <div className="newUser">
            <NavLink>
                <p className="">Send to a new username</p>
            </NavLink>
        </div>
    </div>
  );
};

export default ReceiverAmount;
