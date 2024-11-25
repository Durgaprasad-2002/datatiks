import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles.css";

import { useState, useEffect } from "react";

import InputField from "./components/InputField";
export default function CorporatePartner() {
  function handleChange(params) {}
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
  return (
    <>
      <Navbar />
      <section
        className="corporate-header"
        style={{ backgroundPositionY: `${-posY}px` }}
      >
        <div className="faculty-header-inner">
          <h1>
            Partner With Us <span className="col-red">Contact Form</span>{" "}
          </h1>
          <p>
            Thank you for your interest in working with DATATIKS. Please
            complete the form below to tell us more about you and your company.
          </p>
          {/* <Link to="#contact">
            <button className="connect-btn">Partner with us</button>
          </Link> */}
        </div>
      </section>
      <section className="corporate-form-container">
        <form className="form-corporate">
          <div className="faculty-form-container-sec1">
            <h1>Personal Information</h1>
            <>
              <div className="input-container">
                <InputField
                  type={"text"}
                  placeholder={"Full Name"}
                  val={""}
                  handleChange={handleChange}
                />
              </div>
              <div className="input-container">
                <InputField
                  type={"text"}
                  placeholder={"Title"}
                  val={""}
                  handleChange={handleChange}
                />
              </div>
              <div className="input-container">
                <InputField
                  type={"email"}
                  placeholder={"Business Email "}
                  val={""}
                  handleChange={handleChange}
                />
              </div>
              <div className="input-container">
                <InputField
                  type={"tel"}
                  placeholder={"Business Phone"}
                  val={""}
                  handleChange={handleChange}
                />
              </div>
            </>
          </div>
          <div className="faculty-form-container-sec1">
            <h1>Company Information</h1>
            <>
              <div className="input-container">
                <InputField
                  type={"text"}
                  placeholder={"Company"}
                  val={""}
                  handleChange={handleChange}
                />
              </div>
              <div className="input-container">
                <InputField
                  type={"text"}
                  placeholder={"Address"}
                  val={""}
                  handleChange={handleChange}
                />
              </div>
              <div className="input-container">
                <InputField
                  type={"text"}
                  placeholder={"City"}
                  val={""}
                  handleChange={handleChange}
                />
              </div>
              <div className="input-container">
                <InputField
                  type={"text"}
                  placeholder={"State"}
                  val={""}
                  handleChange={handleChange}
                />
              </div>
              <div className="input-container">
                <InputField
                  type={"tel"}
                  placeholder={"Zip Code"}
                  val={""}
                  handleChange={handleChange}
                />
              </div>
              <div className="input-container">
                <InputField
                  type={"text"}
                  placeholder={"Province"}
                  val={""}
                  handleChange={handleChange}
                />
              </div>
              <div className="input-container">
                <InputField
                  type={"text"}
                  placeholder={"Country"}
                  val={""}
                  handleChange={handleChange}
                />
              </div>
            </>
          </div>
          <div className="faculty-form-container-sec1">
            <h1>Additional Information</h1>
            <>
              <div className="input-container">
                <textarea
                  className="text-area"
                  placeholder="Questions/Comments"
                  rows={10}
                />
              </div>
            </>
          </div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}
