import React from "react";
import { useEffect } from "react";

import { IoSearch } from "react-icons/io5";

import { techStackArray1, techStackArray2 } from "../assets/data/homeData";
import { Link } from "react-router-dom";

export default function HomeSection1() {
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
        <div className="container">
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
              placeholder="Search here..."
            />
            <IoSearch className="search-icon" />
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
