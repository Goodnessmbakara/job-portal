/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Training = ({ className, frameClassName }) => {
  return (
    <div className={`training ${className}`}>
      <div className="text-wrapper-9">Training&nbsp;&nbsp;&nbsp;&nbsp; +</div>
      <div className={`frame-2 ${frameClassName}`}>
        <div className="duration">
          <div className="text-wrapper-10">duration:</div>
          <div className="text-wrapper-11">mm/yy - mm/yy</div>
        </div>
        <div className="group">
          <div className="position">
            <div className="text-wrapper-10">Position:</div>
            <div className="text-wrapper-11">your position</div>
          </div>
          <div className="company">
            <div className="text-wrapper-10">Company:</div>
            <div className="text-wrapper-11">Company Name</div>
          </div>
          <div className="location">
            <div className="text-wrapper-10">Location:</div>
            <div className="text-wrapper-11">location</div>
          </div>
        </div>
      </div>
    </div>
  );
};
