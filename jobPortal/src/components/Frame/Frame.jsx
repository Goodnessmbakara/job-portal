/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Frame = ({ className }) => {
  return (
    <div className={`frame ${className}`}>
      <div className="text-wrapper">Welcome to Job Portal</div>
      <div className="div">Registration</div>
      <div className="div-2">
        <div className="employer-wrapper">
          <div className="text-wrapper-2">First Name</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-2">Last Name</div>
        </div>
        <div className="div-wrapper-2">
          <div className="text-wrapper-3">Current Position</div>
        </div>
        <div className="div-wrapper-2">
          <div className="text-wrapper-4">Company Name</div>
        </div>
        <div className="div-wrapper-2">
          <div className="text-wrapper-2">Email</div>
        </div>
        <div className="div-wrapper-3">
          <div className="text-wrapper-2">Password</div>
        </div>
        <div className="div-wrapper-4">
          <div className="text-wrapper-2">Confirm Password</div>
        </div>
        <div className="div-wrapper-4">
          <div className="text-wrapper-2">Sign Up</div>
        </div>
      </div>
    </div>
  );
};
