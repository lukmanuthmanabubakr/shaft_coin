import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./ContactUs.css";
import Navbar from "../NavHome/Navbar/Navbar";
import { toast } from "react-toastify";
import Footer from "../NavHome/Home/Footer/Footer";

const initialState = {
  lname: "",
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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_whapo8x', 'template_22bl2cs', form.current, 'HVqXGdPVDe0II42XK')
      .then((result) => {
          console.log(result.text);
          toast.success("Message sent successfully")
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <section className="contactMe">
        <div>
          <Navbar />
        </div>
        <h1 className="tense">Contact Us</h1>

        <div className="mainInbox">
          <form ref={form} onSubmit={sendEmail}>
            <div className="inboxTwo">
              <div className="inboxTwo_1">
                <label>First Name:</label>
                <input type="text" name="f_name" />
                <label>Email:</label>
                <input type="email" name="email" />
                <label>Telegram:</label>
                <input
                  type="tel"
                  placeholder="Telegram"
                  name="telegram_number"
                  required
                />
              </div>
              <div className="inboxTwo_2">
                <label>Last Name:</label>
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  name="l_name"
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
                            name="phone_number"
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
                  name="company_name"
                  required
                  className="text-input"
                />
              </div>
            </div>
            <div className="textArea">
              <label>How Can We help</label>
              <textarea name="message" />
            </div>
            <input className="btn_submit" type="submit" value="Send" />
          </form>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ContactUs;
