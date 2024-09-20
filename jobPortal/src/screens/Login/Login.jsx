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
        gap: screenWidth < 1200 ? "20px" : "20px", // Consistent gap
        padding: screenWidth < 1200 ? "5px" : "5px 5px 20px", // Responsive padding
      }}
    >
      {screenWidth < 1200 ? (
        <>
          <Navbar className="navbar-instance" navbtnClassName="navbar-850" />
          <img
            className="image"
            alt="Image"
            src="https://c.animaapp.com/Cmzf1Ne1/img/image-1.png"
          />
          <Loginas className="class" />
          <Copyright className="class-3" />
        </>
      ) : (
        <>
          <NavbarWrapper className="navbar-instance" navButtonsClassName="navbar-1200" />
          <div className="contain">
            <img
              className="image"
              alt="Image"
              src="https://c.animaapp.com/Cmzf1Ne1/img/image-1.png"
            />
            <Loginas className="class-2" />
          </div>
          <Copyright className="class-4" />
        </>
      )}
    </div>
  );
};
