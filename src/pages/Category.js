import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Loader from "./components/Loader";

import CategoryNotFound from "./components/CategoryNotFound";
import { categories } from "./assets/data/courses";

import "./styles.css";
import { useParams, Link } from "react-router-dom";

export default function Category() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  // state Hooks
  const { category } = useParams();

  const [CategoryDetails, setCategoryDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    setLoading(true);
    const foundCourse = categories.find((data) => data.categoryId === category);
    setTimeout(() => {
      setCategoryDetails(foundCourse || null);
      setLoading(false);
    }, 1000);
  }, [category]);

  useEffect(() => {
    const handleScroll = () => {
      setPosY(-window.scrollY / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading)
    return (
      <>
        <Navbar />
        <Loader />
        <Footer />
      </>
    );

  if (!CategoryDetails)
    return (
      <>
        <Navbar />
        <CategoryNotFound />
        <Footer />
      </>
    );

  return (
    <>
      <Navbar />
      <div className="outer-services">
        <section
          className="service-header"
          style={{ backgroundPositionY: `${posY}px` }}
        >
          <div className="services-header-inner">
            <h1>{CategoryDetails?.name || "Category Title"}</h1>
            <p>{CategoryDetails?.description || "Category Description"}</p>
          </div>
        </section>
        <h3 className="course-map-header">Courses</h3>
        <div className="coursemap-container coursemap-container-serv">
          {CategoryDetails.subcategories.map((course, ind) => {
            return (
              <div className="category-container category-container-serv">
                <div className="category-map-img-cont">
                  {" "}
                  <img src={course.img} alt="category-img" />
                </div>

                <h4>{course.title}</h4>
                <p>{course.description}</p>
                <Link to={course.link}>
                  <button className="categoery-course-btn"> Read More</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
