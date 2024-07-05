import React, { useContext } from "react";
import shaftLogo from "../../../Assets/shaftCoin.png";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../ThemeContext";

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <div>
        <div>
          <img src={shaftLogo} alt="shaftCoin" />
        </div>
        <div>
          <NavLink>About</NavLink>
          <NavLink>Contact Us</NavLink>
          <NavLink>Dashboard</NavLink>
          <NavLink>Dashboard</NavLink>
          <NavLink>Dashboard</NavLink>
        </div>
      </div>
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <NavLink>Sign Up</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
