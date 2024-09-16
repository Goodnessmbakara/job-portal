/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ProfileCard = ({
  className,
  imageClassName,
  image = "https://c.animaapp.com/osy4XtMK/img/image-4-2.png",
  profileClassName,
  mail = "https://c.animaapp.com/osy4XtMK/img/mail-1-2.svg",
  phone = "https://c.animaapp.com/osy4XtMK/img/phone-1-2.svg",
  address = "https://c.animaapp.com/osy4XtMK/img/address-1-2.svg",
  resume = "https://c.animaapp.com/osy4XtMK/img/resume-1-2.svg",
  upload = "https://c.animaapp.com/osy4XtMK/img/upload-1-2@2x.png",
}) => {
  return (
    <div className={`profile-card ${className}`}>
      <div className="text-wrapper">Your Profile</div>
      <div className="frame">
        <img className={`image ${imageClassName}`} alt="Image" src={image} />
        <div className={`div ${profileClassName}`}>
          <div className="text-wrapper-2">your name</div>
          <div className="email">
            <img className="img" alt="Mail" src={mail} />
            <div className="text-wrapper-3">Email:</div>
            <div className="text-wrapper-3">youremail@gmail.com</div>
          </div>
          <div className="div-2">
            <img className="img" alt="Phone" src={phone} />
            <div className="text-wrapper-3">Phone</div>
            <div className="text-wrapper-3">+20 000000000</div>
          </div>
          <div className="div-2">
            <img className="address" alt="Address" src={address} />
            <div className="text-wrapper-3">Address:</div>
            <div className="text-wrapper-3">your address</div>
          </div>
          <div className="resume">
            <img className="img" alt="Resume" src={resume} />
            <div className="text-wrapper-3">Upload your resume</div>
            <img className="upload" alt="Upload" src={upload} />
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.string,
  mail: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
  resume: PropTypes.string,
  upload: PropTypes.string,
};
