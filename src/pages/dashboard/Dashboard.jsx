import React from "react";
import Scroller from "../../components/Scroller/Scroller";
import upgrade from "./images/upgrade.png";
import axalogo from "./images/axa-logo.png";
import doubleArrow from "./images/doubleArrow.png";
import home from "./images/home.png";
import healthtips from "./images/health-tips.png";
import hospital from "./images/hospital.png";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboardMainBoard">
      <h1>Welcome Flora</h1>
      <input type="text" className="search-input" placeholder="Search" />
      <i class="fa-solid fa-magnifying-glass search-icon"></i>

      <div className="hmo-div">
        <p className="hmo-title">HMO: AXA Mansard</p>
        <img className="axa-logo" src={axalogo} alt="" />
        <div className="plan-div">
          <p>Plan: Gold</p>
          <p>ID: 001122</p>
        </div>
        <img className="upgrade-logo" src={upgrade} alt="" />
        <Link to="/view-hmo">
          <button className="hmo-details">View HMO Details</button>
        </Link>
      </div>
      <div className="speak-with-doctor-div">
        <h1
          className="speak-with-doctor-button"
          onClick={() => navigate("/hmo")}
        >
          Speak with a Doctor
        </h1>

        <img className="doubleArrow" src={doubleArrow} alt="" />
      </div>

      <h2 style={{ marginTop: 40 }}>Hospitals Near Me</h2>
      <Scroller />
      <div className="dashNavLinks">
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

export default Dashboard;
