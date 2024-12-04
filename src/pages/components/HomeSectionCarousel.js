import React, { useEffect, useState } from "react";

import { homeCarouselData } from "../assets/data/homeData";

import "../styles.css";

export default function HomeSectionCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % homeCarouselData.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoScroll); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="c2">
      <div className="carousel-container">
        <ul className="carousel my-carousel">
          {/* Slide Activators */}
          {homeCarouselData.map((_, index) => (
            <input
              key={`activator-${index}`}
              className="carousel__activator"
              type="radio"
              id={`slide${index + 1}`}
              name="carousel"
              checked={currentSlide === index}
              readOnly
            />
          ))}

          {/* Slides */}
          {homeCarouselData.map((course, index) => (
            <li key={`slide-${index}`} className="carousel__slide">
              <img
                src={course.img}
                alt={course.title}
                className="carousel-image"
              />
              <h1 className="home-carousel-title">{course.title}</h1>
            </li>
          ))}

          {/* Controls */}
          {homeCarouselData.map((_, index) => (
            <div key={`control-${index}`} className="carousel__controls">
              <label
                className="carousel__control carousel__control--backward"
                htmlFor={`slide${
                  index === 0 ? homeCarouselData.length : index
                }`}
                onClick={() =>
                  setCurrentSlide((prevSlide) =>
                    prevSlide === 0
                      ? homeCarouselData.length - 1
                      : prevSlide - 1
                  )
                }
              ></label>
              <label
                className="carousel__control carousel__control--forward"
                htmlFor={`slide${
                  index + 2 > homeCarouselData.length ? 1 : index + 2
                }`}
                onClick={() =>
                  setCurrentSlide(
                    (prevSlide) => (prevSlide + 1) % homeCarouselData.length
                  )
                }
              ></label>
            </div>
          ))}

          {/* Indicators */}
          <div className="carousel__indicators">
            {homeCarouselData.map((_, index) => (
              <label
                key={`indicator-${index}`}
                className="carousel__indicator"
                htmlFor={`slide${index + 1}`}
                onClick={() => setCurrentSlide(index)}
              ></label>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
