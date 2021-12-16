import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Login.css";
import googleIcon from "../../Images/Login/google.png";

// Login Page
const Login = () => {
  const { signInUsingGoogle, setIsLoading, setUser, signInUsingEmail } =
    useFirebase();

  const location = useLocation();
  const history = useNavigate();
  const locationURL = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        history(locationURL);
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailSignIn = (e) => {
    signInUsingEmail(email, password);
    history(locationURL);
    e.preventDefault();
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div>
          <h1 className="section-title">LOGIN</h1>
          <form onSubmit={handleEmailSignIn}>
            <label>
              Username or Email Address
              <input
                type="text"
                placeholder="abc@xyz.com"
                onBlur={handleEmailChange}
                required
              ></input>
            </label>

            <label>
              Password
              <input
                type="password"
                placeholder="Password"
                onBlur={handlePasswordChange}
                required
              ></input>
            </label>
            <button type="submit" className="primary-button">
              Login
            </button>
          </form>
          <br />
          <p>
            Don't have an account?{" "}
            <Link className="create-an-account-text" to="/register">
              Create an account
            </Link>
          </p>
          <div className="google-login">
            <p>OTHER SIGN IN METHODS</p>
            <button onClick={handleGoogleSignIn} className="primary-button">
              {/* Sign In Using Google */}
              <img src={googleIcon} alt="google"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
