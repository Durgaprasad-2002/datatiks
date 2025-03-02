import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import HomeSection1 from "./components/HomeSection1";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel/Carousel";
import TrendingCoursesCarousel from "./components/Carousel/TrendingCoursesCarousel";
import EnquiryForm from "./components/EnquiryForm";
import { Link } from "react-router-dom";

import {
  BenefitCard,
  AcheivementCard,
  TrainingCard,
} from "./components/HomeCards";

import { useInView } from "react-intersection-observer";
import "animate.css";

import { achievements, benefits, trainings } from "./assets/data/homeData";

import "./styles.css";

export default function Home() {
  //scrolls to top of pages
  useEffect(() => {
    document.title = "Sunadh Technologies | Home";
    document.documentElement.scrollTop = 0;
  }, []);

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });

  // ref's for cards handling
  const cardRefs = useRef([]);

  useEffect(() => {
    // Tracking multiple timeouts for cleanup
    let timeouts = [];

    // Observe cards with delay
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

    // attaching observers
    cardRefs.current.forEach((card) => cardObserver.observe(card));

    // cleanup's
    return () => {
      cardObserver.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, []);

  // adding cards to refs for tracking
  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  return (
    <>
      <Navbar />
      {/* header section */}
      <HomeSection1 />

      {/* Benefits section */}
      <section className="home-section-2">
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
      <section className="home-section-3 ">
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
      <section className="home-section-4">
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

      <div
        ref={ref1}
        className={`content-section ${
          inView1 ? "animate__animated animate__fadeInUp" : ""
        }`}
      >
        <Carousel />
        
      </div>

      {/* <div
        ref={ref3}
        className={` content-section ${
          inView3 ? "animate__animated animate__zoomIn" : ""
        }`}
      >
        <TrendingCoursesCarousel />
      </div> */}
     

      {/* <div
        ref={ref2}
        className={` content-section ${
          inView2 ? "animate__animated animate__slideInUp" : ""
        }`}
      >
        <EnquiryForm />
      </div> */}

      <Footer />
    </>
  );
}
