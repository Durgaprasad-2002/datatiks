import React from "react";
import { Link } from "react-router-dom";

import "../styles.css";

function CategoryNotFound() {
  return (
    <>
      <div className="not-found">
        <h2>category Not Found</h2>
        <p>
          Sorry, the category you're looking for doesn't exist or has been
          removed.
        </p>
        <Link to="/" className="back-link">
          Back to Categorys's
        </Link>
      </div>
    </>
  );
}

export default React.memo(CategoryNotFound);
