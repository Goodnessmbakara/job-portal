/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const NavbarWrapper = ({ className, navButtonsClassName }) => {
  return (
    <div className={`navbar-wrapper ${className}`}>
      <img className="img" alt="Logo trans" src="https://c.animaapp.com/FJTzofRG/img/logo-trans-1-3@2x.png" />
      <div className={`nav-buttons ${navButtonsClassName}`}>
        <Link to="/"><button className="text-wrapper-7">HOME</button></Link>
        <button className="job-categories">JOB CATEGORIES</button>
        <button className="text-wrapper-6">PROFILE</button>
        <button className="text-wrapper-5">CONTACT</button>
        <Link to="/Register"><button className="text-wrapper-4">REGISTER</button></Link>
        <Link to="/Login"><button className="text-wrapper-3">LOGIN</button></Link>
      </div>
    </div>
  );
};
