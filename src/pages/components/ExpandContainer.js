import React from "react";
import "../styles.css";

export default function ExpandContainer({ title, desc, id, type }) {
  console.log(desc);
  return (
    <div className="expand-container">
      <input
        type="checkbox"
        id={`expand-toggle-${type}-${id}`}
        className="expand-checkbox"
      />
      <label htmlFor={`expand-toggle-${type}-${id}`} className="expand-title">
        {title}
      </label>
      <div className="expand-desc"> {desc}</div>
    </div>
  );
}
