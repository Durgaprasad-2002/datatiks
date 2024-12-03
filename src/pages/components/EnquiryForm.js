import React, { useState } from "react";
import "../styles.css";

import InputField from "./InputField";

export default function EnquiryForm() {
  const [btnNum, setbtnNum] = useState(1);

  function handleChange(params) {}
  return (
    <div className="home-section-6 form-container">
      <br />
      <h2 className="title">Enquiry</h2>
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

      <form>
        <div className="input-container">
          <InputField
            type={"text"}
            placeholder={"Full Name*"}
            val={""}
            handleChange={handleChange}
          />
          <InputField
            type={"email"}
            placeholder={"Email Id*"}
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
          <InputField
            type={"tel"}
            placeholder={"Phone No"}
            val={""}
            handleChange={handleChange}
          />
        </div>
        <div className={`input-container ${btnNum !== 2 && "hide-div"}`}>
          <InputField
            type={"text"}
            placeholder={"Company Name"}
            val={""}
            handleChange={handleChange}
          />
          <InputField
            type={"tel"}
            placeholder={"Number of Employees"}
            val={""}
            handleChange={handleChange}
          />
        </div>
        <div className="input-container">
          <textarea className="text-area" placeholder="Message" rows={6} />
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>

      <br />
      <br />
      <br />
    </div>
  );
}
