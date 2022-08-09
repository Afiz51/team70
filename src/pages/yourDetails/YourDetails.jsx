import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./yourDetails.css";

const userDetails = JSON.parse(localStorage.getItem("newUser"));

const YourDetails = () => {
  const [details] = useState(userDetails);

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/create-ewallet");
  };
  return (
    <div className="yourDetailsMainBoard">
      <div className="yourDetails-div" style={{ top: 11, paddingTop: 20 }}>
        <p className="identityText">Your details</p>
        <hr className="horizontal-rule" />
      </div>

      <form className="yourDetailsForm" onSubmit={handleSubmit}>
        <div className="yourDetailsFormGroup">
          <label>First Name</label>
          <input type="text" value={details ? details.firstname : ""} />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Last Name</label>
          <input type="text" value={details ? details.lastname : ""} />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Date of Birth</label>
          <input type="text" value={details ? details.birthdate : ""} />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Gender</label>
          <input type="text" value={details ? details.gender : ""} />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Email Address</label>
          <input type="text" value={details ? details.email : ""} />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Country</label>
          <input type="text" value={details ? details.country : ""} />
        </div>
        <div className="yourDetailsFormGroup">
          <label>State of Origin</label>
          <input type="text" value={details ? details.state_of_origin : ""} />
        </div>
        <div className="yourDetailsFormGroup">
          <label>State of Residence</label>
          <input
            type="text"
            value={details ? details.state_of_residence : ""}
          />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Phone Number</label>
          <input type="text" value={details ? details.telephone : ""} />
        </div>
        <input className="your-details-button" type="submit" value="Verify" />
      </form>
    </div>
  );
};

export default YourDetails;
