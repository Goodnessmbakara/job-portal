/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Loginas = ({ className }) => {
  return (
    <div className={`loginas ${className}`}>
      <div className="text-wrapper">Welcome to Job Portal</div>
      <div className="div">login</div>
      <div className="frame">
        <div className="text-wrapper-2">Email</div>
      </div>
      <div className="div-wrapper">
        <div className="text-wrapper-3">password</div>
      </div>
      <div className="frame-2">
        <div className="text-wrapper-4">Don’t have an account?</div>
        <div className="text-wrapper-5">Register</div>
      </div>
    </div>
  );
};
