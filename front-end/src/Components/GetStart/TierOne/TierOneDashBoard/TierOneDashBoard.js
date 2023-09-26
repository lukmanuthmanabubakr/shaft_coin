import React, { useState } from "react";
import "./TierOneDashBoard.css";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  dob: "",
  phone_country_code: "",
  phone_number: "",
  street: "",
  state: "",
  city: "",
  postal_code: "",
  identification_number: "",
  customer_id: "",
  country: "",
};

const TierOneDashBoard = () => {
  const [formData, setFormData] = useState(initialState);
  const {
    dob,
    phone_country_code,
    phone_number,
    street,
    state,
    city,
    postal_code,
    identification_number,
    customer_id,
    country,
  } = formData;

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !dob ||
      !phone_country_code ||
      !phone_number ||
      !street ||
      !state ||
      !city ||
      !postal_code ||
      !identification_number ||
      !customer_id ||
      !country||
      !customer_id
    ) {
      return toast.error("All fields are required");
    }
    try {
      const response = await axios.patch(
        "http://localhost:5000/payment/users/customers/upgrade/tier1",
        formData, // Use formData directly as the request body
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const userInfo = response.data;
      console.log(userInfo);

      if (response.status === 200) {
        toast.success("Customer upgraded successfully");
        setFormData(initialState);
      } else {
        toast.error("Failed to upgrade");
      }
    } catch (error) {
      toast.error("An error occurred while registering");
    }
  };

  return (
    <div className="tierOneDashBoard">
      <p className="upgradeOne">Upgrade to Tier 1</p>

      <form className="tierOneDashBoardForm" onSubmit={handleSubmit}>
        <div className="famuly">
          <div className="country">
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={country}
              onChange={handleChange}
              className="input"
            />
            <label>Date</label>
            <input type="text" name="dob" value={dob} className="input" onChange={handleChange} />
            <label>Phone Number</label>
            <div className="codePhone">
              <input
                type="text"
                name="phone_country_code"
                value={phone_country_code}
                onChange={handleChange}
                className="phone_country_code"
              />

              <input
                type="text"
                name="phone_number"
                value={phone_number}
                onChange={handleChange}
                className="phone_number"
              />
            </div>
          </div>

          <div className="city">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={handleChange}
              className="input"
            />
            <label>Street</label>
            <input
              type="text"
              name="street"
              value={street}
              onChange={handleChange}
              className="input"
            />
            <label>State</label>
            <input
              type="text"
              name="state"
              value={state}
              onChange={handleChange}
              className="input"
            />
          </div>
        </div>
       <div className="postal">
       <label>Postal Code</label>
        <input
          type="text"
          name="postal_code"
          value={postal_code}
          onChange={handleChange}
        />
        <label>BVN</label>
        <input
          type="text"
          name="identification_number"
          value={identification_number}
          onChange={handleChange}
        />
        <label>ID</label>
        <input
          type="text"
          name="customer_id"
          value={customer_id}
          onChange={handleChange}
        />
       </div>

       <button type="submit" className="formBtn">
          Upgrade
        </button>
      </form>
    </div>
  );
};

export default TierOneDashBoard;
