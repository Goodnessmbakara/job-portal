/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const WorkExperience = ({ className, frameClassName }) => {
  return (
    <div className={`work-experience ${className}`}>
      <div className="text-wrapper-12">Work Experience&nbsp;&nbsp;&nbsp;&nbsp; +</div>
      <div className={`frame-3 ${frameClassName}`}>
        <div className="duration-2">
          <div className="text-wrapper-13">duration:</div>
          <div className="text-wrapper-14">mm/yy - mm/yy</div>
        </div>
        <div className="group-2">
          <div className="position-2">
            <div className="text-wrapper-13">Position:</div>
            <div className="text-wrapper-14">your position</div>
          </div>
          <div className="company-2">
            <div className="text-wrapper-13">Company:</div>
            <div className="text-wrapper-14">Company Name</div>
          </div>
          <div className="location-2">
            <div className="text-wrapper-13">Location:</div>
            <div className="text-wrapper-14">location</div>
          </div>
        </div>
      </div>
    </div>
  );
};
