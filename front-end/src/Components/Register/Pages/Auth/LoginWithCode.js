import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import PasswordInputCom from '../../Component/PasswordInputCom/PasswordInputCom';
import {useDispatch, useSelector} from "react-redux"
import { toast } from 'react-toastify';
import "./LoginWithCode.css"
import { RESET, loginWithCode, sendLoginCode } from '../../Redux/Features/Auth/authSlice';


const LoginWithCode = () => {
    const [loginCode, setLoginCode] = useState("");
  const {email} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoggedIn, isSuccess} = useSelector(
    (state) => state.auth
  );


  const sendUserLoginCode = async () => {
    await dispatch(sendLoginCode(email))
    await dispatch(RESET())
  }

  const loginUserWithCode = async (e) => {
    e.preventDefault();
    if (loginCode === "") {
      return toast.error("Please fill the login Code");
    }
    if (loginCode.length !== 6) {
      return toast.error("Acces code must be six characters");
    }

    const code = {
      loginCode
    }

    await dispatch(loginWithCode({code, email}))
  } 

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/get-start/home");
    }



    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, navigate,]);

  return (
    <div className='login-container'>
        <h1>Enter Code</h1>
        <div>


        <form onSubmit={loginUserWithCode}>
                <input type='text' placeholder='Enter Code' name='loginCode' value={loginCode} onChange = {(e) => setLoginCode(e.target.value)} maxLength={6}  required/>
                <button type="submit" className="login-button">
                    Proceeed to Login
                </button>
                <p className='check_email'>Check your email for login code</p>
                <div className='res_code'>
                <NavLink to='/'>Home</NavLink>
        <b onClick={sendUserLoginCode}>Resend Code</b>
                </div>
        </form>
        <p>

        </p>
        </div>
    </div>
  )
}

export default LoginWithCode