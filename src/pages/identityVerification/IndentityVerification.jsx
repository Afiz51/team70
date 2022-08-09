import React from "react";
import "./indentityVerification.css";

const IndentityVerification = () => {
  return (
    <div className="identityMainBoard">
      <i
        class="fa-solid fa-arrow-left"
        style={{
          display: "inline",
          fontSize: 24,
          marginRight: 15,
          color: "#00308b",
        }}
      ></i>
      <p className="identityText">Identity Verification</p>
      <hr className="horizontal-rule" />
      <p className="welcome-text">
        Welcome, please enter your NIN to get started.
      </p>

      <form className="NIN-form">
        <label>NIN</label>
        <input type="text" className="NIN-form-input" />

        <input className="NIN-button" type="submit" value="Verify" />
      </form>
    </div>
  );
};

export default IndentityVerification;
