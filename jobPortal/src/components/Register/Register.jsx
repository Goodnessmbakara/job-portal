/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Register = ({ className }) => {
  return (
    <div className={`register ${className}`}>
      <div className="text-wrapper">Welcome to Job Portal</div>
      <div className="div">Register</div>
      <div className="frame">
        <div className="div-wrapper">
          <div className="text-wrapper-2">Employer</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-2">Job Seeker</div>
        </div>
      </div>
    </div>
  );
};
