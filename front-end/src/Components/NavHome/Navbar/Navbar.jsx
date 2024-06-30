import { BsArrowRightShort } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../ThemeContext";

const Navbar = () => {
  const [active, setActive] = useState("coin-base-links_m");
  const [toggleIcon, setToggleIcon] = useState("navbar_toggle");
  const navToggle = () => {
    active === "coin-base-links_m"
      ? setActive("coin-base-links_m nav_active")
      : setActive("coin-base-links_m");

    //Toggler Icon

    toggleIcon === "navbar_toggle"
      ? setToggleIcon("navbar_toggle toggle")
      : setToggleIcon("navbar_toggle");
  };

  const { toggleTheme } = useContext(ThemeContext);


  return (
    <nav className="navbar">
      <div>
        <NavLink className="nyb-wallet-b" to="/">
          shaftCoin
        </NavLink>
      </div>
      <div className={active}>
        <NavLink to="/dashboard">
          <span>Dashboard</span>
          <span className="media_icon">
            <BsArrowRightShort size={20} />
          </span>
        </NavLink>
        <NavLink target="_blank" to="https://www.coinbase.com/learn">
          <span>Learn</span>
          <span className="media_icon">
            <BsArrowRightShort size={20} />
          </span>
        </NavLink>
        <NavLink target="_blank" to="https://www.coinbase.com/products">
          <span>Individuals</span>
          <span className="media_icon">
            <BsArrowRightShort size={20} />
          </span>
        </NavLink>
        <NavLink target="_blank" to="https://www.coinbase.com/exchange">
          <span>Businesses</span>
          <span className="media_icon">
            <BsArrowRightShort size={20} />
          </span>
        </NavLink>
        <NavLink
          target="_blank"
          to="https://www.coinbase.com/developer-platform"
        >
          <span>Developers</span>
          <span className="media_icon">
            <BsArrowRightShort size={20} />
          </span>
        </NavLink>
        <NavLink target="_blank" to="https://www.coinbase.com/about">
          <span>Company</span>
          <span className="media_icon">
            <BsArrowRightShort size={20} />
          </span>
        </NavLink>

        <div className="sign-options">
        <button onClick={toggleTheme}>Toggle Theme</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
      <div className="sign-option">
      <button onClick={toggleTheme}>Toggle Theme</button>
        <button className="sign-up">Sign Up</button>
      </div>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
