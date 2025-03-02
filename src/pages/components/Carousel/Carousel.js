import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./Carousel.css";
import "../../styles.css";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.img} alt="img" className="course-img" />
      <h4>{course.title}</h4>
    </div>
  );
}

const courses = [
  {
    title: "EDM",
    img: "https://www.datatiks.com/uploads/dc7cc0b960886014a604e916781fb85a.jpg",
  },
  {
    title: "Analytics",
    img: "https://www.datatiks.com/uploads/5bb384f444c2efe0ea649536f77335a3.jpg",
  },
  {
    title: "Digital Marketing",
    img: "https://www.datatiks.com/uploads/3836fc47fea3f446050cbbe73f371240.jpg",
  },
  {
    title: "Cloud And Platform Management",
    img: "https://www.datatiks.com/uploads/2183ca90748c1648b942df6a147ef92e.jpg",
  },
  {
    title: "Cloud And App Development",
    img: "https://www.datatiks.com/uploads/4decf1713c3218b846f24a05987f0935.jpg",
  },
  {
    title: "Digital Transformation",
    img: "https://www.datatiks.com/uploads/5bd2295df089ef8573d9d5a665b4701b.jpg",
  },
];

export default function Carousel() {
  useEffect(() => {
    const items = document.querySelectorAll(".carousel .carousel-item");
    items.forEach((el) => {
      const minPerSlide = 3;
      let next = el.nextElementSibling;
      for (let i = 1; i < minPerSlide; i++) {
        if (!next) {
          next = items[0];
        }
        const cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  }, []);

  return (
    <section>
      <section className="home-section-5">
        <br />
        <br />
        <h2 className="title">Course Category</h2>
        <div className="container-fluid">
          <div className="row mx-auto my-auto justify-content-center">
            <div className="col">
              <div className="row">
                <div className="col-12">
                  <div
                    id="recipeCarousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner" role="listbox">
                      {courses.map((course, index) => (
                        <div
                          className={`carousel-item ${
                            index === 0 ? "active" : ""
                          }`}
                          key={course.title}
                        >
                          <div className="col-md-4 ">
                            <CourseCard key={index} course={course} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex  align-items-center justify-content-end">
                    <a
                      className="swipe-link"
                      role="button"
                      href="#recipeCarousel"
                      data-bs-slide="prev"
                    >
                      <div className="carousel-nav-icon">{"←"}</div>
                    </a>
                    <a
                      className="swipe-link"
                      role="button"
                      href="#recipeCarousel"
                      data-bs-slide="next"
                    >
                      <div className="carousel-nav-icon">{"→"}</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="view-course-btn-container">
                <Link to="/services">
                  <button className="view-course-btn"> VIEW ALL COURSES</button>
                </Link>
              </div>
      </section>
    </section>
  );
}
