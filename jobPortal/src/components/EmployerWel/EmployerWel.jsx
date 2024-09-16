/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const EmployerWel = ({
  className,
  imageClassName,
  image = "https://c.animaapp.com/FJTzofRG/img/image-2.png",
}) => {
  return (
    <div className={`employer-wel ${className}`}>
      <div className="text-wrapper">Welcome to Job Portal</div>
      <img className={`image ${imageClassName}`} alt="Image" src={image} />
      <div className="frame">
        <div className="div">Add a Vacancy</div>
      </div>
      <div className="div-wrapper">
        <div className="div">See applicants</div>
      </div>
    </div>
  );
};

EmployerWel.propTypes = {
  image: PropTypes.string,
};
