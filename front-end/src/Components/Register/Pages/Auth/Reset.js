import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import PasswordInputCom from "../../Component/PasswordInputCom/PasswordInputCom";
import { toast } from "react-toastify";
import { RESET, resetPassword } from "../../Redux/Features/Auth/authSlice";
import "./Reset.css";

const initialState = {
  password: "",
  confirm_pwd: "",
};

const Reset = () => {
  const [formData, setFormData] = useState(initialState);

  const { password, confirm_pwd } = formData;

  const { resetToken } = useParams();

  const { isLoggedIn, isSuccess, message } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const reset = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      return toast.error("Password must be up to 6 characters");
    }

    if (password !== confirm_pwd) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      password,
    };

    await dispatch(resetPassword({ userData, resetToken }));
    // await dispatch (RESET(userData))
  };
  useEffect(() => {
    if (isSuccess && message.includes("Reset Successful")) {
      navigate("/login");
    }

    dispatch(RESET());
  }, [dispatch, navigate, message, isSuccess]);

  return (
    <section className="resetPass">
      <div className="myReset">
        <p className="reset">Reset Password</p>
        <div>
          <form onSubmit={reset}>
            <label>Password</label>
            <PasswordInputCom
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <label>Confirm Password</label>
            <PasswordInputCom
              placeholder="Confirm Password"
              name="confirm_pwd"
              value={confirm_pwd}
              onChange={handleInputChange}
            />
            <button type="submit" className="submit">
              Reset Password
            </button>
            <div className="myHome">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/login">Login</NavLink>
            </div>
          </form>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default Reset;
