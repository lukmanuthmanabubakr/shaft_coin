import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MinimuAllowed = () => {
  const [minimumAllowed, setMinimumAllowed] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/payment/user/currency/minimum-allowed', {
          withCredentials: true, // Send cookies along with the request (since you're using credentials in your server)
        })
        .then(response => {
          setMinimumAllowed(response.data.data);
          console.log(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching minimum allowed currency:', error);
        });
      }, []);
  return (
    <div></div>
  )
}

export default MinimuAllowed