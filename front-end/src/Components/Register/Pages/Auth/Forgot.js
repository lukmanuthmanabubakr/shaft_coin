import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Forgot.css";
import { validateEmail } from "../../Redux/Features/Auth/AuthService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { RESET, forgotPassword } from "../../Redux/Features/Auth/authSlice";
import { AiOutlineMail } from "react-icons/ai";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const forgot = async (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Please enter an email");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
    };

    await dispatch(forgotPassword(userData));
    await dispatch(RESET(userData));
  };

  return (
    <section className="forgotPass">
      <div className="container">
        <AiOutlineMail className="email" size={40} />
        <p className="myPass">Forgot Password</p>
        <div>
          <form onSubmit={forgot}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="submit">Submit Email</button>
          </form>
          <div className="myHome">
          <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forgot;
