import React from "react";
import "./eWalletRegistering.css";

const EwalletRegisteration = () => {
  return (
    <div className="registerationMainBoard">
      <div className="yourDetails-div" style={{ top: 11 }}>
        <p className="identityText">Your details</p>
        <hr className="horizontal-rule" />
      </div>

      <form className="yourDetailsForm">
        <div className="yourDetailsFormGroup">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Account Number</label>
          <input type="text" />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Address</label>
          <input type="text" />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Tier (Users with account numbers should input 2)</label>
          <input type="text" />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Password</label>
          <input type="text" />
        </div>

        <input
          className="E-wallet-details-button"
          type="submit"
          value="Create E-wallet"
        />
      </form>
    </div>
  );
};

export default EwalletRegisteration;
