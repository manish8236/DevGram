import React, { Fragment } from "react";
import "./notf.css";

const NotFound = () => {
  return (
    <Fragment>
      {
        /* <h1 className="x-large text-primary">
        <i className="fas fa-exclamation-triangle" /> Page Not Found
      </h1>
      <p className="large">Sorry, this page does not exist</p> */
        <span class="text-3d">
          404 <br />
          Page Not Found
        </span>
      }
    </Fragment>
  );
};

export default NotFound;
