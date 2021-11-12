import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const setUserFirstName = () => {
    if (user.displayName) {
      const userName = user?.displayName;
      const userNameArray = userName.split(" ");
      return userNameArray[0];
    }
  };
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
        <div className="nav-center">
          {user?.email ? (
            <div>
              <NavLink
                to="/home"
                exact
                className={({ isActive }) =>
                  "navlink" + (isActive ? "-active" : "")
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/my-bookings"
                exact
                className={({ isActive }) =>
                  "navlink" + (isActive ? "-active" : "")
                }
              >
                My Bookings
              </NavLink>
              <NavLink
                to="/all-bookings"
                exact
                className={({ isActive }) =>
                  "navlink" + (isActive ? "-active" : "")
                }
              >
                Manage All Bookings
              </NavLink>
              <NavLink
                to="/add-new-service"
                exact
                className={({ isActive }) =>
                  "navlink" + (isActive ? "-active" : "")
                }
              >
                Add a New Service
              </NavLink>
            </div>
          ) : (
            <div>
              <Link to="#home" smooth exact className={"navlink"}>
                Home
              </Link>
              <Link to="/#about" smooth exact className={"navlink"}>
                About Us
              </Link>
              <Link to="/#packages" smooth exact className={"navlink"}>
                Packages
              </Link>
              <Link to="/#contact" smooth className={"navlink"}>
                Contact Us
              </Link>
            </div>
          )}
        </div>
        <div>
          {user?.email ? (
            <div className="logged-in-state">
              {user.photoURL && <img src={user.photoURL} alt="User" />}
              {user.displayName && <p>Hello, {setUserFirstName()}</p>}
              <button onClick={logOut}>
                <i className="fas fa-sign-out-alt"></i>
                <span>Sign Out</span>
              </button>
            </div>
          ) : (
            <div>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  "navlink" + (isActive ? "-active" : "")
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  "btn-register" + (isActive ? "-active" : "")
                }
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
