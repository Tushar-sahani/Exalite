import React from "react";
import "./Login.css";
// import {Link} from 'react-router-dom'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TokenContext } from "../../context/context";

const Login = () => {
  const [slide, setSlide] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { dispatch } = useContext(TokenContext);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSlide = () => {
    setSlide(!slide);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [formDatalogin, setFormDatalogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleChangelogin = useCallback((e) => {
    const { name, value } = e.target;
    setFormDatalogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      axios
        .post("http://localhost:8000/user/sign-up", formData)
        .then((res) => {
          const statusCode = res.status; // Check the status code from the backend
          if (statusCode === 201) {
            alert("User created Successfully");
            const token = res.data.token.access_token;
            // Dispatch action to update token and login state
            dispatch({ type: "SET_TOKEN", payload: token });
            dispatch({ type: "SET_LOGGED_IN", payload: true });
            // navigate('/user/home'); // Navigate to user/home page
            setSlide(!slide);
          } else {
            // console.log(res); // Log the entire response object for debugging
            alert("An error occurred. Please try again later.");
          }
        })
        .catch((error) => {
          if (error.response) {
            const statusCode = error.response.status;
            const errorMessage = error.response.data.detail;
            alert(`Error: ${statusCode} - ${errorMessage}`);
          } else if (error.request) {
            alert("No response received from the server"); // The request was made but no response was received
          } else {
            // Something happened in setting up the request that triggered an error
            alert("Error: " + error.message);
          }
        });
    },
    [formData, dispatch, navigate]
  );

  const handleSubmitlogin = useCallback(
    (e) => {
      e.preventDefault();
      if (!formDatalogin.email || !formDatalogin.password) {
        alert("Email or Password cannot be blank..!!");
      } else {
        axios
          .post("http://localhost:8000/user/sign-in", formDatalogin)
          .then((res) => {
            const statusCode = res.data.status_code; // Check the status code from the backend
            if (statusCode === 200) {
              const token = res.data.token.access_token;
              // Dispatch action to update token and login state
              dispatch({ type: "SET_TOKEN", payload: token });
              dispatch({ type: "SET_LOGGED_IN", payload: true });
              alert("Login Successfull Redirect to Dashboard.. ");
              // navigate('/home'); // navigate to user/home page
            } else {
              alert(
                "Response from the backend API: " +
                  JSON.stringify(res.data.detail)
              );
              console.log(res);
            }
          })
          .catch((error) => {
            if (error.response) {
              const statusCode = error.response.status;
              const errorMessage = error.response.data.detail;
              alert(`Error: ${statusCode} - ${errorMessage}`);
            } else if (error.request) {
              alert("No response received from the server"); // The request was made but no response was received
            } else {
              // Something happened in setting up the request that triggered an error
              alert("Error: " + error.message);
            }
          });
      }
    },
    [formDatalogin, dispatch, navigate]
  );

  return (
    <div className="login">
      <div className={`registercontainer ${slide ? "right-panel-active" : ""}`}>
        <div className="form-container sign-up-container">
          <form className="form" onSubmit={handleSubmit}>
            <h2 className="head">SCMXPertLite</h2>
            <h4>Create Account</h4>
            <div className="form-items">
              <label htmlFor="" className="form-label">
                What Should We Call you?*
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                onChange={handleChange}
              />
            </div>
            <div className="form-items">
              <label htmlFor="" className="form-label">
                Email address*
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>
            <div className="form-items">
              <label htmlFor="" className="form-label">
                Create a New password*
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter New password"
                onChange={handleChange}
              />
              <div
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div className="form-items">
              <label htmlFor="" className="form-label">
                Confirm New password*
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmpassword"
                placeholder="Enter New password"
                onChange={handleChange}
              />
              <div
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <p className="p text-black-50 fs-6">
              I have read and I accept the Privacy Policy & Conditions of use
            </p>
            <button className="button">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="form" onSubmit={handleSubmitlogin}>
            <h2 className="head">SCMXPertLite</h2>
            <h4>Sign in</h4>
            <div className="form-items">
              <label htmlFor="" className="form-label">
                Email address*
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formDatalogin.email}
                onChange={handleChangelogin}
              />
            </div>
            <div className="form-items">
              <label htmlFor="" className="form-label">
                Password*
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
                value={formDatalogin.password}
                onChange={handleChangelogin}
              />
              <div
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <a href="/">Forgot your password?</a>
            <button className="button" type="submit">
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h4 className="text-dark">Welcome Back!</h4>
              <p className="p text-dark">
                Welcome back! Please login with your personal info.
              </p>
              <button
                className="ghost button"
                id="signIn"
                onClick={handleSlide}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h4 className="text-dark">Create your account</h4>
              <p className="p text-dark">
                Enter your personal details and start journey with us.
              </p>
              <button
                className="ghost button"
                id="signUp"
                onClick={handleSlide}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
