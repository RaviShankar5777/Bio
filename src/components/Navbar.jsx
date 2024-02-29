import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/bio-logo.jpg";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="" />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i
          className={click ? "fa-solid fa-circle-xmark" : "fa-solid fa-bars"}
        />
      </div>
      <ul className={click ? "nav-menu-active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
            Services <i className="fa-solid fa-caret-down" />
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact-us"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/gallery" className="nav-links" onClick={closeMobileMenu}>
            Gallery
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
