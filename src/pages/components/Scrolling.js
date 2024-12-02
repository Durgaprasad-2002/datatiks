import React, { useState, useEffect } from "react";
import sc_1 from "../assets/imgs/sc_1.webp";
import sc_2 from "../assets/imgs/sc_2.webp";
import sc_3 from "../assets/imgs/sc_3.webp";
import sc_4 from "../assets/imgs/sc_4.webp";

import "../styles.css";

export default function Scrolling() {
  const imgArray = [sc_1, sc_2, sc_3, sc_4];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(
    (currentIndex + 1) % imgArray.length
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(false); // Start the transition
      setCurrentIndex(nextIndex);
      setNextIndex((nextIndex + 1) % imgArray.length); // Set the next image index
    }, 5000); // Change image every 3 seconds

    // Reset transition state after animation
    const transitionTimeout = setTimeout(() => {
      setIsTransitioning(true);
    }, 4000); // Match this with animation duration

    return () => {
      clearInterval(interval);
      clearTimeout(transitionTimeout);
    };
  }, [imgArray.length, nextIndex]);

  return (
    <div className="scroll-container">
      <div className={`img-box ${isTransitioning ? "fade-out" : ""}`}>
        <img
          className="scroll-img"
          alt={`scroll-img-${currentIndex}`}
          src={imgArray[currentIndex]}
          style={{
            width: "100%",
            height: "100vh", // Ensures the image fits the screen height
            objectFit: "cover", // Ensures the image covers the screen without stretching
          }}
        />
      </div>

      {/* Next image container */}
      <div className={`img-box ${isTransitioning ? "fade-in" : ""}`}>
        <img
          className="scroll-img"
          alt={`scroll-img-${nextIndex}`}
          src={imgArray[nextIndex]}
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
