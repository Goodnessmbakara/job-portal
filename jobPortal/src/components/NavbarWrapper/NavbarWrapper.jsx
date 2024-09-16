/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const NavbarWrapper = ({ className, navButtonsClassName }) => {
  return (
    <div className={`navbar-wrapper ${className}`}>
      <img className="img" alt="Logo trans" src="https://c.animaapp.com/FJTzofRG/img/logo-trans-1-3@2x.png" />
      <div className={`nav-buttons ${navButtonsClassName}`}>
        <button className="text-wrapper-7">HOME</button>
        <button className="job-categories">JOB CATEGORIES</button>
        <button className="text-wrapper-6">PROFILE</button>
        <button className="text-wrapper-5">CONTACT</button>
        <button className="text-wrapper-4">REGISTER</button>
        <button className="text-wrapper-3">LOGIN</button>
      </div>
    </div>
  );
};
