import React from "react";

import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <section className="footer-courses">
        <div className="footer-courses_sec_1">
          <h3>Trending Courses</h3>
          <p>
            D Jango | Data Science | Different Python Libraries | Salesforce
            Development | Salesforce Lightening | Salesforce Administration |
            Salesforce CPQ | cloud Environments | AWS | Azure | GCP | Devops |
            CHFI | CND | CEH | Angular | React | Node Js | Mongo DB | Express Js
            | Vue Js | MongoDB |
          </p>
        </div>
        <div className="footer-courses_sec_1">
          <h3>Course Categories</h3>
          <p>
            EDM | Digital Transformation | Analytics | Cloud and Platform
            Management | Coding & App Development | Digital Marketing |
          </p>
        </div>
        <hr />
        <div className="footer-courses_sec_1">
          <h3>Interview Questions</h3>
          <p>
            Python Interview Questions | Data Science Interview Questions | D
            Jango Interview Questions | Power BI Interview Questions | Tableau
            Interview Questions | Snowflake Interview Questions | Salesforce
            Interview Questions | Cyber Security Interview Questions | Angular
            Interview Questions | React JS Interview Questions | Vue JS
            Interview Questions | Full Stack Interview Questions | MEAN Stack
            Interview Questions | MERN Stack Interview Questions | Cloud
            Computing Interview Questions | AWS Interview Questions | Azure
            Interview Questions | GCP Interview Questions | Devops Interview
            Questions | Digital Marketing Interview Questions
          </p>
        </div>
        <div className="footer-courses_sec_1">
          <h3>Tutorials</h3>
          <p>
            Python Tutorial | Data Science Tutorial | D Jango Tutorial | Power
            BI Tutorial | Tableau Tutorial | Snowflake Tutorial | Salesforce
            Tutorial | Cyber Security Tutorial | Angular Tutorial | React Js
            Tutorial | Vue JS Tutorial | Full Stack Tutorial | MEAN Stack
            Tutorial | MERN Stack Tutorial | Cloud Computing Tutorial | AWS
            Tutorial | Azure Tutorial | GCP Tutorial | Devops Tutorial | Digital
            Marketing Tutorial
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
            <li>Services</li>
            <li> Faculty</li>
            <li>ServicesCorporate Patner</li>
            <li>Contact Us</li>
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
            <h1>Follow Us</h1>
            <div>
              <FaFacebookF className="fl-icon" />
              <FaInstagram className="fl-icon" />
              <FaTwitter className="fl-icon" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
