import React from "react";
import "./UserStats.css";
import BoxInfo from "../../Component/BoxInfo/BoxInfo";
import { FaUsers } from "react-icons/fa";
import { BiUserCheck, BiUserMinus, BiUserX } from "react-icons/bi";

//icons

const icon1 = <FaUsers size={40} color="#fff" />;
const icon2 = <BiUserCheck size={40} color="#fff" />;
const icon3 = <BiUserMinus size={40} color="#fff" />;
const icon4 = <BiUserX size={40} color="#fff" />;

const UserStats = () => {
  return (
    <div className="user-summary">
      <p className="statsUser">UserStats</p>
      <div className="info-summary">
        <BoxInfo
          icon={icon1}
          title={"Total Users"}
          count={"3"}
          bgColor="card1"
        />
        <BoxInfo
          icon={icon2}
          title={"Verified Users"}
          count={"3"}
          bgColor="card2"
        />
        <BoxInfo
          icon={icon3}
          title={"Unverified Users"}
          count={"3"}
          bgColor="card3"
        />
        <BoxInfo
          icon={icon4}
          title={"Suspended Users"}
          count={"3"}
          bgColor="card4"
        />
      </div>
    </div>
  );
};

export default UserStats;
