import React from "react";
import "../styles.css";

import { courses } from "../Data/homeData";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.img} alt="img" className="course-img" />
      <h4>{course.title}</h4>
    </div>
  );
}

export default function HomeSection5() {
  return (
    <section className="home-section-5">
      <h2 className="title">Course Category</h2>
      <div className="container-container">
        <div className="course-container">
          {courses.concat(courses).map((course, ind) => (
            <CourseCard key={ind} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
