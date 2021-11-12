import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import useFirebase from "../../Hooks/useFirebase";
import "./Register.css";

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
    history.push(locationURL);
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
    <div className="register-container">
      <div>
        <h1 className="section-title">Register</h1>
        <form onSubmit={handleRegistration}>
          <input
            onBlur={handleNameChange}
            type="text"
            required
            placeholder="Enter your name"
          ></input>
          <input
            onBlur={handleEmailChange}
            type="email"
            required
            placeholder="Enter your email"
          ></input>
          <input
            type="password"
            required
            placeholder="Enter your password"
            onBlur={handlePasswordChange}
          ></input>
          <button type="submit" className="primary-button">
            Register
          </button>
        </form>
      </div>
      <button onClick={handleGoogleSignIn} className="primary-button">
        Register Using Google
      </button>
    </div>
  );
};

export default Register;
