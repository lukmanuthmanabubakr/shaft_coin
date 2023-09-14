import React from "react";
import "./AboutSecThree.css";
import binaceX from "../../../Asset/binanceavatar.png";
import trust from "../../../Asset/trusted-section.png";

const AboutSecThree = () => {
  return (
    <section className="AboutSecThree">
      <div className="sectioOne">
        <div className="working"  data-aos="fade-up">
          <p className="with">Working with Regulators</p>
          <p className="commit">
            We’re also committed to meeting the highest standards for regulatory
            compliance to maintain our responsibility to our users and further
            build a sustainable path forward for the blockchain industry.
          </p>
        </div>

        <div className="image" data-aos="zoom-in-up">
          <img src={binaceX} alt />
        </div>
      </div>
      <div className="sectioTwo">
        <div className="image" data-aos="zoom-in">
          <img src={trust} alt  className="myImg"/>
        </div>
        <div className="working" data-aos="fade-up">
          <p className="with">Putting Our Users First</p>
          <p className="commit">
          Users are at the heart of everything we do. From the beginning, we’ve made user protection our top priority. That is why we’ve embedded state-of-the-art security measures and strict data privacy controls across the entire Binance ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSecThree;
