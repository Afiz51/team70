import React from "react";
import axalogo from "../dashboard/images/axalogo-bg.png";
import home from "../dashboard/images/home.png";
import hospital from "../dashboard/images/hospital.png";
import healthtips from "../dashboard/images/health-tips.png";
import { useNavigate } from "react-router-dom";
import "./viewhmo.css";

const ViewHmo = () => {
  const navigate = useNavigate();
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
      <div className="dashNavLinks view-hmo">
        <div className="buttonGroup Home">
          <img src={home} alt="" />
        </div>
        <div className="buttonGroup hospitals">
          <img src={hospital} alt="" onClick={() => navigate("/hospitals")} />
        </div>
        <div className="buttonGroup health-tips">
          <img src={healthtips} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ViewHmo;
