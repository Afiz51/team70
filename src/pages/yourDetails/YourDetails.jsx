import React from "react";
import "./yourDetails.css";

const YourDetails = () => {
  return (
    <div className="yourDetailsMainBoard">
      <div className="yourDetails-div" style={{ top: 11 }}>
        <p className="identityText">Your details</p>
        <hr className="horizontal-rule" />
      </div>

      <form className="yourDetailsForm">
        <div className="yourDetailsFormGroup">
          <label>First Name</label>
          <input type="text" />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Last Name</label>
          <input type="text" />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Date of Birth</label>
          <input type="text" />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Gender</label>
          <input type="text" />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Email Address</label>
          <input type="text" />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Country</label>
          <input type="text" />
        </div>
        <div className="yourDetailsFormGroup">
          <label>State of Origin</label>
          <input type="text" />
        </div>
        <div className="yourDetailsFormGroup">
          <label>State of Residence</label>
          <input type="text" />
        </div>
        <div className="yourDetailsFormGroup">
          <label>Phone Number</label>
          <input type="text" />
        </div>
        <input className="your-details-button" type="submit" value="Verify" />
      </form>
    </div>
  );
};

export default YourDetails;
