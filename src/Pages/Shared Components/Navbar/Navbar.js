import React from "react";
import { NavLink } from "react-router-dom";
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
            to="/about"
            exact
            className={({ isActive }) =>
              "navlink" + (isActive ? "-active" : "")
            }
          >
            About Us
          </NavLink>
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
