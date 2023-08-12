import React from "react";
import { BsUnity } from "react-icons/bs";
import { IoFlashSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { TbSend } from "react-icons/tb";
import "./Aspect2.css";

import { NavLink } from "react-router-dom";
const data = [
  {
    id: 1,
    logo: <BsUnity />,
    content: "ipsum dolor sit amet consectetur adipisicing elit",
    innerContent:
      "Blanditiis quos Voluptates commodi reiciendis voluptas illum vitae perferendis soluta est, ut laboriosam provident veniam velit et itaque suscipit magni quis veritatis dolores aliquam dolor id necessitatibus, corporis labore accusamus",
  },
  {
    id: 2,
    logo: <IoFlashSharp />,
    content: "ipsum dolor sit amet consectetur adipisicing elit",
    innerContent:
      "Blanditiis quos Voluptates commodi reiciendis voluptas illum vitae perferendis soluta est, ut laboriosam provident veniam velit et itaque suscipit magni quis veritatis dolores aliquam dolor id necessitatibus, corporis labore accusamus",
  },
  {
    id: 3,
    logo: <TbSend />,
    content: "ipsum dolor sit amet consectetur adipisicing elit",
    innerContent:
      "Blanditiis quos Voluptates commodi reiciendis voluptas illum vitae perferendis soluta est, ut laboriosam provident veniam velit et itaque suscipit magni quis veritatis dolores aliquam dolor id necessitatibus, corporis labore accusamus",
  },
  {
    id: 4,
    logo: <MdPayment />,
    content: "ipsum dolor sit amet consectetur adipisicing elit",
    innerContent:
      "Blanditiis quos Voluptates commodi reiciendis voluptas illum vitae perferendis soluta est, ut laboriosam provident veniam velit et itaque suscipit magni quis veritatis dolores aliquam dolor id necessitatibus, corporis labore accusamus",
  },
];
const Aspect2 = () => {
  return (
    <section className="Aspect2">
      <div className="Aspect2-send">
        <h1>
          Send, spend and earn with <span>crypto</span> and <span>cash</span>
        </h1>
        <p className="crypto">
          Live your life on crypto. Make day-to-day spending a breeze with cash
          any time you need it
        </p>
      </div>
      <div className="contents">
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
        <NavLink to='/get-start/home' className='get-start'>Get Started</NavLink>
      </div>
    </section>
  );
};

export default Aspect2;
