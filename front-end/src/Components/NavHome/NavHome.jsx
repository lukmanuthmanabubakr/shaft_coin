import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import "./NavHome.css";

const NavHome = () => {
  return (
    <>
      <div className="home-nav-compnents">
        
          <Navbar />
          <Home />
        
      </div>
    </>
  );
};

export default NavHome;
