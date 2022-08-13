import React from "react";
import { Link } from "react-router-dom";
import image from "./images/app-name.png";
import doctorImage from "./images/Avatar.png";
import "./register.css";

const Register = () => {
  return (
    <div className="mainBoard">
      <img src={doctorImage} alt="" />
      <img class="login-doctor-image" src={image} alt="" />

      <div className="login-text-div">
        <p className="login-text">
          Access quality and affordable health facilities by simply recharging
          your line.
        </p>
      </div>
      <div className="navigation-buttons">
        <Link to="/login">
          <button className="register-navigation-button">Log In</button>
        </Link>

        <button className="register-navigation-button">
          Register as a Doctor
        </button>

        <Link to="/identity-verification">
          <button className="register-navigation-button">
            Register as a patient
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
