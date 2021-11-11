import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-area">
      <nav className="navbar">
        {/* Logo Container */}
        <div className="logo-container">
          <img src="logo192.png" alt="getaway-logo"></img>
          <p>Getaway</p>
        </div>
        {/* Nav Link Container */}
        <div className="navlink-container-center">
          <NavLink activeClassName="navlink-active" to="/home">
            HOME
          </NavLink>
        </div>
        <div className="navlink-container-right">
          <NavLink activeClassName="navlink-active" to="/register">
            REGISTER
          </NavLink>
          <NavLink activeClassName="login-active" to="/login">
            LOGIN
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
