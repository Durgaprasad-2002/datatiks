import React from "react";
import Navbar from "./components/Navbar";
import HomeSection1 from "./components/HomeSection1";

import CourseCarousel from "./components/CourseCarousel";

import { achievements, benefits, trainings, courses } from "./Data/homeData";

import "./styles.css";

import {
  BenefitCard,
  AcheivementCard,
  TrainingCard,
  CourseCard,
} from "./components/HomeCards";

import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <HomeSection1 />

      {/* Benefits section  */}
      <section className="home-section-2">
        <h2 className="title" style={{ marginBottom: "0px" }}>
          Benefits
        </h2>
        <h3 style={{ marginTop: "0px", fontWeight: "500" }}>(Why DataTicks)</h3>
        <div className="benefit-container">
          {benefits.map((benefit, ind) => (
            <BenefitCard key={ind} benefit={benefit} />
          ))}
        </div>
      </section>

      {/* Acheivements section  */}
      <section className="home-section-3">
        <h2 className="title">Achieve your goals</h2>
        <div className="benefit-container">
          {achievements.map((benefit, ind) => (
            <AcheivementCard key={ind} acheive={benefit} />
          ))}
        </div>
      </section>

      {/* Mode of Trainings section  */}
      <section className="home-section-4">
        <h2 className="title">Modes of Training </h2>
        <p className="desc">
          work with the flexibility of selecting online or offline classes with
          Datatiks which offers hybrid models of learning as per the comfort of
          students. Get the fruitful chance of choosing between the privilege of
          learning from home or the advantage of one-on-one knowledge gaining -
          all in one place.
        </p>
        <br />
        <div className="benefit-container">
          {trainings.map((training, ind) => (
            <TrainingCard key={ind} training={training} />
          ))}
        </div>
      </section>

      {/* Courses section  */}
      {/* <section className="home-section-5">
        <h2 className="title">Course Category</h2>
        <div className="container-container">
          <div className="course-container">
            {courses.concat(courses).map((course, ind) => (
              <CourseCard key={ind} course={course} />
            ))}
          </div>
        </div>
      </section> */}

      <CourseCarousel />

      <EnquiryForm />
      <Footer />
    </>
  );
}
