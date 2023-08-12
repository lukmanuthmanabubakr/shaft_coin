import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import PasswordInputCom from '../../Component/PasswordInputCom/PasswordInputCom';

const Forgot = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    const handlepasswordChange = (e) => {
        setPassword(e.target.value);
      };
  return (
    <div>
        <h1>Forgot Password</h1>
        <div>


        <form>
                <input type='email' placeholder='Email' name='email' value={email} onChange={handleEmailChange} required/>
                {/* <input type='password' placeholder='Password' name='password' value={password} onChange={handlepasswordChange} required/> */}
                <button type="submit">
                    Get  OTP
                </button>
                <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        </form>
        <p>

        </p>
        </div>
    </div>
  )
}

export default Forgot