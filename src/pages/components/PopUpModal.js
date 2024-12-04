import React, { useEffect, useState, useRef } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";
import InputField from "./InputField";

import "../styles.css";

export default function PopUpModal({ showModal, setModal }) {
  //disables the overflow for body
  useEffect(() => {
    document.body.classList.toggle("remove-over", showModal);
  }, [showModal]);

  // State hooks for form data
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobileNo: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handles input value change
  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
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
      .finally(() => setLoading(false));
  }

  return (
    <div className={showModal ? "over-flow-container" : "hide-overflow-modal"}>
      <div className="over-flow-container-form">
        <button className="close-btn-modal" onClick={() => setModal(false)}>
          <IoMdCloseCircle />
        </button>

        <h3 className="title-modal side-line">Enroll Now</h3>
        <form onSubmit={handleSubmit} ref={form}>
          <div className="input-container">
            <InputField
              name="name"
              required={true}
              type="text"
              placeholder="Name"
              handleChange={handleChange}
            />
          </div>
          <div className="input-container">
            <InputField
              name="mobileNo"
              required={true}
              type="tel"
              placeholder="Mobile Number"
              handleChange={handleChange}
            />
          </div>
          <div className="input-container">
            <InputField
              name="email"
              required={true}
              type="email"
              placeholder="Email"
              handleChange={handleChange}
            />
          </div>
          <div className="input-container">
            <InputField
              name="subject"
              required={true}
              type="text"
              placeholder="Subject"
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
    </div>
  );
}
