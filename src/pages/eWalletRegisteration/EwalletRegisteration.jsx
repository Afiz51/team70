import React, { useState } from "react";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./eWalletRegistering.css";

const initialState = {
  email: "",
  password: "",
  tier: "",
  accountNumber: "",
  address: "",
  NIN: "",
  phoneNumber: "",
};

const EwalletRegisteration = () => {
  const [details, setDetails] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    register();
    // navigate("/wallet-created");
  };

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const register = async () => {
    try {
      const response = await axios.post(
        "https://team70-mobile-app.herokuapp.com/api/user/wallet",
        {
          email: details.email,
          password: details.password,
          tier: details.tier,
          accountNumber: details.accountNumber,
          address: details.address,
          NIN: details.NIN,
          phoneNumber: details.phoneNumber,
        }
      );
      toast(response.data.response_message);
      console.log(response.data);
      window.location.replace("/wallet-created");
    } catch (error) {
      if (error) console.log(error.message);
    }
  };

  return (
    <div className="registerationMainBoard">
      <div className="yourDetails-div" style={{ top: 11, paddingTop: 20 }}>
        <p className="identityText">Your details</p>
        <hr className="horizontal-rule" />
      </div>

      <form className="registerationForm" onSubmit={handleSubmit}>
        <div className="yourDetailsFormGroup">
          <label>Email</label>
          <input type="email" onChange={(e) => handleChange(e)} name="email" />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Account Number</label>
          <input
            type="text"
            name="accountNumber"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Address</label>
          <input type="text" name="address" onChange={(e) => handleChange(e)} />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Tier (Users with account numbers should input 2)</label>
          <input type="text" name="tier" onChange={(e) => handleChange(e)} />
        </div>
        <div className="yourDetailsFormGroup">
          <label>NIN</label>
          <input type="text" name="NIN" onChange={(e) => handleChange(e)} />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Phone number</label>
          <input
            type="text"
            name="phoneNumber"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Password</label>
          <input
            type="text"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <input
          className="E-wallet-details-button"
          type="submit"
          value="Create E-wallet"
        />
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default EwalletRegisteration;
