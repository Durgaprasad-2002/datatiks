import React from "react";

// icons
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

//data for the footer
import {
  footerCourseCategory,
  footerTrendingCourse,
  interviewQuestionsArray,
  tutorialsArray,
} from "../assets/data/homeData";

import "../styles.css";

function Footer() {
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
            <Link to="/services" style={{ textDecoration: "none" }}>
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
            <Link
              to="/category/frontend_development"
              style={{ textDecoration: "none" }}
            >
              <li> Frontend Development</li>
            </Link>
            <Link
              to="/category/backend_development"
              style={{ textDecoration: "none" }}
            >
              <li>Backend Development</li>
            </Link>
            <Link
              to="/category/cloud_computing_and_platforms"
              style={{ textDecoration: "none" }}
            >
              <li>Cloud Computing & Platforms</li>
            </Link>

            <Link
              to="/category/devops_and_infrastructure"
              style={{ textDecoration: "none" }}
            >
              <li>DevOps & Infrastructure</li>
            </Link>
            <Link
              to="/category/salesforce_development_and_administration"
              style={{ textDecoration: "none" }}
            >
              <li> Salesforce Development & Administration</li>
            </Link>
            <Link
              to="/category/data_science_and_analytics"
              style={{ textDecoration: "none" }}
            >
              <li>Data Science & Analytics</li>
            </Link>
            <Link
              to="/category/cybersecurity_and_ethical_hacking"
              style={{ textDecoration: "none" }}
            >
              <li>Cybersecurity & Ethical Hacking</li>
            </Link>
            <Link
              to="/category/digital_transformation_and_management"
              style={{ textDecoration: "none" }}
            >
              <li>Digital Transformation & Management</li>
            </Link>
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

export default React.memo(Footer);
