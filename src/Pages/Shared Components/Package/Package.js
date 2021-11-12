import React from "react";
import "./Package.css";
import { sentenceCase } from "sentence-case";
import { Link } from "react-router-dom";

const Package = (props) => {
  let { id, title, thumbnail, description } = props.service;
  return (
    <div className="service-container">
      <div className="service-image-container">
        <img src={thumbnail} alt={title}></img>
      </div>
      <h2>{sentenceCase(title)}</h2>
      <p>{description.slice(0, 150)} . . .</p>
      <Link to={`/services/${id}`}>
        <button>
          More details on {title.toLowerCase()}{" "}
          <i className="fas fa-chevron-right"></i>
        </button>
      </Link>
    </div>
  );
};

export default Package;
