import React, { useState, useRef, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InputField from "./components/InputField";
import HeaderSectionBackground from "./components/HeaderSectionBackground";

import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import axios from "axios";

import { useInView } from "react-intersection-observer";
import "animate.css";

import "./styles.css";

function Contact() {
  // scrolls to top of page
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  // state hooks
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.4 });
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobileNo: "",
    email: "",
    subject: "",
    message: "",
  });

  // handles the input value change
  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // handle the form submission
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(() => true);
    axios
      .post("http://localhost:5000/api/contact", { ...formData })
      .then((data) => {
        const { message } = data?.data;
        toast.success(message);
        form.current.reset();
      })
      .catch((err) => {
        console.log(err);
        const message = err?.response?.data?.message || "Failed to Reach Team";
        toast.error(`${message}, Try again!`);
      })
      .finally(() => setLoading(() => false));
  }

  return (
    <>
      <Navbar />
      {/* Header Section */}
      <HeaderSectionBackground
        name={"contact"}
        title1={"Contact"}
        title2={"Us"}
        desc={
          " We'd love to hear from you! Whether you have a question, feedback, or need assistance, we're here to help."
        }
      />
      <section
        ref={ref2}
        className={`contact-conatiner content-section ${
          inView2 ? "animate__animated animate__zoomIn" : ""
        }`}
      >
        <div className="faculty-form-container-sec1">
          <h1>
            Contact <span className="col-red"> Us</span>{" "}
          </h1>
          {/* Form for Contact */}
          <form onSubmit={handleSubmit} ref={form}>
            <div className="input-container">
              <InputField
                name="name"
                required={true}
                type={"text"}
                placeholder={"Name"}
                handleChange={handleChange}
              />
            </div>
            <div className="input-container">
              <InputField
                name="mobileNo"
                required={true}
                type={"tel"}
                placeholder={"Mobile Number"}
                handleChange={handleChange}
              />
            </div>
            <div className="input-container">
              <InputField
                name="email"
                required={true}
                type={"email"}
                placeholder={"Email"}
                handleChange={handleChange}
              />
            </div>
            <div className="input-container">
              <InputField
                name="subject"
                required={true}
                type={"text"}
                placeholder={"Subject"}
                handleChange={handleChange}
              />
            </div>

            <div className="input-container">
              <textarea
                name="message"
                onChange={handleChange}
                className="text-area"
                placeholder="Comment"
                rows="4"
              />
            </div>
            <button className="submit-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Contact Details of Company */}
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

          {/* Iframe for the Maps */}
          <div className="contact-info-container-sec">
            <iframe
              className="maps-iframe"
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7612.838144096683!2d78.445993!3d17.439645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb917cafabf2ad%3A0xa1937b15c86740ef!2sDatatiks%20Software%20Training%20Institute!5e0!3m2!1sen!2sin!4v1732359175646!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default React.memo(Contact);
