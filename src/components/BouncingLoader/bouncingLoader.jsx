import React from "react";
import "./bouncingLoader.scss";

const BouncingLoader = (props) => {
  return (
    <div className="bouncing-loader">
      <div className="bouncing-loader__dot"></div>
      <div className="bouncing-loader__dot"></div>
      <div className="bouncing-loader__dot"></div>
    </div>
  );
};

export default BouncingLoader;
