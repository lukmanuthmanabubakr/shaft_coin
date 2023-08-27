import React from "react";
// import StripeCheckout from "react-stripe-checkout";
import "./DashBoard.css";

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

        <div>
          <p>Estimated Total balance in</p>

          <select>
            <option value="">NGN</option>
            <option value="author">USD</option>
          </select>

          <button>Send Money</button>
          <button>Add Money</button>
        </div>

        <div>
          <p>You can do something</p>
          <div>
            <b>Invite Friends</b>

            <p>Invite your pals and make money moves together! 💸</p>

            <a>Get referral link</a>
          </div>
          {/* {second} */}
          <div>
            <b>Earn up to 5% interest 💰</b>

            <p>Earn interest on your USD wallet, paid weekly. </p>

            <button>Coming Soon</button>
          </div>
          {/* {third} */}
          <div>
            <b>We’re constantly improving our product, so we always appreciate any feedback you might have</b>

            {/* <a>Suggest a feature</a> */}
          </div>
        </div>

        {/* <StripeCheckout
        token={onToken}
        name='Technical Adda notes'
        stripeKey="pk_test_51Nf7KvLNc8y93iWIVFsfV3MFrITbzydo4E7qSY6A1MREVVg8PssfUVGPqUxkMhcV3D7dCnaPR2DWDtYGQolX499f00W20xvDlq"
      /> */}
      </div>
    </article>
  );
};

export default DashBoard;
