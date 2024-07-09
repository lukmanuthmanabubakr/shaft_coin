import React, { useContext } from "react";
import shaftLogo from "../../../Assets/shaftCoin.png";
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../ThemeContext";
import './Navbar.css'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="navbarComponent">
      <div className="familyOneForNavbar">
        <div>
          <img src={shaftLogo} alt="shaftCoin" />
        </div>
        <div className='NavbarItem'>
          <NavLink>About</NavLink>
          <NavLink>Contact Us</NavLink>
          <NavLink>Dashboarsd</NavLink>
          <NavLink>Dashbsoard</NavLink>
          <NavLink>Dashbsoard</NavLink>
        </div>
      </div>
      <div className="signUpAspect">
        <button onClick={toggleTheme}>
        {theme === 'light' ? <FiMoon size={23}/> : <IoSunnyOutline size={23}/>}
        </button>
        <NavLink className='signUp'>Sign Up</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
