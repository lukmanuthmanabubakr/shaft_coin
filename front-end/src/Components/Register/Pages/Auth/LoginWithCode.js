import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import PasswordInputCom from '../../Component/PasswordInputCom/PasswordInputCom';

const LoginWithCode = () => {
    const [accessCode, setaccessCode] = useState("")

    const handleAccessChange = (e) => {
        setaccessCode(e.target.value);
      };
  return (
    <div>
        <h1>Enter Code</h1>
        <div>


        <form>
                <input type='text' placeholder='Enter Code' name='accessCode' value={accessCode} onChange={handleAccessChange} required/>
                {/* <input type='password' placeholder='Password' name='password' value={password} onChange={handlepasswordChange} required/> */}
                <button type="submit">
                    Proceeed to Login
                </button>
                <p>Check uyour email for login code</p>
                <NavLink to='/'>Home</NavLink>
        <b style={{color: "blue"}}>Resend Code</b>
        </form>
        <p>

        </p>
        </div>
    </div>
  )
}

export default LoginWithCode