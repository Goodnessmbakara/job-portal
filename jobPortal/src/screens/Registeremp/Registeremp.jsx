import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Copyright } from "../../components/Copyright";
import { Frame } from "../../components/Frame";
import { Navbar } from "../../components/Navbar";
import { NavbarWrapper } from "../../components/NavbarWrapper";
import "./style.css";

export const Registeremp = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="registeremp"
      style={{
        gap: screenWidth < 1440 ? "40px" : screenWidth >= 1440 ? "84px" : undefined,
        height: screenWidth >= 1440 ? "1197px" : undefined,
        minWidth: screenWidth < 1440 ? "850px" : screenWidth >= 1440 ? "1440px" : undefined,
      }}
    >
      {screenWidth < 1440 && <Navbar className="navbar-instance" navbtnClassName="navbar-850" />}

      {screenWidth >= 1440 && <NavbarWrapper className="navbar-instance" navButtonsClassName="navbar-1440" />}

      <img
        className="image"
        alt="Image"
        src={
          screenWidth < 1440
            ? "https://c.animaapp.com/QtGmRn4J/img/image.png"
            : screenWidth >= 1440
            ? "https://c.animaapp.com/QtGmRn4J/img/image-1.png"
            : undefined
        }
      />
      <Frame className={`${screenWidth < 1440 && "class"} ${screenWidth >= 1440 && "class-2"}`} />
      <Copyright className={`${screenWidth < 1440 && "class-3"} ${screenWidth >= 1440 && "class-4"}`} />
    </div>
  );
};
