import React from "react";
import { NavLink } from "react-router-dom";
import "./Aspect1.css";

const Aspect1 = () => {
  return (
    <>
      <section className="Aspect-1-section">
        <div className="Aspect-1-section-intro">
          <h1 className="intese_content">
            Bridging the <span>fiat</span> and <span>crypto</span> global the
            economies
          </h1>
          <NavLink to="/get-start/home" className="get-start">
            Get Started
          </NavLink>
          <p className="intese_content-2">
            Crucial payment support for Web3 platforms is here. Enable your
            users to buy and sell crypto from your app.
          </p>
        </div>
        <div className="Aspect-1-section-quicky"></div>
      </section>
    </>
  );
};

export default Aspect1;
