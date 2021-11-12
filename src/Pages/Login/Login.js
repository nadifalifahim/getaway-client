import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Login.css";

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
    history.push(locationURL);
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <div>
        <h1>Login</h1>
        <form onSubmit={handleEmailSignIn}>
          <input
            type="text"
            placeholder="Username or Email"
            onBlur={handleEmailChange}
            required
          ></input>
          <input
            type="password"
            placeholder="Password"
            onBlur={handlePasswordChange}
            required
          ></input>
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
        <div>
          <button onClick={handleGoogleSignIn} className="primary-button">
            Sign In Using Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
