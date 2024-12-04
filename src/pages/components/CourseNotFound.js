import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

function CourseNotFound() {
  return (
    <>
      <div className="not-found">
        <h2>Course Not Found</h2>
        <p>
          Sorry, the course you're looking for doesn't exist or has been
          removed.
        </p>
        <Link to="/" className="back-link">
          Back to Courses
        </Link>
      </div>
    </>
  );
}

export default React.memo(CourseNotFound);
