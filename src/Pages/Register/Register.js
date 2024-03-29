import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import useFirebase from "../../Hooks/useFirebase";
import "./Register.css";
import googleIcon from "../../Images/Login/google.png";
import { Link } from "react-router-dom";

// Register page

const Register = () => {
  const {
    signInUsingGoogle,
    registerUsingEmailandPassword,
    setUser,
    setIsLoading,
  } = useFirebase();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const history = useNavigate();
  const locationURL = location.state?.from || "/home";

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRegistration = (e) => {
    registerUsingEmailandPassword(name, email, password);
    history(locationURL);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        history(locationURL);
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="register-body">
      <div className="register-container">
        <div>
          <h1 className="section-title">REGISTER</h1>
          <form onSubmit={handleRegistration}>
            <label>
              Full Name
              <input
                onBlur={handleNameChange}
                type="text"
                required
                placeholder="Enter your name"
              ></input>
            </label>
            <label>
              Email Address
              <input
                onBlur={handleEmailChange}
                type="email"
                required
                placeholder="abc@xyz.com"
              ></input>
            </label>
            <label>
              Password
              <input
                type="password"
                required
                placeholder="Enter your password"
                onBlur={handlePasswordChange}
              ></input>
            </label>
            <button type="submit" className="primary-button">
              Register
            </button>
          </form>
          <p>
            Already signed up?{" "}
            <Link className="create-an-account-text" to="/login">
              Go to login
            </Link>
          </p>
        </div>
        <div className="google-login">
          <p>OTHER SIGN UP METHODS</p>
          <button onClick={handleGoogleSignIn} className="primary-button">
            {/* Sign In Using Google */}
            <img src={googleIcon} alt="google"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
