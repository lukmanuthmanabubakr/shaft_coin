import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../Component/PasswordInputCom/PasswordInputCom";
import { toast } from "react-toastify";
import { validateEmail } from "../../Redux/Features/Auth/AuthService";
import { useDispatch, useSelector } from "react-redux";
import "./Register.css"
import {
  register,
  RESET,
  sendVerificationEmail,
} from "../../Redux/Features/Auth/authSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  confird_pwd: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, confird_pwd } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isLoggedIn, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timesIcon = <FaTimes color="red" size={25} />;
  const checkIcon = <FiCheck color="green" size={25} />;

  const switchIcon = (condition) => {
    if (condition) {
      return checkIcon;
    }
    return timesIcon;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    // Check Lower and Uppercase
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUCase(true);
    } else {
      setUCase(false);
    }
    // Check for numbers
    if (password.match(/([0-9])/)) {
      setNum(true);
    } else {
      setNum(false);
    }
    // Check for special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setSChar(true);
    } else {
      setSChar(false);
    }
    // Check for PASSWORD LENGTH
    if (password.length > 5) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
  }, [password]);

  const registerUser = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return toast.error("All fields are required");
    }
    if (password.length < 6) {
      return toast.error("Password must be up to 6 characters");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }
    if (password !== confird_pwd) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      name,
      email,
      password,
    };

    // console.log(userData);
    await dispatch(register(userData));
    await dispatch(sendVerificationEmail());
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/get-start/home");
    }

    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, navigate]);

  return (
   <section className="register-section">
     <div className="registerAspect">
      {isLoading && "loading..."}
        <div>
          <h2>Register</h2>

          <form onSubmit={registerUser}>
          <div className="input">
          <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              value={name}
              onChange={handleInputChange}
            />
             <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
             <label>Password</label>
            <PasswordInput
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
             <label>Confirm Password</label>
            <PasswordInput
              placeholder="Confirm Password"
              name="confird_pwd"
              value={confird_pwd}
              onChange={handleInputChange}
              onPaste={(e) => {
                e.preventDefault();
                toast.error("Cannot paste into input field");
                return false;
              }}
            />

            {/* Password Strength */}
              <ul className="form-list">
                <li>
                  <span>
                    {switchIcon(uCase)}
                  </span>
                  <span>Lowercase & Uppercase</span>
                </li>
                <li>
                  <span>
                    {switchIcon(num)}
                  </span>
                  <span>Number (0-9)</span>
                </li>
                <li>
                  <span>
                    {switchIcon(sChar)}
                  </span>
                  <span>
                  Special Character (!@#$%^&*)
                  </span>
                </li>
                <li>
                  <span>
                    {switchIcon(passLength)}
                  </span>
                  <span> At least 6 Character</span>
                </li>
              </ul>

            <button type="submit" className="btn-submit">
              Register
            </button>
          </form>

          <span className="home-log">
            <p className="home">
            <Link to="/">Home</Link>
            </p>
            <p className="log"> &nbsp; Already have an account? &nbsp;
            <Link to="/login">Login</Link></p>
          </span>
        </div>
    </div>
   </section>
  );
};

export default Register;