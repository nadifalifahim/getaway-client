import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react/cjs/react.development";
import useAuth from "../../../Hooks/useAuth";
import "./NavbarMobile.css";

const NavbarMobile = () => {
  const { user, logOut } = useAuth();
  const [menuShow, setMenuShow] = useState(false);

  const handleMenuShow = () => {
    setTimeout(() => {
      setMenuShow(!menuShow);
    }, 20);
  };

  const setUserFirstName = () => {
    if (user.displayName) {
      const userName = user?.displayName;
      const userNameArray = userName.split(" ");
      return userNameArray[0];
    }
  };
  return (
    <nav className="navbar-mobile-container">
      <NavLink to="/home">
        <h1 className="logo">
          <span className="logo-icon">
            <img src="/logo192.png" alt="Getaway logo" />
          </span>
          <span className="logo-span-get">Get</span>
          <span className="logo-span-away">away</span>
        </h1>
      </NavLink>
      <div className="navbar-menu-icon">
        <button onClick={handleMenuShow}>
          <i className="fas fa-bars"></i>
          <div className="logged-in-state-mobile">
            {user.photoURL && <img src={user.photoURL} alt="User" />}
          </div>
        </button>
      </div>
      {menuShow && (
        <div className="navbar-menu-container">
          {user?.email ? (
            <div className="navbar-menu-container">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  "navlink-mobile" + (isActive ? "-active" : "")
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/my-bookings"
                className={({ isActive }) =>
                  "navlink-mobile" + (isActive ? "-active" : "")
                }
              >
                My Bookings
              </NavLink>
              <NavLink
                to="/all-bookings"
                className={({ isActive }) =>
                  "navlink-mobile" + (isActive ? "-active" : "")
                }
              >
                Manage All Bookings
              </NavLink>
              <NavLink
                to="/add-new-service"
                className={({ isActive }) =>
                  "navlink-mobile" + (isActive ? "-active" : "")
                }
              >
                Add a New Service
              </NavLink>
              <button
                className="navlink-mobile btn-register-mobile"
                onClick={logOut}
              >
                <i className="fas fa-sign-out-alt"></i>
                <span>Sign Out</span>
              </button>
            </div>
          ) : (
            <div className="navbar-menu-container">
              <Link
                onClick={handleMenuShow}
                to="/#home"
                smooth
                className={"navlink-mobile"}
              >
                Home
              </Link>
              <Link
                onClick={handleMenuShow}
                to="/#about"
                smooth
                className={"navlink-mobile"}
              >
                About Us
              </Link>
              <Link
                onClick={handleMenuShow}
                to="/#packages"
                smooth
                className={"navlink-mobile"}
              >
                Packages
              </Link>
              <Link
                onClick={handleMenuShow}
                to="/#contact"
                smooth
                className={"navlink-mobile"}
              >
                Contact Us
              </Link>
              <NavLink
                onClick={handleMenuShow}
                to="/login"
                className={({ isActive }) =>
                  "navlink-mobile" + (isActive ? "-active" : "")
                }
              >
                Login
              </NavLink>
              <NavLink
                onClick={handleMenuShow}
                to="/register"
                className={({ isActive }) =>
                  "navlink-mobile btn-register-mobile" +
                  (isActive ? "-active" : "")
                }
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;
