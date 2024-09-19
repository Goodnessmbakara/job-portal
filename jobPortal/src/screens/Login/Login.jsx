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
        gap: screenWidth < 1200 ? "31px" : screenWidth >= 1200 ? "26px" : undefined,
        minHeight: screenWidth >= 1200 ? "100vh" : undefined,
        minWidth: screenWidth < 1200 ? "850px" : screenWidth >= 1200 ? "1200px" : undefined,
        padding: screenWidth < 1200 ? "5px" : screenWidth >= 1200 ? "5px 5px 20px" : undefined,
      }}
    >
      {screenWidth < 1200 && (
        <>
          <Navbar
            className="navbar-instance"
            navbtnClassName="navbar-850" />
          <img
            className="image"
            alt="Image"
            src="https://c.animaapp.com/Cmzf1Ne1/img/image-1.png"
          />
          <Loginas
            className="class"
          />
          <Copyright
            className="class-3"
          />
        </>
      )}

      {screenWidth >= 1200 && (
        <>
          <NavbarWrapper
            className="navbar-instance"
            navButtonsClassName="navbar-1200" />
          <div className="contain">
            <img
              className="image"
              alt="Image"
              src="https://c.animaapp.com/Cmzf1Ne1/img/image-1.png"
            />
            <Loginas
              className="class-2"
            />
          </div>
          <Copyright
            className="class-4"
          />
        </>
      )}
    </div>
  );
};
