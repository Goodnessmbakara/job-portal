/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { JobCard } from "../JobCard";
import "./style.css";

export const FeaturedJobs = ({ className }) => {
  return (
    <div className={`featured-jobs ${className}`}>
      <div className="text-wrapper-9">featured jobs</div>
      <div className="frame-3">
        <JobCard className="job-card-instance" rectangle="https://c.animaapp.com/MlmHrukd/img/rectangle-5-9.svg" />
        <JobCard className="job-card-instance" rectangle="https://c.animaapp.com/MlmHrukd/img/rectangle-5-9.svg" />
        <JobCard className="job-card-instance" rectangle="https://c.animaapp.com/MlmHrukd/img/rectangle-5-9.svg" />
      </div>
    </div>
  );
};
