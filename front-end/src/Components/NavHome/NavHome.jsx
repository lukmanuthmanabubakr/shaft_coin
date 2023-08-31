import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import advert from "../../Asset/myVid.mp4";
import "./NavHome.css";
import "../../Video/Video.css"

const NavHome = () => {
  return (
    <>
      <div className="home-nav-compnents">
      <video autoPlay loop muted playsInline className='background-clip'>
         <source src={advert} type="video/mp4" />
       </video>
        <Navbar />
        <Home />
      </div>
    </>
  );
};

export default NavHome;
