/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const FeaturedCompanies = ({
  className,
  intel = "https://c.animaapp.com/MlmHrukd/img/intel-1-2@2x.png",
  meta = "https://c.animaapp.com/MlmHrukd/img/meta-1-2@2x.png",
}) => {
  return (
    <div className={`featured-companies ${className}`}>
      <div className="text-wrapper-4">featured companies</div>
      <div className="frame-2">
        <img className="image" alt="Image" src="https://c.animaapp.com/MlmHrukd/img/image-1-2@2x.png" />
        <img className="img" alt="Image" src="https://c.animaapp.com/MlmHrukd/img/image-2-2@2x.png" />
        <img className="image-2" alt="Image" src="https://c.animaapp.com/MlmHrukd/img/image-3-2@2x.png" />
        <img className="intel" alt="Intel" src={intel} />
        <img className="meta" alt="Meta" src={meta} />
      </div>
    </div>
  );
};

FeaturedCompanies.propTypes = {
  intel: PropTypes.string,
  meta: PropTypes.string,
};
