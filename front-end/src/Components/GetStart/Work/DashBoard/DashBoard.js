import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./DashBoard.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { TbSend,TbArrowsExchange2 } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { RiShareCircleFill } from "react-icons/ri";
import Balance from "./Balance/Balance";
import ApiKey from "./ApiKey/ApiKey"
import CurrencySupported from "./CurrencySupported/CurrencySupported";
import UseRedirectLogOutUser from "../../../Register/Component/customHook/UseRedirectLogOutUser";
import Transaction from "./Transaction/Transaction";
import TransactionSummary from "./TransactionSummary/TransactionSummary";


const DashBoard = () => {
  UseRedirectLogOutUser("/login");
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <article className="my_dash">
      <div className="dashBoard">
        <p className="welcome">Welcome to ShaftCoin</p>
            <Balance currency={selectedCurrency}/>
            
        <div className="balance">
          <article className="theBal">
          <p className="total">Estimated Total balance in</p>
            <CurrencySupported setcurrency={setSelectedCurrency} />
          </article>

          {/* <TransferFunds/> */}

          {/* <NavLink to="/get-start/amount">
              <button className="send"> <span><TbSend size={25}/></span> Send Money</button>
            </NavLink> */}
            {/* <NavLink to="/get-start/amount">
              <button className="send"> <span><IoMdAdd size={25}/></span> Add Money</button>
            </NavLink> */}
         

          <div className="money">
            <div className="mnos">
            <NavLink to="/get-start/SendMoneyConvert">
              <button className="send"> <span><TbSend size={25}/></span> Send Money</button>
            </NavLink>
            <NavLink to="/get-start/amount">
              <button className="send"> <span><RiShareCircleFill size={25}/></span> WithdrawMoney</button>
            </NavLink>
            </div>
            <div className="mnos">
            {/* to="/get-start/amount" */}
            <NavLink>
              <button className="send" onClick={openModal}> <span><IoMdAdd size={25}/></span> Add Money</button>
            </NavLink>
            {isModalOpen && (
              <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Add Money To your Wallet</h2>
            
            <div>
              <div>

              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
            )}
            <NavLink to="/get-start/amount">
              <button className="send"> <span><TbArrowsExchange2 size={25}/></span> Convert Money</button>
            </NavLink>
            </div>

            <TransactionSummary/>
            {/* <Transaction/> */}
          </div>
        </div>
      </div>
      
    </article>
  );
};

export default DashBoard;
