import React, { useState, useEffect, useRef } from "react";

import { IoMdCloseCircle } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";
import InputField from "./InputField";

export default function EnquiryHomeModal() {
  const [showModal, setModal] = useState(false);

  useEffect(() => {
    function TriggerPopUp() {
      //   if (!showModal) setModal(true);
    }

    setTimeout(() => setModal(true), 2000);

    document.addEventListener("visibilitychange", TriggerPopUp);

    return () => {
      document.removeEventListener("visibilitychange", TriggerPopUp);
    };
  }, []);

  //disables the overflow for body
  useEffect(() => {
    document.body.classList.toggle("remove-over", showModal);
  }, [showModal]);

  //state hooks
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [btnNum, setbtnNum] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    phone: "",
    companyName: "",
    employees: "",
    message: "",
  });

  // handles input change
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  //handles form submit
  async function handleSubmit(event) {
    event.preventDefault();
    const dataToSend = {
      ...formData,
      enquiryType: btnNum === 1 ? "Individual" : "Corporate",
    };

    setLoading(() => true);
    axios
      .post(`${process.env.REACT_APP_API_KEY}/api/enquiry`, {
        ...dataToSend,
      })
      .then((data) => {
        const { message } = data?.data;
        toast.success(message);
        form.current.reset();
        window.location.reload();
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
      <div
        className={showModal ? "over-flow-container" : "hide-overflow-modal"}
      >
        <div className="over-flow-container-form">
          <button className="close-btn-modal" onClick={() => setModal(false)}>
            <IoMdCloseCircle />
          </button>

          <div
            // className="home-section-6 form-container"
            style={{ background: "white" }}
          >
            <h3 className="title-modal side-line">
              Enquiry <span className="col-red"></span>
            </h3>
            <br />
            <div>
              <button
                className={`enquiry-btn ${btnNum === 1 && "active-enquiry"}`}
                onClick={() => setbtnNum(() => 1)}
              >
                For Individual
              </button>{" "}
              <button
                className={`enquiry-btn ${btnNum === 2 && "active-enquiry"}`}
                onClick={() => setbtnNum(() => 2)}
              >
                For Corporate
              </button>
            </div>

            <form onSubmit={handleSubmit} ref={form}>
              <div className="input-container">
                <InputField
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  val={formData.fullName}
                  handleChange={handleChange}
                  required={true}
                />
                <InputField
                  type="email"
                  placeholder="Email Id"
                  name="email"
                  val={formData.email}
                  handleChange={handleChange}
                  required={true}
                />
              </div>
              <div className="input-container">
                <InputField
                  type="text"
                  placeholder="Country"
                  name="country"
                  val={formData.country}
                  handleChange={handleChange}
                  required={true}
                />
                <InputField
                  type="tel"
                  placeholder="Phone No"
                  name="phone"
                  val={formData.phone}
                  handleChange={handleChange}
                  required={true}
                />
              </div>
              <div className={`input-container ${btnNum !== 2 && "hide-div"}`}>
                <InputField
                  type="text"
                  placeholder="Company Name"
                  name="companyName"
                  val={formData.companyName}
                  handleChange={handleChange}
                  required={btnNum === 2}
                />
                <InputField
                  type="tel"
                  placeholder="Number of Employees"
                  name="employees"
                  val={formData.employees}
                  handleChange={handleChange}
                  required={btnNum === 2}
                />
              </div>
              <div className="input-container">
                <textarea
                  spellCheck="false"
                  className="text-area"
                  placeholder="Message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <button className="submit-btn" type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>

            <br />
          </div>
        </div>
      </div>
    </>
  );
}
