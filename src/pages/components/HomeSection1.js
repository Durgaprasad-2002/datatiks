import React from "react";
import { useEffect, useState } from "react";

import { IoSearch } from "react-icons/io5";

import { techStackArray1, techStackArray2 } from "../assets/data/homeData";
import { Link } from "react-router-dom";

import { courses } from "../assets/data/courses";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function HomeSection1() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(() => e.target.value);
  }

  async function handleSubmit() {
    // Trim and normalize input
    const temp = search.trim().toLowerCase();

    // Search through courses
    const address = courses.find((course) => {
      const { courseId, heading } = course;
      return (
        courseId.toLowerCase().includes(temp) || // Match courseId
        heading.title.toLowerCase().includes(temp) || // Match title
        heading.description.toLowerCase().includes(temp) // Match description
      );
    });

    if (address) {
      navigate(`/services/${address.courseId}`);
    } else {
      toast.error("The Course you are Looking for is not found!");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

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
        <div className="conatiner out-conatiner">
          <h1 className="title-home-1">A Leading Service Provider of IT</h1>
          <ul className="title-home-2">
            {[
              "T",
              "r",
              "a",
              "i",
              "n",
              "i",
              "n",
              "g",
              "s",
              "",
              "{}W",
              "o",
              "r",
              "l",
              "d",
              "w",
              "i",
              "d",
              "e",
            ].map((data, ind) => (
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
      </section>
    </>
  );
}
