import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import "./PaymentLoader.css"

const PaymentLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <ClipLoader
      size={15}
      color={"white"}
      loading={loading}
      className='ClipLoader'
    />
  );
};

export default PaymentLoader;
