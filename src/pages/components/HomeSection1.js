import React from "react";

import { IoSearch } from "react-icons/io5";

import { techStackArray1, techStackArray2 } from "../Data/homeData";

export default function HomeSection1() {
  return (
    <>
      <section className="outer">
        <div className="container">
          <h1 className="title-home-1">A Leading Service Provider of IT</h1>
          <ul className="title-home-2">
            <li>T</li>
            <li>r</li>
            <li>a</li>
            <li>i</li>
            <li>n</li>
            <li>i</li>
            <li>n</li>
            <li>g</li>
            <li>s</li>
            <li> </li>
            <li>W</li>
            <li>o</li>
            <li>r</li>
            <li>l</li>
            <li>d</li>
            <li>w</li>
            <li>i</li>
            <li>d</li>
            <li>e</li>
          </ul>
          <br />
          <h2>Quick Search</h2>
          <div className="tech-stack-container">
            {techStackArray1.map((tech, ind) => (
              <span className="techs" key={ind}>
                {tech}
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
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
