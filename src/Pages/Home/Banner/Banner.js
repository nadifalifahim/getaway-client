import React from "react";
import "./Banner.css";
import img1 from "../../../Images/Banner/2.jpg";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  return (
    <div id="home">
      <div className="banner-container">
        <div className="banner-image-container">
          <img src={img1} alt="banner" />
        </div>
        <div className="banner-content">
          <h1>
            Find The Best Deals <br /> For Your Next Getaway
          </h1>
          <div className="underline-red"></div>
          <h2>Travelling Now Made Easier Than Ever Before</h2>
          <br />
          <HashLink smooth to="#packages">
            <button>
              Book Now <i className="fas fa-plus-circle"></i>
            </button>
          </HashLink>
        </div>
      </div>
      <div className="benefits-container">
        <div className="benefits-content">
          <i className="fas fa-route"></i>
          <div>
            <h2>Original Experience</h2>
            <p>
              Our travel experts craft the perfect trip for every traveler
              through our award-winning customer service
            </p>
          </div>
        </div>
        <div className="benefits-content">
          <i className="fas fa-map-marked-alt"></i>
          <div>
            <h2>Top Destinations</h2>
            <p>
              From destination weddings to corporate retreats to family
              reunions, turn your special occasion into a memorable getaway
            </p>
          </div>
        </div>
        <div className="benefits-content">
          <i className="fas fa-plane-departure"></i>
          <div>
            <h2>Best Deals</h2>
            <p>
              Plan a custom group vacation package complete with elevated
              services, exclusive rates, and unique amenities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
