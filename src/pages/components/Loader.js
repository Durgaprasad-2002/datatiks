import React from "react";
import "../styles.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading details...</p>
    </div>
  );
}

export default React.memo(Loader);
