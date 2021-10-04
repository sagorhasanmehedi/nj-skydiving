import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

// navbar

const Header = () => {
  return (
    <div className="nav-bar">
      <div>
        <NavLink className="nav-text" to="/home">
          Home
        </NavLink>
        <NavLink className="nav-text" to="/about">
          About
        </NavLink>
        <NavLink className="nav-text" to="/course">
          Course
        </NavLink>
        <NavLink className="nav-text" to="/chart">
          Chart
        </NavLink>
      </div>
      <div className="nav-logo">
        <h3>
          NJ<span>SKYDIVING</span>SCHOOL
        </h3>
      </div>
    </div>
  );
};

export default Header;
