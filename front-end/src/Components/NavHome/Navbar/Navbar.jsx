import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../Asset/logo.png";
import "./Navbar.css";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import About from "../../About/About";
import ContactUs from "../../ContactUs/ContactUs";
import {
  ShowOnLogIn,
  ShowOnLogOut,
} from "../../Register/Component/Protect/HiddenLink";

const Navbar = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <nav className="navbar">
      <div className="brandName" onClick={goHome}>
        <NavLink to="/">
          {" "}
          <img src={Logo} alt="bird" />
          <p>
            Shaft<span>Coin</span>
          </p>
        </NavLink>
      </div>

      <div>
        <div className="getStarted">
          {switchTheme === "light" ? (
            <MdOutlineWbSunny
              className="sunIcon"
              onClick={switchTheme}
              size={25}
            />
          ) : (
            <FaRegMoon className="sunIcon" onClick={switchTheme} size={25} />
          )}
          <ShowOnLogOut>
            <NavLink to="/login" className="get-start">
              Login/SignUp
            </NavLink>
          </ShowOnLogOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// // import React, { useEffect, useState } from 'react'
// // import { useSelector } from "react-redux";
// // import './Navbar.css'
// // import { NavLink } from 'react-router-dom'
// // import Logo from '../../../Asset/logo.png'
// // // import { useState } from 'react'
// // import { useNavigate } from 'react-router-dom'
// // import { ShowOnLogOut } from '../../Register/Component/Protect/HiddenLink'
// // import { FaBars, FaTimes } from 'react-icons/fa';

// // const Navbar = () => {
// //   const [scrolled, setScrolled] = useState(false)
// //   const [isMobile, setIsMobile] = useState(false)

// // const navigate = useNavigate()

// // const goHome = () => {
// //   navigate('/')
// // }

// //   const isMobileView = () => window.innerWidth <= (320);

// //   return (
// //    <>
// //      <nav id='navbar'  className={isMobile? "navLinksMobile" : "navLinks"}>
// // <div className='brandName' onClick={goHome}>
// // <NavLink to='/' > <img src={Logo} alt='bird' />
// // <p>Shaft<span>Coin</span></p></NavLink>
// // </div>

// //        <ShowOnLogOut>
// //        {/* <div className='getStarted'>
// //             <NavLink to='/login' className='get-start'>Login/SignUp</NavLink>
// //         </div> */}

// //        <div className='getStarted'>
// //        {isMobileView() ? (
// //   <NavLink to='/login' className='get-start'>
// //     Login
// //   </NavLink>
// // ) : (
// //   <NavLink to='/login' className='get-start'>
// //   Login/SignUp
// //   </NavLink>
// //             )}
// //        </div>
// //        </ShowOnLogOut>

// // <button className='mobile-menu-icons'>
// //   {isMobile ? <FaTimes/> : <FaBars/>}
// // </button>

// //     </nav>
// //    </>
// //   )
// // }

// // export default Navbar
