import React, { useState } from "react";
import PageMenu from "../../Register/Component/PageMenu/PageMenu";
import PasswordInput from "../Component/PasswordInputCom/PasswordInputCom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import useRedirectLoggedOutUser from "../Component/customHook/UseRedirectLogOutUser";
import { RESET, changePassword, logOut } from "../Redux/Features/Auth/authSlice";
import { sendAuthomatedEmail } from "../Redux/Email/EmailSlice";
import "./ChangePass.css"


const initialState = {
  oldPassword: "",
  password: "",
  confirm_pwd: "",
};

const ChangePassword = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setformData] = useState(initialState);
  const { oldPassword, password, confirm_pwd } = formData;

  const { user } = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const updatePassword = async (e) => {
    e.preventDefault();

    if (password !== confirm_pwd) {
      return toast.error("New passwords do not match");
    }

    const userData = {
      oldPassword,
      password,
    };

    const emailData = {
      subject: "Password Changed - Shaft-coin",
      send_to: user.email,
      reply_to: "noreply@lukmanuthman135@gmail.com",
      template: "changePassword",
      url: "/forgot",
    };

    await dispatch(changePassword(userData));
    await dispatch(sendAuthomatedEmail(emailData));
    await dispatch(logOut());
    dispatch(RESET());
    navigate("/login");
  };

  return (
    <div>
      <section className="changePass">
        <div className="container">
          <h2>Change Password</h2>
          <div>
            <div>
              <form onSubmit={updatePassword}>
                <p>
                  <label>Current Password:</label>
                  <PasswordInput
                    placeholder="Current Password"
                    name="oldPassword"
                    value={oldPassword}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>New Password:</label>
                  <PasswordInput
                    placeholder="New Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>New Password:</label>
                  <PasswordInput
                    placeholder="Confirm New Password"
                    name="confirm_pwd"
                    value={confirm_pwd}
                    onChange={handleInputChange}
                    onPaste={(e) => {
                      e.preventDefault();
                      toast.error("Cannot paste into input field.");
                      return false;
                    }}
                  />
                </p>
                <button className="pass_btn">
                    Change Password
                  </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangePassword;