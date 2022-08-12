import React from "react";
import { useNavigate } from "react-router-dom";
import home from "../dashboard/images/home.png";
import hospital from "../dashboard/images/hospital.png";
import healthtips from "../dashboard/images/health-tips.png";
import "./bookavisit.css";

const BookAVisit = () => {
  const navigate = useNavigate();
  return (
    <div className="bookAVisitMainBoard">
      <i
        class="fa-solid fa-arrow-left"
        style={{
          display: "inline",
          fontSize: 24,
          marginRight: 15,
          color: "#00308b",
        }}
      ></i>

      <p className="hmoText">Hospital Details</p>
      <div className="contact-information">
        <p>Reddington Hospital</p>
      </div>
      <div className="contact-info-book-a-visit">
        <div>
          <p>Phone</p>
          <p>Email Address</p>
        </div>
        <div>
          <p>07002929111</p>
          <p>healthcare@axamansard.com</p>
        </div>
      </div>
      <input
        className="book-an-appointment-button"
        type="submit"
        value="Book an Appointment"
        onClick={() => navigate("/our-services")}
      />
      <div className="book-a-visit-Links">
        <div
          className="buttonGroup Home"
          onClick={() => navigate("/dashboard")}
        >
          <img src={home} alt="" />
        </div>
        <div
          className="buttonGroup hospitals"
          onClick={() => navigate("/hospitals")}
        >
          <img src={hospital} alt="" />
        </div>
        <div
          className="buttonGroup health-tips"
          onClick={() => navigate("/health-tips")}
        >
          <img src={healthtips} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BookAVisit;
