import React from "react";
import { NavLink } from "react-router-dom";
import "./Aspect1.css";
import { Typewriter } from 'react-simple-typewriter'

const Aspect1 = () => {
  const isMobileView = () => window.innerWidth <= 320;
  return (
    <>
      <section className="Aspect-1-section">
      
        <div className="Aspect-1-section-intro">
        {isMobileView() ? (
          <h1 className="intese_content">
            Bridging <span>fiat</span> and <span>crypto</span> global the
            {""}
            <span className="typewriter" style={{ color: "#ffbf00", fontWeight: "bold" }}>
              <Typewriter
                words={["Economies", "World", "Universe"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          ) : (
          <h1 className="intese_content">
            Bridging <span>fiat</span> and <span>crypto</span> global the World
          </h1>
          )}
          
          <NavLink to="/get-start/home" className="get-start">
            <span>Get Started</span>
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
