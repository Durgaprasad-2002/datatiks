import React, { useEffect, useState } from "react";
import "../styles.css";
const courses = [
  {
    img: "https://www.datatiks.com/uploads/45f6482fc1cadc7d8b223e77a2c12d2c.png",
  },

  {
    img: "https://www.datatiks.com/uploads/549e55d9849998c595fae1ba8e707f94.png",
  },

  {
    img: "https://www.datatiks.com/uploads/350ae09e15ba9bf241ebe1be7b366694.png",
  },
  {
    img: "https://www.datatiks.com/uploads/a0617d3e9b663f3d4e6a3f1cb7bf98c3.png",
  },
  {
    img: "https://www.datatiks.com/uploads/f3f3b2a82f6cc7e82d198e176c50dfac.png",
  },
];
export default function HomeSectionCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % courses.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoScroll); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="c2">
      <div className="carousel-container">
        <ul className="carousel my-carousel">
          {/* Slide Activators */}
          {courses.map((_, index) => (
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
          {courses.map((course, index) => (
            <li key={`slide-${index}`} className="carousel__slide">
              <img
                src={course.img}
                alt={course.title}
                className="carousel-image"
              />
              <h1>{course.title}</h1>
            </li>
          ))}

          {/* Controls */}
          {courses.map((_, index) => (
            <div key={`control-${index}`} className="carousel__controls">
              <label
                className="carousel__control carousel__control--backward"
                htmlFor={`slide${index === 0 ? courses.length : index}`}
                onClick={() =>
                  setCurrentSlide((prevSlide) =>
                    prevSlide === 0 ? courses.length - 1 : prevSlide - 1
                  )
                }
              ></label>
              <label
                className="carousel__control carousel__control--forward"
                htmlFor={`slide${index + 2 > courses.length ? 1 : index + 2}`}
                onClick={() =>
                  setCurrentSlide(
                    (prevSlide) => (prevSlide + 1) % courses.length
                  )
                }
              ></label>
            </div>
          ))}

          {/* Indicators */}
          <div className="carousel__indicators">
            {courses.map((_, index) => (
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
