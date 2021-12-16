import React, { useState, useEffect } from "react";
import "./Navbar.css";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    // console.log(window.outerWidth);
    if (window.outerWidth < 800) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }, []);

  return (
    <div className="navbar">
      {mobileView ? <NavbarMobile /> : <NavbarDesktop />}
    </div>
  );
};

export default Navbar;
