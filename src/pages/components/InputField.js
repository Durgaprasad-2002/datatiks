import React from "react";

export default function InputField({
  type,
  placeholder,
  val,
  handleChange,
  name,
  required,
}) {
  return (
    <input
      className="input-field"
      name={name}
      type={type}
      placeholder={placeholder}
      value={val}
      onChange={handleChange}
      required={required}
      spellCheck="false"
    />
  );
}
