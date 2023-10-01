import React, { useState } from "react";
import axios from "axios";
import "./AddMoney.css";
import { toast } from "react-toastify";
import TransactionComponent from "../AddMoneyHistory/TransactionComponent";
import Stripes from "../Stripe/Stripe";

const AddMoneyComponent = () => {
  const [amount, setAmount] = useState("");
  const [showTransaction, setShowTransaction] = useState(false);

  const handleAddMoney = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/payment/add_money",
        {
          amount,
        }
      );
      console.log(response.data.message);
      setAmount(""); 
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Please add an amount");
    }
  };

  const handleFetchHistory = () => {
    setShowTransaction(!showTransaction); // Toggle the state
  };

  return (
    <div className="AddMoney">
      <p className="add">Add Money</p>
      <div className="addContainer">
        <label>Add Amount</label>
        <div className="input-group">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <Stripes handlePayment={handleAddMoney} />

      </div>

      <button className="transactionHistory" onClick={handleFetchHistory}>
        Transaction History
      </button>
      {showTransaction && <TransactionComponent />}
    </div>
  );
};

export default AddMoneyComponent;






// import React, { useState } from "react";
// import axios from "axios";
// import "./AddMoney.css";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import TransactionComponent from "../AddMoneyHistory/TransactionComponent";
// import Stripes from "../Stripe/Stripe";

// const AddMoneyComponent = () => {
//   const [amount, setAmount] = useState("");
//   // const navigate = useNavigate();
//   const handleAddMoney = async (token) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/payment/add_money",
//         {
//           amount,
//           token, // Include the Stripe token in the request
//         }
//       );
//       console.log(response.data.message);
//       toast.success(response.data.message);
//       setAmount(""); // Reset the amount field after successful payment
//     } catch (error) {
//       toast.error("Please add an amount");
//     }
//   };

//   return (
//     <div className="AddMoney">
//       <p className="add">Add Money</p>
//       <div className="addContainer">
//         <label>Add Amount</label>
//         <div className="input-group">
//           <input
//             type="number"
//             placeholder="Amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//         </div>
//       </div>


//     </div>
//   );
// };

// export default AddMoneyComponent;
