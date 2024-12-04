import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./Carousel.css";
import "../../styles.css";

function TrendingCard({ course, setShowModal }) {
  return (
    <div className="course-card trending-card" style={{ zIndex: "100" }}>
      <img src={course.img} alt={course.title} className="trend-img" />
      <Link to={course.link} style={{ textDecoration: "none" }}>
        <h4 className="trend-title">{course.title}</h4>
      </Link>

      <div className="trend-btn-container">
        <button className="trend-btn">Curriculum</button>
        <button className="trend-btn" onClick={() => setShowModal(() => true)}>
          Enroll Now
        </button>
      </div>
    </div>
  );
}

const courses = [
  {
    title: "React",
    img: "https://www.datatiks.com/uploads/dc7cc0b960886014a604e916781fb85a.jpg",
    link: "/services/react",
  },
  {
    title: "Tableau",
    img: "https://www.datatiks.com/uploads/5bb384f444c2efe0ea649536f77335a3.jpg",
    link: "/services/tableau",
  },
  {
    title: "Powerbi",
    img: "https://www.datatiks.com/uploads/3836fc47fea3f446050cbbe73f371240.jpg",
    link: "/services/powerbi",
  },
  {
    title: "Snowflake",
    img: "https://www.datatiks.com/uploads/2183ca90748c1648b942df6a147ef92e.jpg",
    link: "/services/snowflake",
  },
  {
    title: "Azure",
    img: "https://www.datatiks.com/uploads/4decf1713c3218b846f24a05987f0935.jpg",
    link: "/services/azure",
  },
  {
    title: "Python Full Stack",
    img: "https://www.datatiks.com/uploads/5bd2295df089ef8573d9d5a665b4701b.jpg",
    link: "/services/python_full_stack",
  },
];

export default function TrendingCoursesCarousel({ setShowModal }) {
  return (
    <section className="home-section-9">
      <br />
      <br />
      <h2 className="title text-center">Trending Courses</h2>
      <div className="container-fluid">
        <div
          id="TrendingCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {courses.map((course, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={course.title}
              >
                <div className="d-flex justify-content-center">
                  <TrendingCard course={course} setShowModal={setShowModal} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex  align-items-center justify-content-center">
            <a
              className="swipe-link"
              role="button"
              href="#TrendingCarousel"
              data-bs-slide="prev"
            >
              <div className="carousel-nav-icon">{"←"}</div>
            </a>
            <a
              className="swipe-link"
              role="button"
              href="#TrendingCarousel"
              data-bs-slide="next"
            >
              <div className="carousel-nav-icon">{"→"}</div>
            </a>
          </div>
        </div>

        {/* View All Courses Button */}
        <div className="d-flex justify-content-center mt-4">
          <Link to="/services">
            <button className="view-courses">VIEW ALL COURSES</button>
          </Link>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
}
