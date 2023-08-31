import React from "react";
import "./WhyUs.css";
import { FiShare2 } from "react-icons/fi";
import { FaUserNurse } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";

const data = [
  {
    id: 1,
    media: <FiShare2 />,
    content: "Socialization",
    text: "Users create and launch community DAOs to generate interactive and collaborative content",
  },
  {
    id: 2,
    media: <FaUserNurse />,
    content: "Simplicity",
    text: "Stellar user experience with no compromise to overall quality of investment tools.",
  },
  {
    id: 3,
    media: <MdOutlineSecurity />,
    content: "Security",
    text: "No compromises on user asset security",
  },
  {
    id: 4,
    media: <BsPersonCircle />,
    content: "Innovation",
    text: "Thinking out of the box to provide investors with the best tools to grow their portfolio",
  },
];

const WhyUs = () => {
  return (
    <section className="whyUs">
      <div data-aos="fade-right">
      <p className="why">
        Why{" "}
        <span className="shaft">
          shaft <span className="coin">Coin</span>
        </span>{" "}
      </p>
      </div>

      <div className="ourContent">
        {data.map(({ id, media, content, text }) => {
          return (
            <div key={id} className="main-content" data-aos="fade-up">
              <div className="aspect">
                <p className="media">{media}</p>
                <p className="content">{content}</p>
              </div>
              <p className="text">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;
