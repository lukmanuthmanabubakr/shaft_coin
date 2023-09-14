import React, { useState } from "react";
import "./PageMenu.css";
import {BsPersonCircle} from "react-icons/bs"
import {FaUserShield} from "react-icons/fa"
import {BiLock} from "react-icons/bi"
import { NavLink } from "react-router-dom";
import { AdminAutoLink } from "../Protect/HiddenLink";
import { FaTimes, FaBars } from "react-icons/fa";

const PageMenu = () => {
 const [isMobile, setIsMobile] = useState(false);
  return (
  <nav>
     <div  className={isMobile ? "theNavMobile" : "theNav"}
          onClick={() => setIsMobile(false)} >
        <article>
            <NavLink to="/get-start/profile"> <span className="icon"><BsPersonCircle/> </span><span className="pro">Profile</span></NavLink>
        </article>
        <article>
          <NavLink to="/changePassword"> <span className="icon"><BiLock/></span> <span className="pro"> Change Passoword</span></NavLink>
        </article>
        <AdminAutoLink/>
        <article>
     <AdminAutoLink>
     <NavLink to="/user"> <span className="icon"><FaUserShield/></span> <span className="pro">Users</span></NavLink>
     </AdminAutoLink>
        </article>
        <AdminAutoLink/>
    </div>
    <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <FaTimes/> : <FaBars />}
      </button>
  </nav>
  );
};

export default PageMenu;
