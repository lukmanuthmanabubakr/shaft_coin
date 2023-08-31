import React from "react";
import "./ContactMe.css";
import ContactUs from "../../../ContactUs/ContactUs";
import { NavLink } from "react-router-dom";

const ContactMe = () => {
  return (
    <section className="smartMe">
    <div data-aos="fade-up-right">
    <p className="information">
        Contact us for more <span className="same">information</span> and the option that is
      </p>
      <p className="information-today">best for your <span className="same">project</span> today.</p>

      <NavLink to="/contact-us" className='ContactMe'>Contact Us</NavLink>
    </div>
    </section>
  );
};

export default ContactMe;
