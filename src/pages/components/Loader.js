import React from "react";
import "../styles.css";

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading course details...</p>
    </div>
  );
}
