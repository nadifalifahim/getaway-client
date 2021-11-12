import React, { useEffect, useState } from "react";
import Package from "../../Shared Components/Package/Package";
// import Service from "../../../Services/Service";
import "./HomePackages.css";
import Loader from "react-loader-spinner";

const HomePackages = () => {
  const [serviceData, setServiceData] = useState([]);
  const [runLoader, setRunLoader] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
        setRunLoader(false);
      });
  }, []);

  return (
    <div>
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
        {/* Loader while loading */}
        {runLoader ? (
          <div className="loader">
            <Loader type="Grid" color="#f36201" height={80} width={80} />
          </div>
        ) : (
          <div>
            <div className="home-service-container">
              {serviceData.map((service) => (
                <Package key={service._id} service={service}></Package>
              ))}
            </div>
            <div className="home-services-content">
              {/* <Link to="/services">
          <button>Explore all services</button>
        </Link> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePackages;
