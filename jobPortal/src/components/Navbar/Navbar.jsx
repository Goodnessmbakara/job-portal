/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Navbar = ({ className, navbtnClassName }) => {
  return (
    <div className={`navbar ${className}`}>
      <img className="logo-trans" alt="Logo trans" src="https://c.animaapp.com/FJTzofRG/img/logo-trans-1-3@2x.png" />
      <img
        className={`navbtn ${navbtnClassName}`}
        alt="Navbtn"
        src="https://c.animaapp.com/FJTzofRG/img/navbtn-1-1@2x.png"
      />
    </div>
  );
};
