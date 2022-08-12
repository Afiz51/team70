import React from "react";
import "./ourservices.css";
import home from "../dashboard/images/home.png";
import hospital from "../dashboard/images/hospital.png";
import healthtips from "../dashboard/images/health-tips.png";

const OurServices = () => {
  return (
    <div className="ourServicesMainBoard">
      <i
        class="fa-solid fa-arrow-left"
        style={{
          display: "inline",
          fontSize: 24,
          marginRight: 15,
          color: "#00308b",
        }}
      ></i>
      <p className="hmoText" style={{ marginLeft: 30, fontSize: 24 }}>
        Our Services
      </p>
      <div className="contact-information" style={{ fontWeight: 600 }}>
        <p style={{ fontWeight: 300 }}>
          Please select a service to book an appointment{" "}
        </p>
      </div>
      <div className="our-services-div">
        <div className="cardiologist service">
          <h4>Cardiologist</h4>
        </div>
        <div className="cardiologist service">
          <h4>Cardiologist</h4>
        </div>
        <div className="cardiologist service">
          <h4>Cardiologist</h4>
        </div>
        <div className="cardiologist service">
          <h4>Cardiologist</h4>
        </div>
      </div>
      <input
        className="book-an-appointment-button"
        type="submit"
        value="Book an Appointment"
      />
      <div className="book-a-visit-Links ourServices">
        <div className="buttonGroup Home">
          <img src={home} alt="" />
        </div>
        <div className="buttonGroup hospitals">
          <img src={hospital} alt="" />
        </div>
        <div className="buttonGroup health-tips">
          <img src={healthtips} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
