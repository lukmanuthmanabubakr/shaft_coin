import React, { useEffect, useState } from "react";

import defaultAvatar from "../../../../Asset/tartar.webp";
import Logo from "../../../../Asset/logo.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import UseRedirectLogOutUser from "../../../Register/Component/customHook/UseRedirectLogOutUser";
import { ShowOnLogIn } from "../../../Register/Component/Protect/HiddenLink";
import { UserName } from "../../../Register/Pages/Profile/Profile";
import DropDownMenu from "../../../../DropDown/DropDownMenu";
import NavList from "../../NavList/NavList";
import SendMoney from "./SendMoney";



const SendMoneyCompnent = () => {
  UseRedirectLogOutUser("/login");
  const [openProfile, setOpenProfile] = useState(false);
  const { user } = useSelector(
    (state) => state.auth
  );

  const initialState = {
    photo: user?.photo || "",
  };

  const [imagePreview, setimagePreview] = useState(null);

 
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <section className="get-start">
      <div className="myNav">
        <NavLink to="/" onClick={goHome}>
          <img src={Logo} alt="bird" />
          <p className="shaft">
            Shaft<span>Coin</span>
          </p>
        </NavLink>

        <p className="home">Send Money</p>
        <div
          className="select-option"
          onClick={() => setOpenProfile((prev) => !prev)}
        >
          <ShowOnLogIn>
          <img
            src={
              imagePreview === null && !user?.photo
                ? defaultAvatar
                : imagePreview || user?.photo
            }
            alt=""
          />


            <UserName/>
          </ShowOnLogIn>
          {openProfile && <DropDownMenu />}
        </div>
      </div>

      <div className="container">
      <NavList/>
      <SendMoney/>
      </div>
    </section>
  );
};

export default SendMoneyCompnent;
