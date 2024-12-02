import React, { useState, useRef } from "react";
import InputField from "./InputField";
import { toast } from "react-toastify";
import axios from "axios";
import "../styles.css";

export default function EnrollButton() {
  const [showButton, setShowButton] = useState(false);
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
      <button
        type="button"
        className="close-btn"
        style={{
          opacity: showButton ? "1" : "0",
        }}
        onClick={() => setShowButton(false)}
      >
        X
      </button>

      <div className={`en-btn ${showButton && "br-blue"}`}>
        <button
          className={showButton ? "en-btn-hide" : "enroll-btn"}
          onClick={() => setShowButton(() => true)}
        >
          Enroll Now
        </button>
        <div
          className="faculty-form-container-sec1 faculty-form-container-sec2"
          style={{
            height: showButton ? "100%" : "0px",
            padding: showButton ? "15px 15px" : "0px 0px",
          }}
        >
          <form onSubmit={handleSubmit}>
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
                rows={10}
              />
            </div>
            <button
              className="submit-btn sub-2"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Get Your Seat"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
