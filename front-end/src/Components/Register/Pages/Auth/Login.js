import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PasswordInputCom from "../../Component/PasswordInputCom/PasswordInputCom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { validateEmail } from "../../Redux/Features/Auth/AuthService";
import { RESET, login } from "../../Redux/Features/Auth/authSlice";
import Logo from "../../../../Asset/logo.png";
import "./Login.css";
import Mode from "../../../Mode/Mode";
import google_btn from "../../../../Asset/gog.png";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, isSuccess, } = useSelector(
    (state) => state.auth
  );

  const loginUser = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
      password,
    };

    // console.log(userData);
    await dispatch(login(userData));
  };

 
  
  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/get-start/home");
    }

    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, navigate]);

  const goHome = () => {
    navigate("/");
  };


  return (
    <div className="loginAspect">
      <div className="loginHeader">
        <div className="login-brand" onClick={goHome}>
          <NavLink to="/">
            {" "}
            <img src={Logo} alt="bird" />
            <p>
              Shaft<span>Coin</span>
            </p>
          </NavLink>
        </div>
        <div>
          <Mode />
        </div>
      </div>
      <div className="loginContainer">
        <button className="google_btn">
          {" "}
          <img src={google_btn} alt="google" /> Login with Google
        </button>
        <h1>OR</h1>

        <form onSubmit={loginUser}>
          <div className="inputName">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="pass_input">
            <label>Password</label>
            <PasswordInputCom
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="submit">
            Login
          </button>
        </form>
        <NavLink to="/forgot" className="forgot-pass">
          forgot pasword....?
        </NavLink>
        <p className="home-reg">
          <span className="home">
            <NavLink to="/">Home</NavLink>
          </span>
          <span className="reg">
            Don't have an account
            <NavLink to="/register">Register</NavLink>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
