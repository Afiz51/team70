import React from "react";
import "./eWalletSuccess.css";

const EWalletSuccess = () => {
  return (
    <div>
      <div className="successMainBoard">
        <div className="successDiv">
          <div className="successBackground">
            <div className="successInner">
              <i class="fa-solid fa-check"></i>
            </div>
          </div>
        </div>
        <p className="success">Success</p>
        <p className="successText">
          Your eNaira wallet has been created successfully. Please check your
          email for your E-wallet details.
        </p>
        <input className="success-page-button" type="submit" value="Continue" />
      </div>
    </div>
  );
};

export default EWalletSuccess;
