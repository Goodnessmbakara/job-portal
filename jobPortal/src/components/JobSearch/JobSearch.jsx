/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const JobSearch = ({
  className,
  frameClassName,
  divClassName,
  frameClassNameOverride,
  divClassNameOverride,
  divClassName1,
}) => {
  return (
    <div className={`job-search ${className}`}>
      <div className={`frame ${frameClassName}`}>
        <p className={`text-wrapper ${divClassName}`}>job title,keywords or company name</p>
      </div>
      <div className={`div-wrapper ${frameClassNameOverride}`}>
        <div className="text-wrapper">city, province or region</div>
      </div>
      <div className={`div ${divClassNameOverride}`}>
        <div className={`text-wrapper-2 ${divClassName1}`}>search</div>
      </div>
      <div className="text-wrapper-3">Find your dream job</div>
    </div>
  );
};
