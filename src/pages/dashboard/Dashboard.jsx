import React from "react";
import Scroller from "../../components/Scroller/Scroller";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboardMainBoard">
      <h1>Welcome Flora</h1>
      <input type="text" className="search-input" placeholder="Search" />

      <div className="hmo-div"></div>
      <div className="speak-with-doctor-div"></div>

      <h2>Hospitals Near Me</h2>
      <Scroller />
      <div className="dashNavLinks">
        <div className="buttonGroup">
          <input type="button" />
          <label htmlFor="">Home</label>
        </div>
        <div className="buttonGroup">
          <input type="button" />
          <label htmlFor="">Hospitals</label>
        </div>
        <div className="buttonGroup">
          <input type="button" />
          <label htmlFor="">Health Tips</label>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
