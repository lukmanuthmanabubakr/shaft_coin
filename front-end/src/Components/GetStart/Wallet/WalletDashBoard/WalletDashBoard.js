import React, { useEffect, useState } from "react";
import PaystackPop from "@paystack/inline-js";
import { toast } from "react-toastify";
import "./WalletSashBoard.css";
import { NavLink } from "react-router-dom";



const DashBoard = () => {
  return (
    <article className="my_dash">
      <div className="dashBoard">
         <div>
         <p>Nigerian Naira</p> 
          <select>
              <option value="NGN">NGN</option>
          </select>
         </div>
      </div>
    </article>
  );
};

export default DashBoard;
