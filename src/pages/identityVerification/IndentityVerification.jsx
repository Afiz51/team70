import React, { useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./indentityVerification.css";

const initialState = {
  NIN: "",
  password: "",
  confirmPassword: "",
};

const IndentityVerification = () => {
  const [details, setDetails] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    register();
    console.log(details);
  };
  const register = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://team70-mobile-app.herokuapp.com/api/user/register",
        {
          NIN: details.NIN,
          password: details.password,
          confirmPassword: details.confirmPassword,
        }
      );
      localStorage.setItem("newUser", JSON.stringify(response.data.newUser));
      // navigate("/your-details");
      setIsLoading(false);
      window.location.replace("/your-details");
      console.log(response.data.newUser);
    } catch (error) {
      if (error) {
        setIsLoading(false);
        toast.error("Please check your NIN and try again");
        console.log(error.response.data);
      }
    }
  };

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div className="identityMainBoard">
      <i
        class="fa-solid fa-arrow-left"
        style={{
          display: "inline",
          fontSize: 24,
          marginRight: 15,
          color: "#00308b",
        }}
      ></i>
      <p className="identityText">Identity Verification</p>
      <hr className="horizontal-rule" />
      <p className="welcome-text">
        Welcome, please enter your NIN to get started.
      </p>

      <form className="NIN-form" onSubmit={handleSubmit}>
        <div className="yourDetailsFormGroup">
          <label>NIN</label>
          <input
            type="text"
            name="NIN"
            value={details.NIN}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="yourDetailsFormGroup">
          <label>password</label>
          <input
            type="password"
            name="password"
            value={details.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="yourDetailsFormGroup">
          <label>confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            value={details.confirmPassword}
            onChange={(e) => handleChange(e)}
          />
        </div>
        {isLoading ? (
          <Loader marginTop="140px" marginLeft="150px" />
        ) : (
          <input className="NIN-button" type="submit" value="Verify" />
        )}
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default IndentityVerification;
