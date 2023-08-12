import "./Mode.css";
import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Mode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <button onClick={handleToggleMode}>
        {isDarkMode ? <FaSun style={{color: "red"}}/> : <FaMoon style={{color: "blue"}}/>}
      </button>
    </div>
  );
};
export default Mode;
