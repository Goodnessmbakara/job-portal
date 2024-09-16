/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Education = ({ className, collegeUniversityClassName }) => {
  return (
    <div className={`education ${className}`}>
      <div className="text-wrapper-6">Education&nbsp;&nbsp;&nbsp;&nbsp;+</div>
      <div className="div-4">
        <div className="text-wrapper-7">Degree:</div>
        <div className="text-wrapper-8">type</div>
      </div>
      <div className={`div-4 ${collegeUniversityClassName}`}>
        <div className="text-wrapper-7">College, University:</div>
        <div className="text-wrapper-8">college name</div>
      </div>
      <div className="div-4">
        <div className="text-wrapper-7">Location:</div>
        <div className="text-wrapper-8">state, city</div>
      </div>
      <div className="div-4">
        <div className="text-wrapper-7">Start Date:</div>
        <div className="text-wrapper-8">mm/yy</div>
      </div>
      <div className="div-4">
        <div className="text-wrapper-7">End Date:</div>
        <div className="text-wrapper-8">mm/yy</div>
      </div>
      <div className="div-4">
        <div className="text-wrapper-7">Grade</div>
        <div className="text-wrapper-8">out of 4.0</div>
      </div>
    </div>
  );
};
