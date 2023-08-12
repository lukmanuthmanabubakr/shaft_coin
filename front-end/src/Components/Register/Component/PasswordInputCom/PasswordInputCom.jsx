import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "../../Pages/Auth/Login.css";

const PasswordInputCom = ({ placeholder, value, onChange, onPaste, name }) => {
  const [showPass, setShowPass] = useState(false);

  const togglePass = () => {
    setShowPass(!showPass);
  };
  return (
    <div className="password">
      <div className="pass_temp">
        <input
          type={showPass ? "text" : "password"}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onPaste={onPaste}
        />
        <div className="icon" onClick={togglePass}>
          {showPass ? (
            <AiFillEyeInvisible size={30} />
          ) : (
            <AiFillEye size={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordInputCom;
