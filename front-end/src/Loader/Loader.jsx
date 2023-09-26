import React, { useEffect, useState } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import "./Loader.css"

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <ScaleLoader
      size={30}
      color={"#FFBF00"}
      loading={loading}
      className='moonLoad'
    />
  );
};

export default Loader;
