import React, { useState } from "react";
import "./ChangeRole.css";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { EMAIL_RESET, sendAuthomatedEmail } from "../../Redux/Email/EmailSlice";
import { getUsers, upgradeUser } from "../../Redux/Features/Auth/authSlice";

const ChangeRole = ({_id, email }) => {
  const [userRole, setUserRole] = useState("");
  const dispatch = useDispatch();

  // Change User role
  const changeRole = async (e) => {
    e.preventDefault();

    if (!userRole) {
      toast.error("Please select a role");
    }

    const userData = {
      role: userRole,
      id: _id,
    };

    const emailData = {
      subject: "Account Role Changed - ShaftCoin",
      send_to: email,
      reply_to: "123@gmail.com",
      template: "upgradeuser",
      url: "/login",
    };

    await dispatch(upgradeUser(userData));
    await dispatch(sendAuthomatedEmail(emailData));
    await dispatch(getUsers());
    dispatch(EMAIL_RESET());
  };

  return (
    <div className="sort">
      <form className="my-form" onSubmit={(e) => changeRole(e, _id, userRole)}>
        <div className="choose">
          <select
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
          >
            <option value="">-- select --</option>
            <option value="subscriber">Subscriber</option>
            <option value="author">Author</option>
            <option value="admin">Admin</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
        <div>
          <button className="btnPrimary">
            <FaCheck size={15} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeRole;
