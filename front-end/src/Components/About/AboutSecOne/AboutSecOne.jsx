import React, { useEffect } from 'react'
import "./AboutSecOne.css";
import Family from "../../../Asset/family.png";
import { WiDirectionDownRight, WiDirectionDownLeft } from "react-icons/wi";
import Logo from "../../../Asset/logo.png";
import AOS from "aos"
import "aos/dist/aos.css"

const AboutSecOne = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
},[])
  return (
    <section className="AboutSecOne">
      <div className="family">
        <div className="family-image">
          <img src={Family} alt="familly" className="family-bg" />
          <p className="arrow">
            <WiDirectionDownRight />
          </p>
        </div>
        <div className="family-Text">
          <p className="crypto">CRYPTOCURRENCY:</p>
          <p className="one">ONE FOR ALL</p>
          <p>
            <span className="all">ALL FOR ONE</span>
          </p>
          <p className="establish">
            Through establishing a global social investment network, Bit.Store
            connects investors around the world and provides a social platform
            for DAO members to share their portfolios and experience.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="container-Text" data-aos="fade-up-right">
          <p className="crypto">CRYPTOCURRENCY:</p>
          <p className="one">ONE FOR ALL</p>
          <p>
            <span className="all">ALL FOR ONE</span>
          </p>
          <p className="establish">
            Through establishing a global social investment network, Bit.Store
            connects investors around the world and provides a social platform
            for DAO members to share their portfolios and experience.
          </p>
        </div>

        <div className="container-images" data-aos="fade-down">
          <div className="shaft">
            <p className="coin">
              <img src={Logo} alt="bird" />
              <p className="shaft-coin">
                Shaft<span>Coin</span>
              </p>
            </p>
          </div>
          <p className="arrow">
            <WiDirectionDownLeft />
          </p>
        </div>
      </div>
      
      <div className="inbox">
        <div className="inbox-images" data-aos="fade-up-right">
          <img src={Family} alt="familly" className="inbox-bg" />
        </div>
        <div className="inbox-Text-1" data-aos="zoom-in-up">
          <p className="mission">Our <span className="ourMission">Mission</span></p>
          <p className="establish">
            Through establishing a global social investment network, Bit.Store
            connects investors around the world and provides a social platform
            for DAO members to share their portfolios and experience.
          </p>
        </div>
      </div>

   <div>
   
   <div  data-aos="zoom-in-down"><h1 className="provide">Shaft.Coin <span className="glance">- At a Glance</span></h1></div>
      <div>
      <p className="myCoin" data-aos="fade-up">
      Bit.Store has been operating for three years. We have provided global users with increasingly diversified and convenient payment methods, as well as the simplest, fastest and safest investment experience. The first investment DAO governance model aims to break the barriers for junior investors in the field of cryptocurrency assets and investment, and to create a Web3.0 investment platform for investment information sharing, strategy sharing, and data sharing.
      </p>
      </div>
   </div>
    </section>
  );
};

export default AboutSecOne;
