import React from "react";
import "./Customers.css";
import { NavLink } from "react-router-dom";
import donation from "../../../../Asset/donation.jpg";
import invoice from "../../../../Asset/invoice.jpg";
import online from "../../../../Asset/online.jpg";
import store from "../../../../Asset/store.avif";

const data = [
  {
    id: 1,
    servises: donation,
    header: "IN-STORE / ONLINE",
    secondHeader: "Donation",
    content:
      "Social Entreprises can source and manage funds easily from our dashboard. Make it easy for supporters to redeem their pledges and give to a good cause",
  },
  {
    id: 2,
    servises: invoice,
    header: "IN-STORE / ONLINE",
    secondHeader: "E-Invoice",
    content:
      "Remotely accept payments due from customers anytime and anywhere ",
  },
  {
    id: 3,
    servises: online,
    header: "Online",
    secondHeader: "Widget and API Integration",
    content:
      "We offer plug and play payment widget, API and plugins that fit into modern websites and frameworks",
  },
  {
    id: 4,
    servises: store,
    header: "IN-STORE / ONLINE",
    secondHeader: "Point of Sale / E-Commerce",
    content:
      "We offer plug and play payment widget, API and plugins that fit into modern websites and frameworks",
  },
];
const Customers = () => {
  return (
    <section className="customers">
      <h1>USE CASE</h1>
      <div className="customer-split">
        {data.map(({id, servises, header, secondHeader, content}) => {
          return (
            <div key={id} className="split">
              <div className="services">
                <img src={servises} alt="store" />
              </div>
              <div className='content'>
              <p className="header">{header}</p>
              <p className="secondHeader">{secondHeader}</p>
              <p className='text'>{content}</p>
            </div> 
            </div>
          );
        })}
      </div>
      <NavLink to='/about'>About</NavLink>
    </section>
  );
};

export default Customers;

{
  /* <div className='services'>
              <img src={store} alt='store'/>
            </div>
            <div className='content'>
              <p>IN-STORE / ONLINE</p>
              <p>Point of Sale / E-Commerce</p>
              <p className='text'>We offer plug and play payment widget, API and plugins that fit into modern websites and frameworks</p>
            </div> */
}
