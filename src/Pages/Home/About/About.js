import React from "react";
import aboutImg from "../../../Images/About/1.jpg";
import "./About.css";

// About page implemented with private route

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-image-container">
        <img src={aboutImg} alt="About" />
      </div>
      <div className="about-content">
        <small className="section-heading">INTRODUCING GETAWAY</small>
        <h1 className="section-title">
          Setting the standard in leisure travel globally
        </h1>
        <br />
        <p className="section-content">
          Dreaming of pristine beaches and glittering seas? The fresh ocean
          breeze cooling you down as you laze about on a remote island. Maybe
          you are visualising yourself whizzing down powdery mountain slopes,
          the icy wind fresh against your skin. Or perhaps what is really
          calling your name is sipping cocktails poolside on a luxury cruise
          ship. Whatever your dream holiday is we can get you there.
        </p>
        <br />
        <p className="section-content">
          From island getaways, snow holidays to cruise experiences we’ve got a
          holiday package for it all. Here at Gateaway we pride ourselves on
          delivering to you the very best in customer experience.
        </p>
      </div>
    </div>
  );
};

export default About;
