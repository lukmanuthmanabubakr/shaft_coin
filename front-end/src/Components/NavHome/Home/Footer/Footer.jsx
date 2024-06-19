import React from "react";
import "./Footer.css";
import Logo from "../../../../Asset/logo.png";
import { NavLink } from "react-router-dom";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="myFooter">
      <div className="footerStart" data-aos="fade-up">
        <div className="content">
          <article>
            <img src={Logo} alt="bird" />
            <p>
              Shaft<span>Coin</span>
            </p>
          </article>
          <div data-aos="fade-up">
            <p className="shaftcoin">
              Shaft Coin is a payment solutions provider that seamlessly
              connects fiat and crypto economies for global consumers,
              merchants, developers, and institutions.
            </p>
          </div>

          <div className="socials" data-aos="fade-up">
            <NavLink
              className="github"
              to="https://github.com/lukmanuthmanabubakr/shaft-soin"
              target="_blank"
            >
              <AiFillGithub className="hub" />
            </NavLink>
            <NavLink
              className="facebook"
              to="https://web.facebook.com/profile.php?id=100081214369765"
              target="_blank"
            >
              <BsFacebook className="facebook" />
            </NavLink>
            <NavLink to="https://twitter.com/oladifundz2006" target="_blank">
              <BsTwitter className="twitter" />
            </NavLink>
            <NavLink
              className="whatsapp"
              to="https://wa.me/+2349032024600"
              target="_blank"
            >
              <FaWhatsapp className="whatsapp" />
            </NavLink>
            <NavLink to="" target="_blank"></NavLink>
          </div>
        <p className="copyWrite">© 2023 <span>shaftcoin</span> Digital Services Limited.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
