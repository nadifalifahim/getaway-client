import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Package from "../../Shared Components/Package/Package";
// import Service from "../../../Services/Service";
import "./HomePackages.css";

const HomePackages = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);

  return (
    <div id="packages" className="home-services-container">
      <div className="home-services-content">
        <small className="section-heading">Choose Your Package</small>
        <h2 className="section-title">
          Select Your Best Package For Your Travel
        </h2>
        <p className="section-content">
          Need help deciding where to go next? Take a look at some of our
          travelers’ recommended vacations.
        </p>
      </div>
      <div className="home-service-container">
        {serviceData.slice(0, 6).map((service) => (
          <Package key={service._id} service={service}></Package>
        ))}
      </div>
      <div className="home-services-content">
        <Link to="/services">
          <button>Explore all services</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePackages;
