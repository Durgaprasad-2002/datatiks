import React, { useState, useEffect, useMemo, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EnrollButton from "./components/EnrollButton";
import Loader from "./components/Loader";
import ExpandContainer from "./components/ExpandContainer";
import CourseNotFound from "./components/CourseNotFound";
import { courses } from "./assets/data/courses";

import { useParams, Link } from "react-router-dom";

import { useInView } from "react-intersection-observer";
import "animate.css";

import "./styles.css";

export default function Services() {
  // state Hooks
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    // threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });
  const { course } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [posY, setPosY] = useState(0);

  //scrolling to top of page
  useEffect(() => {
    document.title = `DataTiks | Services | ${course}`;
    document.documentElement.scrollTop = 0;
  }, [course]);

  // fectching course
  const foundCourse = useMemo(
    () => courses.find((data) => data.courseId === course),
    [courses, course]
  );
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setCourseDetails(foundCourse || null);
      setLoading(false);
    }, 1000);
  }, [foundCourse]);

  useEffect(() => {
    const handleScroll = () => {
      setPosY(-window.scrollY / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //returns loader during fetching
  if (loading)
    return (
      <>
        <Navbar />
        <Loader />
        <Footer />
      </>
    );

  // return CourseNotFound
  if (!courseDetails)
    return (
      <>
        <Navbar />
        <CourseNotFound />
        <Footer />
      </>
    );

  // returns actual component UI
  return (
    <>
      <Navbar />

      <div className="outer-services">
        {/* Header  Section*/}
        <section
          className="service-header"
          style={{ backgroundPositionY: `${posY}px` }}
        >
          <div className="services-header-inner">
            <h1>{courseDetails?.heading?.title || "Course Title"}</h1>
            <p>{courseDetails?.heading?.description || "Course Description"}</p>
          </div>
        </section>
        {/* Sticky Conatiner */}
        <div className="stat">
          <ul className="topics-container">
            {[
              "Pre-Requisites",
              "Who can Learn",
              "Why DataTiks",
              "FAQs",
              "Course Content",
              "Enroll Now",
            ].map((topic, index) => (
              <a
                style={{ textDecoration: "none" }}
                key={index}
                href={`#${topic.toLowerCase().replace(/ /g, "-")}`}
              >
                <li className="topic-item">{topic}</li>
              </a>
            ))}
          </ul>
        </div>
        {/* Body Section */}
        <section
          ref={ref2}
          className={`services-body content-section ${
            inView2 ? "animate__animated animate__fadeInUp" : ""
          }`}
        >
          <div className="services-body-1">
            {/* Pre-Requisites Section */}
            <div className="pre-req-container" id="pre-requisites">
              <h3 className="course-section-title">
                Pre-<span className="col-red">Requisites</span>
              </h3>
              <ul className="map-conatiner-services">
                {courseDetails?.body?.prerequisites?.description?.map(
                  (preq, ind) => (
                    <li key={ind} className="map-item">
                      {preq}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Who Can Learn Section */}
            <div className="pre-req-container" id="who-can-learn">
              <h3 className="course-section-title">
                Who can Learn / <span className="col-red">Target Audience</span>
              </h3>
              <p>
                {courseDetails?.body?.whocanlearn?.description ||
                  "No specific audience"}
              </p>
              <ul className="map-conatiner-services">
                {courseDetails?.body?.whocanlearn?.fields?.map((field, ind) => (
                  <li key={ind} className="map-item">
                    {field}
                  </li>
                ))}
              </ul>
            </div>

            {/* Why DataTiks Section */}
            <div className="pre-req-container" id="why-datatiks">
              <h3 className="course-section-title">
                Why <span className="col-red">DataTiks</span>
              </h3>
              <ExpandContainer
                ind={courseDetails?.body?.Why?.description}
                type="why"
                id={1}
                title="Why Choose Us"
                desc={
                  <div>
                    <p>
                      {courseDetails?.body?.Why?.description ||
                        "No details provided"}
                    </p>
                    <ul className="map-conatiner-services">
                      {courseDetails?.body?.Why?.fields?.map((field, ind) => (
                        <li key={ind} className="map-item">
                          {field}
                        </li>
                      ))}
                    </ul>
                  </div>
                }
              />
            </div>

            {/* FAQs Section */}
            <div className="pre-req-container" id="faqs">
              <h3 className="course-section-title">
                Fa<span className="col-red">qs</span>
              </h3>
              {courseDetails?.body?.Faq?.map((faq, ind) => (
                <ExpandContainer
                  ind={ind}
                  title={faq.qn}
                  desc={
                    <ul className="map-conatiner-services">
                      {faq?.ans?.map((field, ind) => {
                        if (ind === 0)
                          return (
                            <p key={ind} className="faq-p">
                              {field}
                            </p>
                          );
                        return (
                          <li key={ind} className="map-item">
                            {field}
                          </li>
                        );
                      })}
                    </ul>
                  }
                  type="faq"
                  id={ind}
                />
              ))}
            </div>

            {/* Course Content Section */}
            <div className="pre-req-container" id="course-content">
              <h3 className="course-section-title">
                Course <span className="col-red">Content</span>
              </h3>
              <p>Download the course content of our Institute from below:</p>

              <Link
                to="https://www.tutorialspoint.com/reactjs/reactjs_tutorial.pdf"
                download={true}
                target="_blank"
              >
                <button className="course-dwn-btn">Download Course</button>
              </Link>
            </div>

            {/* Enroll  Section */}
            <div className="pre-req-container" id="enroll-now">
              <h3 className="course-section-title">
                Enroll <span className="col-red">Now!</span>
              </h3>
              <p className="enroll-desc">
                {courseDetails?.body?.enroll?.description}
              </p>
            </div>
          </div>
          {/* Watch demo and enroll form section */}
          <div className="services-body-2">
            <div className="static-container-services">
              <h3 className="course-section-title side-line">
                Watch a <span className="col-red">Demo</span>
              </h3>

              <Suspense fallback={<Loader />}>
              
              <iframe src="https://drive.google.com/file/d/1bwW25EERYFkiP-IudsdVfCe4jxZAsxxy/preview" 
                  className="iframe-video"
                  frameborder="0" 
                  allow="autoplay; encrypted-media" 
                  allowfullscreen
                >
              </iframe>

                {/* <iframe
                  className="iframe-video"
                  src="https://www.youtube.com/embed/Xl6O8jS1Hho?si=n09mI28Hq9y8-HEm"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe> */}
              </Suspense>

              <EnrollButton />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
