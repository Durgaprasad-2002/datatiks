import React from "react";

import "./styles.css";
import Navbar from "./components/Navbar";
import InputField from "./components/InputField";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function Faculty() {
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
        className="faculty-header"
        style={{ backgroundPositionY: `${-posY}px` }}
      >
        <div className="faculty-header-inner">
          <h1>
            Become an <span className="col-red">Instructor</span>{" "}
          </h1>
          <p>
            Your passion for sharing knowledge you have acquired with the young
            next-generation IT Professionals is appreciated.
          </p>
          <button className="connect-btn">Connect with us</button>
        </div>
      </section>
      <section className="faculty-form-container">
        <div className="faculty-form-container-sec1">
          <h1>
            Interested in <span className="col-red"> working</span>{" "}
          </h1>
          <form>
            <div className="input-container">
              <InputField
                type={"text"}
                placeholder={"Full Name*"}
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
                placeholder={"Enter Email"}
                val={""}
                handleChange={handleChange}
              />
            </div>
            <div className="input-container">
              <InputField
                type={"url"}
                placeholder={"Your Linkedin profile url"}
                val={""}
                handleChange={handleChange}
              />
            </div>

            <div className="input-container">
              <textarea className="text-area" placeholder="Message" rows={10} />
            </div>
            <div className="">
              <label for="file-upload" class="custom-file-upload">
                Click Here to
                <br /> Upload your resume
              </label>
              <input id="file-upload" type="file" />
            </div>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="faculty-form-container-sec2">
          <img
            className="faculty-form-img"
            alt="faculty-img"
            src="https://i.pinimg.com/originals/30/f3/15/30f315e3a6242cef3d9c60833173adc4.gif"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
