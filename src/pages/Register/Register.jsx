import React from "react";
import image from "./images/Avatar.png";
import "./register.css";

const Register = () => {
  return (
    <div className="mainBoard">
      <img class="login-doctor-image" src={image} alt="" />

      <div className="login-text-div">
        <p className="login-text">
          Access quality and affordable health facilities by simply recharging
          your line.
        </p>
      </div>
      <div className="navigation-buttons">
        <button>Log In</button>
        <button>Register as a Doctor</button>
        <button>Register as a patient</button>
      </div>
    </div>
  );
};

export default Register;
