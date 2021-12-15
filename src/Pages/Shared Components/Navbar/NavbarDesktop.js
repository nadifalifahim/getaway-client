import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";

const NavbarDesktop = () => {
  const { user, logOut } = useAuth();
  const setUserFirstName = () => {
    if (user.displayName) {
      const userName = user?.displayName;
      const userNameArray = userName.split(" ");
      return userNameArray[0];
    }
  };
  return (
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
              className={({ isActive }) =>
                "navlink" + (isActive ? "-active" : "")
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/my-bookings"
              className={({ isActive }) =>
                "navlink" + (isActive ? "-active" : "")
              }
            >
              My Bookings
            </NavLink>
            <NavLink
              to="/all-bookings"
              className={({ isActive }) =>
                "navlink" + (isActive ? "-active" : "")
              }
            >
              Manage All Bookings
            </NavLink>
            <NavLink
              to="/add-new-service"
              className={({ isActive }) =>
                "navlink" + (isActive ? "-active" : "")
              }
            >
              Add a New Service
            </NavLink>
          </div>
        ) : (
          <div>
            <Link to="/#home" smooth className={"navlink"}>
              Home
            </Link>
            <Link to="/#about" smooth className={"navlink"}>
              About Us
            </Link>
            <Link to="/#packages" smooth className={"navlink"}>
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
  );
};

export default NavbarDesktop;
