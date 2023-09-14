import React, { useState } from 'react';
import axios from 'axios';


const BalanceConverter = () => {
    const [result, setResult] = useState(null);

    const handleConvertBalance = async () => {
      try {
        const response = await axios.post('http://localhost:5000/payment/user/balance/convert', {
          fromCurrency: "NGN",
          toCurrency: "USD",
          amount: "200",
        }, {
          withCredentials: true, // if you are using cookies for authentication
        });
        setResult(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    
  return (
    <div>
        <button onClick={handleConvertBalance}>Convert Balance</button>
    {/* {result && (
        <div>
        <h2>Result:</h2>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    )} */}
    </div>
)
}
export default BalanceConverter