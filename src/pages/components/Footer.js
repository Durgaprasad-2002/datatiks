import React from "react";

import "../styles.css";

import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  footerCourseCategory,
  footerTrendingCourse,
  interviewQuestionsArray,
  tutorialsArray,
} from "../assets/data/homeData";

export default function Footer() {
  return (
    <>
      <section className="footer-courses">
        <div className="footer-courses_sec_1">
          <h3>Trending Courses</h3>
          <p>
            {footerTrendingCourse.map((data, ind) => (
              <>
                <Link to={data.link} className="footer-link-items">
                  <span>{data.name}</span>
                </Link>
                |{" "}
              </>
            ))}
          </p>
        </div>
        <div className="footer-courses_sec_1">
          <h3>Course Categories</h3>
          <p>
            {footerCourseCategory.map((data, ind) => (
              <>
                <Link to={data.link} className="footer-link-items">
                  <span>{data.name}</span>
                </Link>
                |{" "}
              </>
            ))}
          </p>
        </div>
        <hr />
        <div className="footer-courses_sec_1">
          <h3>Interview Questions</h3>
          <p>
            {interviewQuestionsArray.map((data, ind) => (
              <>
                <Link
                  to={data.link}
                  className="footer-link-items"
                  target="_blank"
                >
                  <span>{data.name}</span>
                </Link>
                |{" "}
              </>
            ))}
          </p>
        </div>
        <div className="footer-courses_sec_1">
          <h3>Tutorials</h3>
          <p>
            {tutorialsArray.map((data, ind) => (
              <>
                <Link
                  to={data.link}
                  className="footer-link-items"
                  target="_blank"
                >
                  <span>{data.name}</span>
                </Link>
                |{" "}
              </>
            ))}
          </p>
        </div>
      </section>
      <section className="footer-contact">
        <div className="footer-card">
          <h1>Get In Touch</h1>
          <div className="footer-info-contact">
            <span className="icon-contact">
              <CiLocationOn />
            </span>{" "}
            <p>
              Sai Krupa Villa, 7-1-714, Plot :42, East Srinivas Nagar Colony,
              Srinivasa Nagar, Sanjeeva Reddy Nagar, Hyderabad, Telangana 500038
            </p>
          </div>
          <div className="footer-info-contact">
            {" "}
            <span className="icon-contact">
              <IoCallOutline />
            </span>
            <p> +91 9701000415</p>
          </div>
          <div className="footer-info-contact">
            {" "}
            <span className="icon-contact">
              <CiMail />
            </span>
            <p> datatikscompany@gmail.com</p>
          </div>
        </div>
        <div className="footer-card">
          <h1>Our Links</h1>
          <ul>
            <Link to="/services/react" style={{ textDecoration: "none" }}>
              <li>Services</li>
            </Link>
            <Link to="/faculty" style={{ textDecoration: "none" }}>
              <li> Faculty</li>
            </Link>
            <Link to="/corporate/partner" style={{ textDecoration: "none" }}>
              <li>Corporate Patner</li>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="footer-card">
          <h1>Our Services</h1>
          <ul>
            <li>EDM</li>
            <li> Digital Transformation</li>
            <li>Analytics</li>
            <li>Cloud and Platform Management</li>
            <li>Coding & App Development</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
        <div className="footer-card">
          <h1>Newsletter</h1>
          <p>
            Subscribe to our newsletter to receive the latest updates and offers
          </p>
          <div>
            <h1 style={{ marginBottom: "15px" }}>Follow Us</h1>
            <div>
              <FaFacebookF className="fl-icon facebook" />
              <FaInstagram className="fl-icon instagram" />
              <FaTwitter className="fl-icon twitter" />
            </div>
          </div>
        </div>
      </section>
      <section className="footer-contact">
        <p className="copy-rights">© 2024 Dataticks. All rights reserved.</p>
      </section>
    </>
  );
}
