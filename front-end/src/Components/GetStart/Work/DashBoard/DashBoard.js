import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "./DashBoard.css";
import UseRedirectLogOutUser from "../../../Register/Component/customHook/UseRedirectLogOutUser";
import CustomerUser from "../../CustomerUser/CustomerUser";
import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const DashBoard = () => {
  UseRedirectLogOutUser("/login");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  

  return (
    <article className="my_dash">
      <div className="dashBoard">
        <div className="gather">
          <div className="wel">
            <p className="welcome">Welcome to ShaftCoin</p>
          </div>

          <div className="welj">
            <NavLink to="/get-start/tier-one">Upgrade to tier one</NavLink>
          </div>

          <div className="balance">
            <button className="add" onClick={openModal}>
              Create a Customer <AiOutlinePlus />
            </button>
          </div>
        </div>
        <CustomerUser isOpen={isModalOpen} closeModal={closeModal}/>
      </div>      
    </article>
  );
};

export default DashBoard;







