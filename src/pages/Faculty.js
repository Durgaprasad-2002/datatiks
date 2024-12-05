import React, { useState, useRef, useEffect } from "react";

import Navbar from "./components/Navbar";
import InputField from "./components/InputField";
import Footer from "./components/Footer";
import HeaderSectionBackground from "./components/HeaderSectionBackground";

import { useInView } from "react-intersection-observer";
import "animate.css";

import axios from "axios";
import { toast } from "react-toastify";
import "./styles.css";

function Faculty() {
  //scrolling to top of page
  useEffect(() => {
    document.title = `DataTiks | Faculty`;
    document.documentElement.scrollTop = 0;
  }, []);

  // state hooks
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.4 });
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    mobileNo: "",
    email: "",
    linkedIn: "",
    message: "",
  });

  // handles the input value change
  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // handle the form submission
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("mobileNo", formData.mobileNo);
    data.append("linkedIn", formData.linkedIn);
    data.append("message", formData.message);

    setLoading(() => true);
    axios
      .post("http://localhost:5000/api/faculty", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((data) => {
        const { message } = data?.data;
        toast.success(message);
        form.current.reset();
        setFile(null);
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
        name={"faculty"}
        title1={"Become an "}
        title2={"Instructor"}
        desc={
          " Your passion for sharing knowledge you have acquired with the young next-generation IT Professionals is appreciated."
        }
      />

      {/* body section */}
      <section
        ref={ref2}
        className={`faculty-form-container content-section ${
          inView2 ? "animate__animated animate__fadeInUp" : ""
        }`}
      >
        <div className="faculty-form-container-sec1">
          <h1>
            Interested in <span className="col-red"> working</span>{" "}
          </h1>
          <form onSubmit={handleSubmit} ref={form}>
            <div className="input-container">
              <InputField
                type="text"
                placeholder="Full Name"
                name="name"
                handleChange={handleChange}
                required={true}
              />
            </div>
            <div className="input-container">
              <InputField
                type="tel"
                placeholder="Mobile Number"
                name="mobileNo"
                handleChange={handleChange}
                required={true}
              />
            </div>
            <div className="input-container">
              <InputField
                type="email"
                placeholder="Enter Email"
                name="email"
                handleChange={handleChange}
                required={true}
              />
            </div>
            <div className="input-container">
              <InputField
                type="url"
                placeholder="Your Linkedin profile url"
                name="linkedIn"
                handleChange={handleChange}
                required={true}
              />
            </div>

            <div className="input-container">
              <textarea
                className="text-area"
                placeholder="Message"
                name="message"
                onChange={handleChange}
                rows="4"
              />
            </div>
            <div className="">
              <label htmlFor="file-upload" className="custom-file-upload">
                Click Here to
                <br /> Upload your resume
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />
              {file && file.name}
              <br />
            </div>
            <button className="submit-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
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

export default React.memo(Faculty);
