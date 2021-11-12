import React from "react";
import "./PageNotFound.css";
import errorimage from "./error.png";
import { HashLink } from "react-router-hash-link";

// 404: Page not found
const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <div>
        <img src={errorimage} alt="" />
        <h1>Page Not Found!</h1>
        <h5>Please try searching for some other page</h5>

        <HashLink to="/#home">
          <button className="primary-button">Back to home</button>
        </HashLink>
      </div>
    </div>
  );
};

export default PageNotFound;
