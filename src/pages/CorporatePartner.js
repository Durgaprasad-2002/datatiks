import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./styles.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InputField from "./components/InputField";
import HeaderSectionBackground from "./components/HeaderSectionBackground";

import { useInView } from "react-intersection-observer";
import "animate.css";

function CorporatePartner() {
  //scrolling to top of page
  useEffect(() => {
    document.title = `Sunadh | Corporate Partner`;
    document.documentElement.scrollTop = 0;
  }, []);

  // state hooks
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    // threshold: 0.2,
    rootMargin: "0px 0px -180px 0px",
  });
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    mobileNo: "",
    company: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    province: "",
    country: "",
    message: "",
  });

  //handles input change
  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // handle the form submission
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(() => true);
    axios
      .post(`${process.env.REACT_APP_API_KEY}/api/corparate`, { ...formData })
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
      <HeaderSectionBackground
        name={"corporate"}
        title1={"Partner With Us"}
        title2={"Contact Form"}
        desc={
          "Thank you for your interest in working with Sunadh. Please complete the form below to tell us more about you and your company."
        }
      />

      <section className="corporate-form-container">
        <div
          ref={ref2}
          className={` content-section ${
            inView2 ? "animate__animated animate__slideInUp" : ""
          }`}
        >
          <form className="form-corporate" onSubmit={handleSubmit} ref={form}>
            <div className="faculty-form-container-sec1">
              <h1>Personal Information</h1>
              <>
                <div className="input-container">
                  <InputField
                    type={"text"}
                    placeholder={"Full Name"}
                    name="name"
                    required={true}
                    handleChange={handleChange}
                  />
                </div>
                <div className="input-container">
                  <InputField
                    type={"text"}
                    placeholder={"Title"}
                    name="title"
                    required={true}
                    handleChange={handleChange}
                  />
                </div>
                <div className="input-container">
                  <InputField
                    type={"email"}
                    placeholder={"Business Email "}
                    name="email"
                    required={true}
                    handleChange={handleChange}
                  />
                </div>
                <div className="input-container">
                  <InputField
                    type={"tel"}
                    placeholder={"Business Phone"}
                    name="mobileNo"
                    required={true}
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
                    name="company"
                    required={true}
                    handleChange={handleChange}
                  />
                </div>
                <div className="input-container">
                  <InputField
                    type={"text"}
                    placeholder={"Address"}
                    name="address"
                    required={true}
                    handleChange={handleChange}
                  />
                </div>
                <div className="input-container">
                  <InputField
                    type={"text"}
                    placeholder={"City"}
                    name="city"
                    required={true}
                    handleChange={handleChange}
                  />
                </div>
                <div className="input-container">
                  <InputField
                    type={"text"}
                    placeholder={"State"}
                    name="state"
                    required={true}
                    handleChange={handleChange}
                  />
                </div>
                <div className="input-container">
                  <InputField
                    type={"tel"}
                    placeholder={"Zip Code"}
                    name="zip"
                    required={true}
                    handleChange={handleChange}
                  />
                </div>
                <div className="input-container">
                  <InputField
                    type={"text"}
                    placeholder={"Province"}
                    name="province"
                    required={true}
                    handleChange={handleChange}
                  />
                </div>
                <div className="input-container">
                  <InputField
                    type={"text"}
                    placeholder={"Country"}
                    name="country"
                    required={true}
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
                    name="message"
                    required={true}
                    onChange={handleChange}
                    rows="4"
                    spellCheck="false"
                  />
                </div>
              </>
            </div>
            <button className="submit-btn" type="submit" disabled={loading}>
              {loading ? "Submiting..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default React.memo(CorporatePartner);
