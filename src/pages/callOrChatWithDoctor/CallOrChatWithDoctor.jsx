import React from "react";
import home from "../dashboard/images/home.png";
import hospital from "../dashboard/images/hospital.png";
import healthtips from "../dashboard/images/health-tips.png";
import "./callOrChatWithDoctor.css";

const CallOrChatWithDoctor = () => {
  return (
    <div className="callOrChatMainBoard">
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
        <p>How would you like to speak with a doctor?</p>
      </div>
      <div className="call-a-doctor">
        <div>
          <p>Phone</p>
          <p>Email Address</p>
        </div>
        <div>
          <p>07002929111</p>
          <p>healthcare@axamansard.com</p>
        </div>
      </div>
      <div className="chat-with-a-doctor">
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
      />
      <div className="book-a-visit-Links">
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

export default CallOrChatWithDoctor;
