import React, { useEffect, useState } from "react";
import "./GetStart.css";
import DropDownMenu from "../../DropDown/DropDownMenu";
import defaultAvatar from "../../Asset/tartar.webp";
import Logo from "../../Asset/logo.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ShowOnLogIn } from "../Register/Component/Protect/HiddenLink";
import { UserName } from "../Register/Pages/Profile/Profile";
import { useSelector } from "react-redux";
import NavList from "./NavList/NavList";
import DashBoard from "./Work/DashBoard/DashBoard";
import UseRedirectLogOutUser from "../Register/Component/customHook/UseRedirectLogOutUser";


const GetStart = () => {
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

        <p className="home">Home</p>
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


            <UserName />
          </ShowOnLogIn>
          {openProfile && <DropDownMenu />}
        </div>
      </div>

      <div className="container">
      <NavList/>
      <DashBoard/>
      </div>
    </section>
  );
};

export default GetStart;
