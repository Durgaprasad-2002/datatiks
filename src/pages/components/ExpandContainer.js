import React from "react";
import "../styles.css";

export default function ExpandContainer({ ind, title, desc, id, type }) {
  return (
    <div className="expand-container" key={ind}>
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
