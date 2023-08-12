import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import PasswordInputCom from '../../Component/PasswordInputCom/PasswordInputCom';


const initialState = {
    password: "",
    confirm_pwd: "",
  };

const Reset = () => {
    const [formData, setFormData] = useState(initialState);

  const {password, confirm_pwd} = formData;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
        <h1>Reset Password</h1>
        <div>


        <form>
                
        <PasswordInputCom
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <PasswordInputCom
            placeholder="Confirm Password"
            name="confirm_pwd"
            value={confirm_pwd}
            onChange={handleInputChange}
          />
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

export default Reset