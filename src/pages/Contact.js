import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

import InputField from "./components/InputField";

import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

export default function Contact() {
  const [posY, setposY] = useState(0);

  useEffect(() => {
    function Handle() {
      setposY(() => document.documentElement.scrollTop / 3);
    }
    // eslint-disable-next-line no-restricted-globals
    addEventListener("scroll", Handle);

    return () => {
      // eslint-disable-next-line no-restricted-globals
      removeEventListener("scroll", Handle);
    };
  }, []);

  function handleChange(params) {}
  return (
    <>
      <Navbar />
      <section
        className="contact-header"
        style={{ backgroundPositionY: `${-posY}px` }}
      >
        <div className="faculty-header-inner">
          <h1>
            Contact <span className="col-red">Us</span>{" "}
          </h1>
          <p>
            We'd love to hear from you! Whether you have a question, feedback,
            or need assistance, we're here to help.
          </p>
          {/* <button className="connect-btn">Connect with us</button> */}
        </div>
      </section>
      <section className="contact-conatiner">
        {/* <div className="contact-form-container"> */}
        <div className="faculty-form-container-sec1">
          <h1>
            Contact <span className="col-red"> Us</span>{" "}
          </h1>
          <form>
            <div className="input-container">
              <InputField
                type={"text"}
                placeholder={"Name"}
                val={""}
                handleChange={handleChange}
              />
            </div>
            <div className="input-container">
              <InputField
                type={"tel"}
                placeholder={"Mobile Number"}
                val={""}
                handleChange={handleChange}
              />
            </div>
            <div className="input-container">
              <InputField
                type={"email"}
                placeholder={"Email"}
                val={""}
                handleChange={handleChange}
              />
            </div>
            <div className="input-container">
              <InputField
                type={"text"}
                placeholder={"Subject"}
                val={""}
                handleChange={handleChange}
              />
            </div>

            <div className="input-container">
              <textarea className="text-area" placeholder="Comment" rows={10} />
            </div>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
        {/* </div> */}
        <div className="contact-info-container">
          <div className="contact-info-container-inner">
            <div className="contact-info-container-sec">
              <div>
                <h2>Contact Details</h2>
              </div>
              <div className="contact-info-container-sec-contact-det">
                <IoCallOutline className="contact-icon" />
                <span>+91 9701000415</span>{" "}
              </div>
              <div className="contact-info-container-sec-contact-det">
                <FaWhatsapp className="contact-icon" />
                <span>+91 9701000415</span>{" "}
              </div>
              <div className="contact-info-container-sec-contact-det">
                <IoMailOutline className="contact-icon" />
                <span>datatikscompany@gmail.com</span>{" "}
              </div>
            </div>
            <div className="contact-info-container-sec">
              <div className="address-contact">
                <h2>Office Address</h2>
                <p>
                  Sai Krupa Villa, 7-1-714, Plot :42, East Srinivas Nagar
                  Colony, Srinivasa Nagar, Sanjeeva Reddy Nagar, Hyderabad,
                  Telangana 500038
                </p>
              </div>
            </div>
          </div>

          <div className="contact-info-container-sec">
            <iframe
              className="maps-iframe"
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7612.838144096683!2d78.445993!3d17.439645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb917cafabf2ad%3A0xa1937b15c86740ef!2sDatatiks%20Software%20Training%20Institute!5e0!3m2!1sen!2sin!4v1732359175646!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
