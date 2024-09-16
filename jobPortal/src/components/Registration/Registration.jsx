/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Registration = ({ className }) => {
  return (
    <div className={`registration ${className}`}>
      <div className="text-wrapper">Welcome to Job Portal</div>
      <div className="div">Registration</div>
      <div className="frame">
        <div className="employer-wrapper">
          <div className="text-wrapper-2">First Name</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-2">Last Name</div>
        </div>
        <div className="frame-2">
          <div className="text-wrapper-2">Email</div>
        </div>
        <div className="frame-3">
          <div className="text-wrapper-2">Password</div>
        </div>
        <div className="frame-4">
          <div className="text-wrapper-2">Confirm Password</div>
        </div>
        <div className="frame-4">
          <div className="text-wrapper-2">Sign Up</div>
        </div>
      </div>
    </div>
  );
};
