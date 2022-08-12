import React, { useState } from "react";
import Loader from "../../components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import "./login.css";

const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [details, setDetails] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    // navigate("/dashboard");
    console.log(details);
  };

  const login = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://team70-mobile-app.herokuapp.com/api/user/signin",
        {
          email: details.email,
          password: details.password,
        }
      );
      setIsLoading(false);
      window.location.replace("/dashboard");
      console.log(response);
    } catch (error) {
      if (error) {
        toast.error("Invalid credentials");
        setIsLoading(false);
        console.log(error.message);
      }
    }
  };

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="loginMainBoard">
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
          Welcome, please enter your Login details to get started.
        </p>

        <form className="NIN-form" onSubmit={handleSubmit}>
          <div className="yourDetailsFormGroup">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={details.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="yourDetailsFormGroup">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={details.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {isLoading ? (
            <Loader marginTop="230px" />
          ) : (
            <input className="NIN-button" type="submit" value="Login" />
          )}
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Login;
