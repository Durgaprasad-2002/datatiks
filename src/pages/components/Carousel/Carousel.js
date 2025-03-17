import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./Carousel.css";
import "../../styles.css";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <Link to={course.link} style={{ textDecoration: "none" }}>
      <div className="course-card">
        <img src={course.img} alt="img" className="course-img" />
        <h4>{course.title}</h4>
      </div>
    </Link>
  );
}

const courses = [
  {
    title: "Tableau",
    img: "https://d13kjxnqnhcmn2.cloudfront.net/AcuCustom/Sitename/DAM/030/Tableau_2_Thumb.png",
    link: "/services/tableau",
  },
  {
    title: "Snowflake",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHjLqTkt4w9mxvyTmK_xR0Po2IncL_LxNuA&s",
    link: "/services/snowflake",
  },
  {
    title: "Azure Data Engineer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu3Qnu5nlDKJqrtzeY3LybcWyKVe4bGFeyNg&s",
    link: "/services/azure_devops",
  },
  {
    title: "Python Full Stack",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVIu57iUYsBZqQzVUP0rG0NOf2tw0h4ffSOw&s",
    link: "/services/python_full_stack",
  },
  {
    title: "Generative AI",
    img: "https://roboticsbiz.com/wp-content/uploads/2024/09/generative-ai-696x460.jpg",
    link: "/services/generative_ai",
  },
  {
    title: "GCP",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtyb74zgBORqeeYX_ozrhjQTqdJoWhhAt0A&s",
    link: "/services/gcp",
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
