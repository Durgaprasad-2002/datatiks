import React, { useEffect, useState } from "react";

import { IoSearch } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import HomeSectionCarousel from "./HomeSectionCarousel";
import {
  techStackArray1,
  techStackArray2,
  TextCharacterArray,
} from "../assets/data/homeData";
import { courses } from "../assets/data/courses";

import "../styles.css";

export default function HomeSection1() {
  //navigation to another page
  const navigate = useNavigate();

  //state hook
  const [search, setSearch] = useState("");

  //handle seach change
  function handleSearch(e) {
    setSearch(() => e.target.value);
  }

  //hanldes search submit
  async function handleSubmit() {
    const temp = search.trim().toLowerCase();

    // Search through courses
    const address = courses.find((course) => {
      const { courseId, heading } = course;
      return (
        courseId.toLowerCase().includes(temp) ||
        heading.title.toLowerCase().includes(temp) ||
        heading.description.toLowerCase().includes(temp)
      );
    });

    if (address) {
      navigate(`/services/${address.courseId}`);
    } else {
      toast.error("The Course you are Looking for is not found!");
    }
  }

  // invokes handlesubmit when enter key pressed
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  // handles the animation for .title-home-2
  useEffect(() => {
    const textElements = document.querySelectorAll(".title-home-2 .text");
    const animateText = () => {
      textElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("animate");
          setTimeout(() => {
            element.classList.remove("animate");
          }, 200);
        }, index * 300);
      });

      setTimeout(animateText, textElements.length * 300);
    };
    animateText();
  }, []);

  return (
    <>
      <section className="outer">
        <div className="conatiner out-conatiner cont">
          <div className="section-1">
            <h1 className="title-home-1">A Leading Service Provider of IT</h1>
            <ul className="title-home-2">
              {TextCharacterArray.map((data, ind) => (
                <li className="text" key={ind}>
                  {data.replace("{}", " ")}
                </li>
              ))}
            </ul>
            <br />
            <h2 className="qs">Quick Search</h2>
            <div className="tech-stack-container">
              {techStackArray1.map((tech, ind) => (
                <span className="techs" key={ind}>
                  <Link to={tech.link}>{tech.name}</Link>
                </span>
              ))}
            </div>
            <div className="home-search-container">
              <input
                className="input-search"
                type="text"
                placeholder="Search for a Course..."
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
              />
              <IoSearch onClick={handleSubmit} className="search-icon" />
            </div>
            <div className="tech-stack-container">
              {techStackArray2.map((tech, ind) => (
                <span className="techs" key={ind}>
                  <Link to={tech.link}>{tech.name}</Link>
                </span>
              ))}
            </div>
          </div>
          <div className="section-1">
            {/* Header section Carousel */}
            <HomeSectionCarousel />
          </div>
        </div>
      </section>
    </>
  );
}
