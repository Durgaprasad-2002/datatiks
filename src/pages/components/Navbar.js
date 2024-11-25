import React, { useState } from "react";
import "../styles.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  return (
    <nav className="navbar">
      <div className="brand">
        <img
          className="brand-img"
          src="https://www.datatiks.com/uploads/e8d1a40cfe85879a6006a0ac852007c0.png"
          alt="brand-logo"
        />
      </div>
      <div
        className={`nav-links-container ${
          toggle ? "show-links" : "hide-links"
        }`}
      >
        <ul className="lists">
          <Link to="/">
            {" "}
            <li className="nav-link">Home</li>
          </Link>
          <Link to="/">
            {" "}
            <li className="nav-link">Services</li>
          </Link>
          <Link to="/faculty">
            {" "}
            <li className="nav-link">Faculty</li>
          </Link>
          <Link to="/corporate/partner">
            {" "}
            <li className="nav-link">Corporate Partner</li>
          </Link>
          <Link to="/contact">
            {" "}
            <li className="nav-link">Contact Us</li>
          </Link>
        </ul>
      </div>

      <div
        className={`toggle-container ${toggle ? "closeToggle" : ""}`}
        onClick={handleToggle}
      >
        <div className="toggle-bar"></div>
        <div className="toggle-bar"></div>
        <div className="toggle-bar"></div>
      </div>
    </nav>
  );
}
