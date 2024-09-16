/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const JobCard = ({ className, rectangle = "https://c.animaapp.com/MlmHrukd/img/rectangle-5-3.svg" }) => {
  return (
    <div className={`job-card ${className}`}>
      <div className="text-wrapper-5">job title:</div>
      <div className="text-wrapper-6">Company name:</div>
      <div className="text-wrapper-7">Location:</div>
      <div className="text-wrapper-8">Job Type:</div>
      <img className="rectangle" alt="Rectangle" src={rectangle} />
    </div>
  );
};

JobCard.propTypes = {
  rectangle: PropTypes.string,
};
