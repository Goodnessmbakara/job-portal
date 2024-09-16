import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Copyright } from "../../components/Copyright";
import { Loginas } from "../../components/Loginas";
import { Navbar } from "../../components/Navbar";
import { NavbarWrapper } from "../../components/NavbarWrapper";
import "./style.css";

export const Login = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="login"
      style={{
        gap: screenWidth < 1440 ? "31px" : screenWidth >= 1440 ? "26px" : undefined,
        minHeight: screenWidth >= 1440 ? "100vh" : undefined,
        minWidth: screenWidth < 1440 ? "850px" : screenWidth >= 1440 ? "1440px" : undefined,
        padding: screenWidth < 1440 ? "5px" : screenWidth >= 1440 ? "5px 5px 20px" : undefined,
      }}
    >
      {screenWidth < 1440 && <Navbar className="navbar-instance" navbtnClassName="navbar-850" />}

      {screenWidth >= 1440 && <NavbarWrapper className="navbar-instance" navButtonsClassName="navbar-1440" />}

      <img
        className="image"
        alt="Image"
        src={
          screenWidth < 1440
            ? "https://c.animaapp.com/Cmzf1Ne1/img/image.png"
            : screenWidth >= 1440
            ? "https://c.animaapp.com/Cmzf1Ne1/img/image-1.png"
            : undefined
        }
      />
      <Loginas className={`${screenWidth < 1440 && "class"} ${screenWidth >= 1440 && "class-2"}`} />
      <Copyright className={`${screenWidth < 1440 && "class-3"} ${screenWidth >= 1440 && "class-4"}`} />
    </div>
  );
};
