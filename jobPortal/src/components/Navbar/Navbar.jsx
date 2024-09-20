import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const Navbar = ({ className, navbtnClassName }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null); // Ref to the dropdown container
  const buttonRef = useRef(null); // Ref to the nav button

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`navbar ${className}`}>
      <img
        className="logo-trans"
        alt="Logo trans"
        src="https://c.animaapp.com/FJTzofRG/img/logo-trans-1-3@2x.png"
      />
      <img
        ref={buttonRef} // Attach the ref to the nav button
        className={`navbtn ${navbtnClassName}`}
        alt="Navbtn"
        src="https://c.animaapp.com/FJTzofRG/img/navbtn-1-1@2x.png"
        onClick={toggleDropdown}
      />

      {isDropdownVisible && (
        <div ref={dropdownRef} className="dropdown-menu">
          <Link to="/Login"><button className="dropdown-item">Login</button></Link>
          <Link to="/"><button className="dropdown-item">Home</button></Link>
          <Link to="/Register"><button className="dropdown-item">Register</button></Link>
          <button className="dropdown-item">Contact</button>
          <button className="dropdown-item">Profile</button>
          <button className="dropdown-item">Job Categories</button>
        </div>
      )}
    </div>
  );
};
