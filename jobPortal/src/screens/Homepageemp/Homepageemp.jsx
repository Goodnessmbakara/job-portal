import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Copyright } from "../../components/Copyright";
import { EmployerWel } from "../../components/EmployerWel";
import { Navbar } from "../../components/Navbar";
import { NavbarWrapper } from "../../components/NavbarWrapper";
import "./style.css";

export const Homepageemp = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="homepageemp"
      style={{
        minWidth: screenWidth < 1440 ? "850px" : screenWidth >= 1440 ? "1440px" : undefined,
      }}
    >
      {screenWidth < 1440 && (
        <>
          <Navbar className="navbar-instance" navbtnClassName="navbar-850" />
          <EmployerWel
            className="employer-wel-instance"
            image="https://c.animaapp.com/FJTzofRG/img/image-1.png"
            imageClassName="instance-node"
          />
        </>
      )}

      {screenWidth >= 1440 && (
        <>
          <NavbarWrapper className="navbar-instance" navButtonsClassName="navbar-1440" />
          <EmployerWel className="employer-wel-2" image="https://c.animaapp.com/FJTzofRG/img/image-2.png" />
        </>
      )}

      <Copyright className="copyright-2024-jobportal" />
    </div>
  );
};
