import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Copyright } from "../../components/Copyright";
import { Education } from "../../components/Education";
import { Navbar } from "../../components/Navbar";
import { NavbarWrapper } from "../../components/NavbarWrapper";
import { PersonalInfo } from "../../components/PersonalInfo";
import { ProfileCard } from "../../components/ProfileCard";
import { Training } from "../../components/Training";
import { WorkExperience } from "../../components/WorkExperience";
import "./style.css";

export const Profile = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="profile"
      style={{
        minWidth: screenWidth < 1440 ? "850px" : screenWidth >= 1440 ? "1440px" : undefined,
      }}
    >
      {screenWidth < 1440 && (
        <>
          <Navbar className="navbar-instance" navbtnClassName="navbar-850" />
          <ProfileCard
            address="https://c.animaapp.com/osy4XtMK/img/address-1-1.svg"
            className="instance-node"
            image="https://c.animaapp.com/osy4XtMK/img/image-4-1.png"
            imageClassName="profile-card-instance"
            mail="https://c.animaapp.com/osy4XtMK/img/mail-1-1.svg"
            phone="https://c.animaapp.com/osy4XtMK/img/phone-1-1.svg"
            profileClassName="profile-card-2"
            resume="https://c.animaapp.com/osy4XtMK/img/resume-1-1.svg"
            upload="https://c.animaapp.com/osy4XtMK/img/upload-1-1@2x.png"
          />
          <PersonalInfo className="instance-node" personalInformationClassName="instance-node-2" />
          <Education className="instance-node" collegeUniversityClassName="instance-node-2" />
          <Training className="instance-node" frameClassName="instance-node-2" />
          <WorkExperience className="instance-node" frameClassName="instance-node-2" />
        </>
      )}

      {screenWidth >= 1440 && (
        <>
          <NavbarWrapper className="navbar-instance" navButtonsClassName="navbar-1440" />
          <ProfileCard
            address="https://c.animaapp.com/osy4XtMK/img/address-1-2.svg"
            className="instance-node"
            image="https://c.animaapp.com/osy4XtMK/img/image-4-2.png"
            mail="https://c.animaapp.com/osy4XtMK/img/mail-1-2.svg"
            phone="https://c.animaapp.com/osy4XtMK/img/phone-1-2.svg"
            resume="https://c.animaapp.com/osy4XtMK/img/resume-1-2.svg"
            upload="https://c.animaapp.com/osy4XtMK/img/upload-1-2@2x.png"
          />
          <PersonalInfo className="instance-node" />
          <Education className="instance-node" />
          <Training className="instance-node" />
          <WorkExperience className="instance-node" />
        </>
      )}

      <Copyright />
    </div>
  );
};
