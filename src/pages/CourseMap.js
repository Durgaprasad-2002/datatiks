import React, { useEffect } from "react";

import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

import { CourseMapServices } from "./assets/data/homeData";

function CourseMap() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Navbar />
      <h3 className="course-map-header">Services</h3>
      <div className="coursemap-container">
        {CourseMapServices.map((category, ind) => {
          return (
            // Categoery Card
            <div className="category-container">
              <Link to={category.link} className="course-map-item">
                <h5 className="coursemap-cat-title">{category.name}</h5>
              </Link>

              <div className="courses-container">
                {category.subcategories.map((course, ind) => {
                  return (
                    // Course Card
                    <div style={{ display: "flex", gap: "7px" }}>
                      <span className="col-red"> ⨠ {"     "}</span>
                      <Link to={course.link} className="course-map-item">
                        {course.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <br />
      </div>
      <Footer />
    </>
  );
}

export default React.memo(CourseMap);