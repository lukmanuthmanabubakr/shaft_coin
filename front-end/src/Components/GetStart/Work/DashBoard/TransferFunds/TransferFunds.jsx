import React, { useState } from 'react';
import axios from 'axios';

const TransferFunds = () => {
    const [response, setResponse] = useState(null);

    const handleTransferFunds = async () => {
      try {
        const response = await axios.post('http://localhost:5000/payment/user/balance/transfer');
        setResponse(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <div>
        <button onClick={handleTransferFunds}>Transfer Funds</button>
      {/* {response && <div>{JSON.stringify(response)}</div>} */}

    </div>
  )
}

export default TransferFunds