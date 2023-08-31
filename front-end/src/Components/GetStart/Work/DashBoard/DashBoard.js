import React from "react";
// import StripeCheckout from "react-stripe-checkout";
import "./DashBoard.css";
import {NavLink} from "react-router-dom"

const DashBoard = () => {
  // const onToken = (token) => {
  //   console.log(token);
  // };

  return (
    <article className="my_dash">
      <div className="dashBoard">
        <p className="welcome">Welcome to ShaftCoin</p>

        <div className="currency">
          <span className="note">NGN</span>
          <p className="amount">0</p>
          <span className="note">.00</span>
        </div>

        <div className="balance">
          <p className="total">Estimated Total balance in</p>

          <select>
            <option value="">NGN</option>
            <option value="author">USD</option>
          </select>

         <div className="money">
         <NavLink to="/get-start/send"><button className="send">Send Money</button></NavLink>
          <button className="add">Add Money</button>
         </div>
        </div>
      </div>
    </article>
  );
};

export default DashBoard;
