import axios from "axios";
import React, { useState } from "react";
import "./Payment.css"

const Payment = () => {
  const [response, setResponse] = useState(null);

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/payment/user/payment",
        {}
      );
      const resPayment = response.data.data;
      Object.keys(resPayment).forEach((paymentPair) => {
        const rateData = resPayment[paymentPair];
        console.log(`${paymentPair}: ${rateData}`);

        setResponse(resPayment);
        console.log(resPayment); 
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <button onClick={handlePayment}></button>
      {response && <div>
        
      </div>}
    </div>
  );
};

export default Payment;


// import axios from "axios";
// import React, { useState } from "react";
// import "./Payment.css";

// const Payment = () => {
//   const [response, setResponse] = useState(null);

//   const handlePayment = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/payment/user/payment",
//         {}
//       );
//       const resPayment = response.data.data;
//       Object.keys(resPayment).forEach((paymentPair) => {
//         const rateData = resPayment[paymentPair];
//         console.log(`${paymentPair}: ${rateData}`);
//       });

//       setResponse(resPayment);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handlePayment}>Make Payment</button>
//       {response && (
//         {/* <div>
//           <h3>Payment Response:</h3>
//           {Object.keys(response).map((paymentPair) => (
//             <p key={paymentPair}>
//               {paymentPair}: {response[paymentPair]}
//             </p>
//           ))}
//         </div> */}
//       )}
//     </div>
//   );
// };

// export default Payment;
