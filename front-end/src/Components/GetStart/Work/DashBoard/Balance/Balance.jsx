import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Balance.css"

const Balance = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/payment/user/balance", {
        withCredentials: true,
      })
      .then((response) => {
        setAmount(response?.data?.data?.balances?.[0]?.currency);
        setBalance(response?.data?.data?.balances?.[0]?.formattedAmount);
        console.log(response?.data?.data?.balances);
      })
      .catch((error) => {
        console.error("Error fetching balance:", error);
      });
  }, []);
  return (
    <div className="currency">
      <span className="note"></span>

      <p className="amount"></p>
      {amount && <p className="rate">{amount}</p>}
      {balance && <p className="amount">{balance}</p>}
    </div>
  );
};

export default Balance;
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Balance = () => {
//   const [balance, setBalance] = useState(null);
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/payment/user/balance", {
//         withCredentials: true,
//       })
//       .then((response) => {
//         setBalance(response?.data?.data?.balances?.[0]?.formattedAmount);
//         console.log(response?.data?.data?.balances);
//       })
//       .catch((error) => {
//         console.error("Error fetching balance:", error);
//       });
//   }, []);
//   return (
//     <div className="currency">
//       <span className="note"></span>

//       <p className="amount"></p>
//       {balance && <p className="amount">{balance}</p>}
//     </div>
//   );
// };

// export default Balance;
