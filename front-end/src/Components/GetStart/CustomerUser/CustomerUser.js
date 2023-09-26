import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { validateEmail } from "../../Register/Redux/Features/Auth/AuthService";
import "./CustomerUser.css";
import { RxCross2 } from "react-icons/rx";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  country: "",
};

function App({ isOpen, closeModal }) {
  const [formData, setFormData] = useState(initialState);
  const [userInfor, setUserInfor] = useState(null);

  const { first_name, last_name, email, country } = formData;

  if (!isOpen) return null;

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!first_name || !last_name || !email || !country) {
      return toast.error("All fields are required");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email address");
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/payment/users/customers",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const userInfo = response.data;
      setUserInfor(userInfo);
      console.log(userInfo);
      

      if (response.status === 200) {
        toast.success("Customer Registered successfully");
        setFormData(initialState);
      } else {
        toast.error("Registration failed");
      }
    } catch (error) {
      toast.error("An error occurred while registering");
    }
  };

  return (
    <div className="formModal">
      <div className="inboxen">
        <p className="create">Create Customer</p>
        <RxCross2 size={25} onClick={closeModal} className="rsCross" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <button >Cancel</button> */}
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          value={first_name}
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          value={last_name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label>Country</label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={handleChange}
          placeholder="NG, USD...."
        />
        <button type="submit" className="formBtn">
          Create
        </button>
      </form>

      

      {userInfor && userInfor.data && (
        <div>
          <p>User ID: {userInfor.data.id}</p>
          <p>Status: {userInfor.data.status}</p>
          <p>Status: {userInfor.data.email}</p>
          <p>Status: {userInfor.data.country}</p>
        </div>
      )}

    </div>
  );
}

export default App;
