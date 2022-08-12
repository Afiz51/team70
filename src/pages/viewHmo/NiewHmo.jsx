import React from "react";
import axalogo from "../dashboard/images/axalogo-bg.png";
import "./viewhmo.css";

const ViewHmo = () => {
  return (
    <div className="view-gmo-mainBoard">
      <i
        class="fa-solid fa-arrow-left"
        style={{
          display: "inline",
          fontSize: 24,
          marginRight: 15,
          color: "#00308b",
        }}
      ></i>

      <p className="hmoText">HMO Details</p>
      <div className="contact-information">
        <p>Contact Information</p>
        <img src={axalogo} alt="" />
      </div>
      <div className="contact-info">
        <div>
          <p>Phone</p>
          <p>07002929111</p>
        </div>
        <div>
          <p>Email Address</p>
          <p>healthcare@axamansard.com</p>
        </div>
      </div>
    </div>
  );
};

export default ViewHmo;
