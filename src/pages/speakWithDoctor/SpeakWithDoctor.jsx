import React from "react";
import { useNavigate } from "react-router-dom";
import home from "./images/home.png";
import healthtips from "./images/health-tips.png";
import hospital from "./images/hospital.png";
import "./speakWithDoctor.css";

const SpeakWithDoctor = () => {
  const navigate = useNavigate();
  return (
    <div className="speakWith-container">
      <div className="speak-with-div">
        <p className="speakWith-header">Speak with a Doctor</p>
        <input type="text" placeholder="Search" className="speakWith-input" />
        <i class="fa-solid fa-magnifying-glass speakWith-search_icon"></i>
        <p className="speakWith-p">
          Please select the type of doctor you wish to speak with.
        </p>
      </div>
      <div className="speakWithDoctor-types">
        <div className="cardiologist">
          <h4>Cardiologist</h4>
        </div>
        <div className="cardiologist">
          <h4>Gynaecologist</h4>
        </div>
        <div className="cardiologist">
          <h4>Paediatrician</h4>
        </div>
        <div className="cardiologist">
          <h4>Orthopedist</h4>
        </div>
        <div className="cardiologist">
          <h4>Urologist</h4>
        </div>
        <div className="cardiologist">
          <h4>General Doctor</h4>
        </div>
      </div>
      <input
        className="continue-button"
        type="submit"
        value="Continue"
        onClick={() => navigate("/call-or-chat")}
      />
      <div className="bottom-links">
        <div
          className="bottom-links_home"
          onClick={() => navigate("/dashboard")}
        >
          <img src={home} alt="" />
        </div>
        <div
          className="bottom-links_hospital"
          onClick={() => navigate("/dashboard")}
        >
          <img src={hospital} alt="" />
        </div>
        <div
          className="bottom-links_healthtips"
          onClick={() => navigate("/dashboard")}
        >
          <img src={healthtips} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SpeakWithDoctor;
