import React, {  } from "react";
import { toast } from "react-toastify";
import "./DashBoard.css";
import UseRedirectLogOutUser from "../../../Register/Component/customHook/UseRedirectLogOutUser";
import Payment from "../Payment/Payment";


const DashBoard = () => {
  UseRedirectLogOutUser("/login");
 
  return (
    <article className="my_dash">
      <div className="dashBoard">
        <div className="gather">
          <div className="wel">
            <p className="welcome">Welcome to ShaftCoin</p>
          </div>
        </div>

      <Payment/>
      </div>
    </article>
  );
};

export default DashBoard;







