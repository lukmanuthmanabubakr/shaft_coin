import React, { useEffect } from 'react'
import { BsUnity } from "react-icons/bs";
import { IoFlashSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { TbSend } from "react-icons/tb";
import "./Aspect2.css";
import AOS from "aos"
import "aos/dist/aos.css"

import { NavLink } from "react-router-dom";
const data = [
  {
    id: 1,
    logo: <BsUnity />,
    content: "Competitive Fees",
    innerContent:
      "High transaction fees associated with digital payments impede the digital inclusion agenda. We are offering lower fees as compared to our competitiors",
  },
  {
    id: 2,
    logo: <IoFlashSharp />,
    content: "More Convenience",
    innerContent:
      "Digital payments are becoming the preferred choice of payment for goods and services. We are offering many more easy payment channels that lead to higher customer conversion rates",
  },
  {
    id: 3,
    logo: <TbSend />,
    content: "Success sweet Rate",
    innerContent:
      "Payment systems are core to the success of digital businesses. Our seamless architecture promises over 95% + uptime and faster real-time transactions",
  },
  {
    id: 4,
    logo: <MdPayment />,
    content: "Aiming SME Digi-Payment Partnership Program",
    innerContent:
      "SMEs form more than 90% of businesses in Africa yet there are many barriers to digitization. Eligible SMEs receive flexible terms of services and support tailored to their business needs.",
  },
];
const Aspect2 = () => {
  const isMobileView = () => window.innerWidth <= 320;
  useEffect(() => {
    AOS.init({duration: 2000})
},[])

  return (
    <section className="Aspect2">
      <div className="Aspect2-send" data-aos="fade-up">
        <h1>
          Send, Save and earn with <span>card</span> and <span>cash</span>
        </h1>
        <p className="crypto">
        Experience the freedom of living on digital currency
        </p>
      </div>

      <div className="contents" data-aos="fade-up">
        {/* {isMobileView() ? (<div></div>) : ()} */}
        {data.map(({ id, logo, content, innerContent }) => {
          return (
            <div key={id} className="split">
              <div className="icon">{logo}</div>
              <div className="innerContent">
                <p className="content-innerContent">{content}</p>
                <p className="aspect">{innerContent}</p>
              </div>
            </div>
          );
        })}
        {/* <NavLink to='/get-start/home' className='get-start'>Get Started</NavLink> */}
      </div>
    </section>
  );
};

export default Aspect2;
