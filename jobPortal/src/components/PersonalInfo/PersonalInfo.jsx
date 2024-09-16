/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const PersonalInfo = ({ className, personalInformationClassName }) => {
  return (
    <div className={`personal-info ${className}`}>
      <div className={`personal-information ${personalInformationClassName}`}>Personal Information&nbsp;&nbsp;+</div>
      <div className="div-3">
        <div className="text-wrapper-4">First Name:</div>
        <div className="text-wrapper-5">first name</div>
      </div>
      <div className="div-3">
        <div className="text-wrapper-4">Last Name:</div>
        <div className="text-wrapper-5">last name</div>
      </div>
      <div className="div-3">
        <div className="text-wrapper-4">BirthDate:</div>
        <p className="text-wrapper-5">dd / mm / yy</p>
      </div>
      <div className="div-3">
        <div className="text-wrapper-4">Gender:</div>
        <div className="text-wrapper-5">male</div>
      </div>
      <div className="div-3">
        <div className="text-wrapper-4">Nationality:</div>
        <div className="text-wrapper-5">nationality</div>
      </div>
      <div className="div-3">
        <div className="text-wrapper-4">Marital Status:</div>
        <div className="text-wrapper-5">single</div>
      </div>
    </div>
  );
};
