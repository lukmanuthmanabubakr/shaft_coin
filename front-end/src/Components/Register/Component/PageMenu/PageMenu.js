import React from "react";
import "./PageMenu.css";
import {BsPersonCircle} from "react-icons/bs"
import {FaUserShield} from "react-icons/fa"
import {BiLock} from "react-icons/bi"
import { NavLink } from "react-router-dom";
import { AdminAutoLink } from "../Protect/HiddenLink";

const PageMenu = () => {
  return (
    <nav className="theNav">
        <article>
            <NavLink to="/get-start/profile"> <span><BsPersonCircle/> </span>Profile</NavLink>
        </article>
        <article>
          <NavLink to="/changePassword"> <span><BiLock/></span> Change Passoword</NavLink>
        </article>
        <AdminAutoLink/>
        <article>
     <AdminAutoLink>
     <NavLink to="/user"> <span><FaUserShield/></span> Users</NavLink>
     </AdminAutoLink>
        </article>
        <AdminAutoLink/>
    </nav>
  );
};

export default PageMenu;
