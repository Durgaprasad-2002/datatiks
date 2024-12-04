import React, { useState, useEffect, useMemo } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeaderSectionBackground from "./components/HeaderSectionBackground";
import Loader from "./components/Loader";
import CategoryNotFound from "./components/CategoryNotFound";
import { categories } from "./assets/data/courses";

import { useInView } from "react-intersection-observer";
import "animate.css";

import { useParams, Link } from "react-router-dom";
import "./styles.css";

function Category() {
  // categoery Id using paramas
  const { category } = useParams();

  //scrolling to top of page
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [category]);

  // state hooks
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [CategoryDetails, setCategoryDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  //fetching the category data
  const foundCourse = useMemo(
    () => categories.find((data) => data.categoryId === category),
    [categories, category]
  );

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setCategoryDetails(foundCourse || null);
      setLoading(false);
    }, 1000);
  }, [foundCourse]);

  //returns loader during fetching
  if (loading)
    return (
      <>
        <Navbar />
        <Loader />
        <Footer />
      </>
    );

  // return CategoryNotFound
  if (!CategoryDetails)
    return (
      <>
        <Navbar />
        <CategoryNotFound />
        <Footer />
      </>
    );

  // returns actual component UI
  return (
    <>
      <Navbar />
      <div className="outer-services">
        {/* header Section */}
        <div>
          <HeaderSectionBackground
            name={"faculty"}
            textalign={"left"}
            title1={CategoryDetails?.name || "Category Title"}
            title2={""}
            desc={CategoryDetails?.description || "Category Description"}
          />
        </div>
        <div
          ref={ref2}
          className={`content-section ${
            inView2 ? "animate__animated animate__fadeInUp" : ""
          }`}
        >
          {/* Body Section  */}
          <h3 className="course-map-header">Courses</h3>
          <div className="coursemap-container coursemap-container-serv">
            {/* Mapping through Categories  */}
            {CategoryDetails.subcategories.map((course, ind) => {
              return (
                // Course Card in the Category
                <div className="category-container category-container-serv">
                  <div className="category-map-img-cont">
                    {" "}
                    <img
                      src={course.img}
                      alt="category-img"
                      onError={(e) =>
                        (e.currentTarget.src =
                          "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko=")
                      }
                    />
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
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}

export default React.memo(Category);
