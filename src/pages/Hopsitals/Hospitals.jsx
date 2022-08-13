import React from "react";
import { useNavigate } from "react-router-dom";
import home from "../dashboard/images/home.png";
import healthtips from "../dashboard/images/health-tips.png";
import hospital from "../dashboard/images/hospital.png";
import "./hospitals.css";

const Hospitals = () => {
  const navigate = useNavigate();
  return (
    <div className="hospitalsMainBoard">
      <i
        class="fa-solid fa-arrow-left"
        style={{
          display: "inline",
          fontSize: 24,
          marginRight: 15,
          color: "#00308b",
        }}
      ></i>

      <p className="hmoText">Hospitals</p>
      <input
        type="text"
        className="hospital-search-input"
        placeholder="Search"
      />
      <i class="fa-solid fa-magnifying-glass hospital-search-icon"></i>

      <div className="hospital-div">
        <p className="hospital-name">Reddington Hospital</p>

        <div className="hospital-address">
          <p>Victoria Island, Lagos</p>
          <p
            style={{ cursor: "pointer" }}
            className="book-a-visit"
            onClick={() => navigate("/book-a-visit")}
          >
            Book a visit
          </p>
        </div>
      </div>
      <div className="hospital-div">
        <p className="hospital-name">Reddington Hospital</p>

        <div className="hospital-address">
          <p>Victoria Island, Lagos</p>
          <p className="book-a-visit">Book a visit</p>
        </div>
      </div>
      <div className="hospital-div">
        <p className="hospital-name">Reddington Hospital</p>

        <div className="hospital-address">
          <p>Victoria Island, Lagos</p>
          <p className="book-a-visit">Book a visit</p>
        </div>
      </div>
      <div className="hospital-div">
        <p className="hospital-name">Reddington Hospital</p>

        <div className="hospital-address">
          <p>Victoria Island, Lagos</p>
          <p className="book-a-visit">Book a visit</p>
        </div>
      </div>
      <div className="hospital-div">
        <p className="hospital-name">Reddington Hospital</p>

        <div className="hospital-address">
          <p>Victoria Island, Lagos</p>
          <p className="book-a-visit">Book a visit</p>
        </div>
      </div>
      <div className="hospital-div">
        <p className="hospital-name">Reddington Hospital</p>

        <div className="hospital-address">
          <p>Victoria Island, Lagos</p>
          <p className="book-a-visit">Book a visit</p>
        </div>
      </div>
      <div className="dashNavLinks hospital-page">
        <div className="buttonGroup Home">
          <img src={home} alt="" onClick={() => navigate("/dashboard")} />
        </div>
        <div className="buttonGroup hospitals">
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

export default Hospitals;
