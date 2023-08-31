import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../Asset/logo.png";
import axios from "axios";
import emailjs from "emailjs-com";
import { v4 as uuidv4 } from "uuid";
import "./ContactUs.css";
import Footer from "../NavHome/Home/Footer/Footer";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  number: "",
  company: "",
};

const ContactUs = () => {
  const [formData, setFormData] = useState(initialState);
  const { fname, email, lname, number, company } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const form = useRef();
  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    errorMessage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        //fetch spinner
        setCountryState({
          ...countryState,
          loading: true,
        });

        //fecth Data

        const dataUrl = "https://restcountries.com/v3.1/all";
        const response = await axios.get(dataUrl);
        setCountryState({
          ...countryState,
          countries: response.data,
          loading: false,
        });
      } catch (error) {
        setCountryState({
          ...countryState,
          loading: false,
          errorMessage: "Something went wrong",
        });
      }
    };
    fetchData();
  }, []);

  const { countries } = countryState;

  const [selectedCountry, setselectedCountry] = useState();

  //find selected country data

  const searchSelectedCountryData = countries.find((obj) => {
    if (obj.name.common === selectedCountry) {
      return true;
    }

    return false;
  });

  console.log("searchSelectedCountryData", searchSelectedCountryData);

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <section className="contactMe">
        <nav className="contact_us">
          <div className="brandName" onClick={goHome}>
            <NavLink to="/">
              {" "}
              <img src={Logo} alt="bird" />
              <p className="shaft_coin">
                Shaft<span>Coin</span>
              </p>
            </NavLink>
          </div>
        </nav>

        <h1 className="tense">Contact Us</h1>

        <div className="mainInbox">
          <form ref={form}>
            <div className="inboxTwo">
              <div className="inboxTwo_1">
                <label>First Name:</label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  required
                  // value={fname}
                  // onChange={handleInputChange}
                />
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  // value={email}
                  // onChange={handleInputChange}
                />
                <label>Telegram:</label>
                <input
                  type="tel"
                  placeholder="Telegram"
                  name="number"
                  required
                  // value={number}
                  // onChange={handleInputChange}
                />
              </div>
              <div className="inboxTwo_2">
                <label>Last Name:</label>
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  name="lname"
                  // value={lname}
                  // onChange={handleInputChange}
                  className="text-inp"
                />
                <label className="myPhone">Phone Number:</label>
                <div className="phone_number">
                  <div>
                    <select
                      value={selectedCountry}
                      onChange={(e) => setselectedCountry(e.target.value)}
                    >
                      <option></option>
                      {countries.map((item) => {
                        return (
                          <option key={uuidv4()} value={item.name.common}>
                            {item.name.common}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  {searchSelectedCountryData && (
                    <>
                      <div>
                        <img
                          src={
                            searchSelectedCountryData &&
                            searchSelectedCountryData.flags.png
                          }
                          alt=""
                        />
                      </div>
                      <div className="input_type">
                        <div>
                          <p className="code">
                            {searchSelectedCountryData &&
                              searchSelectedCountryData.idd.root}
                            {searchSelectedCountryData &&
                              searchSelectedCountryData.idd.suffixes}
                          </p>
                        </div>
                        <div className="num">
                          <input
                            type="tel"
                            required
                            placeholder="Phone"
                            maxLength={10}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <label>Company Name:</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  name="company"
                  required
                  // value={company}
                  // onChange={handleInputChange}
                  className="text-input"
                />
              </div>
            </div>
            <div className="textArea">
              <label>How Can We help</label>
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn_submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
