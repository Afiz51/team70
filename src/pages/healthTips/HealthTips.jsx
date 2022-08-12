import React from "react";
import { useNavigate } from "react-router-dom";
import Runner from "./images/Runner.png";
import Food from "./images/Food.png";
import Apple from "./images/Apple.png";
import home from "./images/home.png";
import healthtips from "./images/health-tips.png";
import hospital from "./images/hospital.png";
import "./healthTips.css";

const HealthTips = () => {
  const navigate = useNavigate();
  return (
    <div className="health-tips-container">
      <i class="fa-solid fa-arrow-left black-arrow"></i>
      <div className="health-tips_header">
        <p className="health-tips_h1">Health Tips</p>
      </div>
      <div className="health-tips_column">
        <div className="health-tips_column-run">
          <img src={Runner} alt="" />
          <p className="health-tips_column-run_p">
            Did you know that consistent <br />
            running can lower your blood <br />
            pressure and resting heart rate?
          </p>
        </div>
        <div className="health-tips_column-food">
          <img src={Food} alt="" />
          <p className="health-tips_column-food_p">
            A diet rich in vegetables and <br /> fruits can lower blood
            pressure,
            <br /> reduce the risk of heart disease <br /> and stroke.
          </p>
        </div>
        <div className="health-tips_column-apple">
          <img src={Apple} alt="" />
          <p className="health-tips_column-apple_p">
            A diet rich in vegetables and <br /> fruits can lower blood
            pressure,
            <br /> reduce the risk of heart disease <br /> and stroke.
          </p>
        </div>
      </div>
      <div className="bot-links">
        <div className="bot-links_home" onClick={() => navigate("/dashboard")}>
          <img src={home} alt="" />
        </div>
        <div className="bot-links_hospital">
          <img src={hospital} alt="" onClick={() => navigate("/hospitals")} />
        </div>
        <div className="bot-links_healthtips">
          <img
            src={healthtips}
            alt=""
            onClick={() => navigate("/health-tips")}
          />
        </div>
      </div>
    </div>
  );
};

export default HealthTips;
