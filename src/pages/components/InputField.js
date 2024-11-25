import React from "react";

export default function InputField({ type, placeholder, val, handleChange }) {
  return (
    <input
      className="input-field"
      type={type}
      placeholder={placeholder}
      value={val}
      onChange={handleChange}
    />
  );
}
