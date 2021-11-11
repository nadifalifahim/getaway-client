import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/home">
          <h1 className="logo">
            <span className="logo-icon">
              <img src="/logo192.png" alt="Getaway logo" />
            </span>
            <span className="logo-span-get">Get</span>
            <span className="logo-span-away">away</span>
          </h1>
        </NavLink>
        <div>
          <NavLink to="/home" className="navlink" activeClassName="nav-active">
            Home
          </NavLink>

          <NavLink
            to="/services"
            className="navlink"
            activeClassName="nav-active"
          >
            Packages
          </NavLink>
        </div>
        <div>
          <NavLink to="/login" className="navlink" activeClassName="nav-active">
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="btn-register"
            activeClassName="register-active"
          >
            Register
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
