import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Copyright } from "../../components/Copyright";
import { Navbar } from "../../components/Navbar";
import { NavbarWrapper } from "../../components/NavbarWrapper";
import { Registration } from "../../components/Registration";
import "./style.css";

export const Registerjs = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="registerjs"
      style={{
        height: screenWidth >= 1440 ? "1197px" : undefined,
        minWidth: screenWidth < 1440 ? "850px" : screenWidth >= 1440 ? "1440px" : undefined,
      }}
    >
      {screenWidth < 1440 && (
        <>
          <Navbar className="navbar-instance" navbtnClassName="navbar-850" />
          <img className="image" alt="Image" src="https://c.animaapp.com/TFnT2tyl/img/image.png" />
        </>
      )}

      {screenWidth >= 1440 && (
        <>
          <NavbarWrapper className="navbar-instance" navButtonsClassName="navbar-1440" />
          <img className="image-2" alt="Image" src="https://c.animaapp.com/TFnT2tyl/img/image-1.png" />
        </>
      )}

      <Registration className={`${screenWidth < 1440 && "class"} ${screenWidth >= 1440 && "class-2"}`} />
      <Copyright className={`${screenWidth < 1440 && "class-3"} ${screenWidth >= 1440 && "class-4"}`} />
    </div>
  );
};
