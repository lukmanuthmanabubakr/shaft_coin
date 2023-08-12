import React from "react";
import "./AboutSecTwo.css";
import abu from "../../../Asset/abu.png";
import myboy from "../../../Asset/myboy.png";
import { NavLink } from "react-router-dom";

const data = [
  {
    id: 1,
    image: abu,
    Name: "Lukman Abubakr",
    post: "Manager",
    location: "Nigeria",
    aspectOne: "Drive business development and market expansion",
    aspectTwo: "Drive business development and market expansion",
    aspectThree: "Drive business development and market expansion",
  },
  {
    id: 2,
    image: myboy,
    Name: "Lukman Abubakr",
    post: "Manager",
    location: "Nigeria",
    aspectOne: "Drive business development and market expansion",
    aspectTwo: "Drive business development and market expansion",
    aspectThree: "Drive business development and market expansion",
  },
  {
    id: 3,
    image: abu,
    Name: "Lukman Abubakr",
    post: "Manager",
    location: "Nigeria",
    aspectOne: "Drive business development and market expansion",
    aspectTwo: "Drive business development and market expansion",
    aspectThree: "Drive business development and market expansion",
  },
  {
    id: 4,
    image: myboy,
    Name: "Lukman Abubakr",
    post: "Manager",
    location: "Nigeria",
    aspectOne: "Drive business development and market expansion",
    aspectTwo: "Drive business development and market expansion",
    aspectThree: "Drive business development and market expansion",
  },
];

const AboutSecTwo = () => {
  return (
    <section className="aboutSecTwo">
      <h1>MANAGEMENT TEAM</h1>
      <div className="management">
        {data.map(
          ({
            id,
            image,
            Name,
            post,
            location,
            aspectOne,
            aspectTwo,
            aspectThree,
          }) => {
            return (
              <div>
                <div key={id} className="managerProfile">
                  <div className="profilePhoto">
                    <img src={image} alt="image" />
                  </div>
                  <div className="userName">
                    <p className="nameUser">{Name}</p>
                    <p className="post">{post}</p>
                    <div>
                      <p className="space"></p>
                      <p className="location">{location}</p>
                    </div>
                  </div>
                </div>
                <ul>
                  <li>{aspectOne}</li>
                  <li>{aspectTwo}</li>
                  <li>{aspectThree}</li>
                </ul>
              </div>
             
            );
          }
        )}
        </div>
        <NavLink to='/contact-us' className='us'> Contact Us</NavLink>
    </section>
  );
};

export default AboutSecTwo;

