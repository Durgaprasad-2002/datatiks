import React, { useState, useEffect } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import PopUpModal from "./PopUpModal";
import { navbarServices } from "../assets/data/homeData";

import { IoIosCall, IoMdMail } from "react-icons/io";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

function Navbar() {
  // state hooks
  const [showSide, setShowside] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [nestedMenu, setNestedMenu] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // handles state for Enroll modal
  const [showModal, setModal] = useState(false);

  //handles Toggles
  const handleToggle = () => setToggle((prev) => !prev);

  //handles sub-categories for mobile view
  const openNestedMenu = (menu) => {
    if (toggle) setNestedMenu(menu);
  };

  //handles closing of sub-categories for mobile view
  const closeNestedMenu = () => {
    setNestedMenu(null);
    setActiveSubcategory(null);
  };

  // handles the navbar transform and the overflow for body when modal appears
  useEffect(() => {
    // add class when the modal opnes, to the body
    if (toggle) document.body.classList.add("remove-over");
    else document.body.classList.remove("remove-over");

    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toggle]);

  return (
    <>
      <div className="nav-top">
        <div className="nav-top-desc-cont">
          {" "}
          <span className="nav-top-icon">
            <IoIosCall />
          </span>
          +91 9701000415{"    "}
          {"   "}
          <span className="nav-top-icon">
            <IoMdMail />
          </span>
          datatikscompany@gmail.com
        </div>
        <div className="nav-top-icons-container">
          <FaFacebookF className="fl-icon facebook" />
          <FaInstagram className="fl-icon instagram" />
          <FaTwitter className="fl-icon twitter" />
        </div>
      </div>
      <nav className={`navbar-1 ${isScrolled ? "scrolled" : ""}`}>
        <div className="brand">
          <Link to="/">
            <img
              className="brand-img"
              src="https://www.datatiks.com/uploads/e8d1a40cfe85879a6006a0ac852007c0.png"
              alt="brand-logo"
            />
          </Link>
        </div>

        <div
          className={`nav-links-container ${
            toggle ? "show-links" : "hide-links"
          }`}
        >
          <ul className="lists">
            <Link to="/">
              <li className="nav-link">Home</li>
            </Link>
            <li
              className="nav-link services"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              onClick={() => openNestedMenu("services")}
            >
              Services
              {showDropdown && (
                <ul className="dropdown ">
                  {navbarServices.map((service) => (
                    <li key={service.name} className="dropdown-item">
                      <Link to="#" className="item-link">
                        {service.name}
                      </Link>
                      <ul className="dropdown-submenu">
                        {service.subcategories.map((subService) => (
                          <li key={subService.name} className="submenu-item">
                            <Link to={subService.link} className="item-link">
                              {subService.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <Link to="/faculty">
              <li className="nav-link">Faculty</li>
            </Link>
            <Link to="/corporate/partner">
              <li className="nav-link">Corporate Partner</li>
            </Link>
            <Link to="/contact">
              <li className="nav-link">Contact Us</li>
            </Link>
            <br />
            <button
              className="enroll-btn enroll-btn-2"
              onClick={() => setModal(() => true)}
            >
              Enroll Now
            </button>
          </ul>
        </div>

        {/* Mobile Nested Menu for Services */}
        {nestedMenu === "services" && (
          <div className="nested-menu">
            <button className="back-button" onClick={closeNestedMenu}>
              ← Back
            </button>
            <ul className="nested-lists">
              {navbarServices.map((service) => (
                <li key={service.name} className="nested-item">
                  <span
                    onClick={() =>
                      setActiveSubcategory(
                        activeSubcategory === service.name ? null : service.name
                      )
                    }
                  >
                    {service.name}
                  </span>
                  {/* Display subcategories separately */}
                  {activeSubcategory === service.name && (
                    <div className="nested-submenu">
                      {service.subcategories.map((subService) => (
                        <li key={subService.name} className="inner-list">
                          <Link to={subService.link}>
                            {"" + subService.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Toggle Button for mobile view */}
        <div
          className={`toggle-container ${toggle ? "closeToggle" : ""}`}
          onClick={handleToggle}
        >
          <div className="toggle-bar"></div>
          <div className="toggle-bar"></div>
          <div className="toggle-bar"></div>
        </div>
      </nav>
      {/* Modal for enroll */}
      <PopUpModal showModal={showModal} setModal={setModal} />
      <div className="side-body">
        <button
          className="side-ele-btn"
          onClick={() => setShowside((prev) => !prev)}
        >
          {" "}
          {showSide ? (
            <MdOutlineClose className="close-icon-side" />
          ) : (
            <FaChevronRight />
          )}
        </button>
        <div
          className={`side-postioner ${
            showSide ? "show-side-bar" : "hide-side-bar"
          }`}
        >
          <li className="list-item">WHATSAPP</li>
          <li className="list-item">CALL</li>
          <li className="list-item">ENQUIRY</li>
        </div>
      </div>
    </>
  );
}

export default React.memo(Navbar);
