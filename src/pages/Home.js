import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import HomeSection1 from "./components/HomeSection1";
// import CourseCarousel from "./components/CourseCarousel";
import Carousel from "./components/Carousel/Carousel";
import { achievements, benefits, trainings } from "./assets/data/homeData";
import {
  BenefitCard,
  AcheivementCard,
  TrainingCard,
} from "./components/HomeCards";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";
import TrendingCoursesCarousel from "./components/Carousel/TrendingCoursesCarousel";
import PopUpModal from "./components/PopUpModal";
import "./styles.css";

export default function Home() {
  // ------------------------

  const cardRefs = useRef([]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  useEffect(() => {
    let timeouts = []; // Track multiple timeouts for cleanup

    // Observe cards with staggered delay
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = cardRefs.current.indexOf(entry.target);

            const timeout = setTimeout(() => {
              entry.target.classList.add("card-fade-in-visible");
            }, cardIndex * 50);

            timeouts.push(timeout);
          }
        });
      },
      {
        rootMargin: "0px 0px 0px 0px",
        threshold: 0,
      }
    );

    // Attach observers

    cardRefs.current.forEach((card) => cardObserver.observe(card));

    // Cleanup
    return () => {
      cardObserver.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  return (
    <>
      <Navbar />
      <HomeSection1 />

      {/* Benefits section */}
      <section className="home-section-2 fade-in">
        <h2 className="title" style={{ marginBottom: "0px" }}>
          Benefits
        </h2>
        <h3 style={{ marginTop: "0px", fontWeight: "500", fontSize: "1rem" }}>
          (Why DataTicks)
        </h3>
        <div className="benefit-container">
          {benefits.map((benefit, ind) => (
            <BenefitCard
              key={ind}
              benefit={benefit}
              className="card-fade-in"
              addToRefs={addToRefs}
              cardRefs={cardRefs}
            />
          ))}
        </div>
        <br />
      </section>

      {/* Achievements section */}
      <section className="home-section-3 fade-in">
        <h2 className="title">Achieve your goals</h2>
        <div className="benefit-container">
          {achievements.map((benefit, ind) => (
            <AcheivementCard
              key={ind}
              acheive={benefit}
              className="card-fade-in"
              addToRefs={addToRefs}
              cardRefs={cardRefs}
            />
          ))}
        </div>
      </section>

      {/* Modes of Trainings section */}
      <section className="home-section-4 fade-in">
        <h2 className="title">Modes of Training</h2>
        <p className="desc">
          Work with the flexibility of selecting online or offline classes with
          DataTicks, offering hybrid models of learning as per the comfort of
          students.
        </p>
        <br />
        <div className="benefit-container">
          {trainings.map((training, ind) => (
            <TrainingCard
              key={ind}
              training={training}
              className="card-fade-in"
              addToRefs={addToRefs}
              cardRefs={cardRefs}
            />
          ))}
        </div>
      </section>

      <Carousel />
      {/* <TrendingCoursesCarousel setShowModal={setShowModal} /> */}
      {/* <PopUpModal /> */}
      <EnquiryForm />
      <Footer />
    </>
  );
}
