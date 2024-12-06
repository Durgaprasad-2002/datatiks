import React, { useState } from "react";
import Carousel from "react-multi-carousel";

import { Link } from "react-router-dom";
import PopUpModal from "../PopUpModal";

import "react-multi-carousel/lib/styles.css";
import "./TrendingCarousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const sliderImageUrl = [
  {
    title: "React",
    img: "https://www.datatiks.com/uploads/dc7cc0b960886014a604e916781fb85a.jpg",
    link: "/services/react",
  },
  {
    title: "Tableau",
    img: "https://www.datatiks.com/uploads/5bb384f444c2efe0ea649536f77335a3.jpg",
    link: "/services/tableau",
  },
  {
    title: "Powerbi",
    img: "https://www.datatiks.com/uploads/3836fc47fea3f446050cbbe73f371240.jpg",
    link: "/services/powerbi",
  },
  {
    title: "Snowflake",
    img: "https://www.datatiks.com/uploads/2183ca90748c1648b942df6a147ef92e.jpg",
    link: "/services/snowflake",
  },
  {
    title: "Azure",
    img: "https://www.datatiks.com/uploads/4decf1713c3218b846f24a05987f0935.jpg",
    link: "/services/azure",
  },
  {
    title: "Python Full Stack",
    img: "https://www.datatiks.com/uploads/5bd2295df089ef8573d9d5a665b4701b.jpg",
    link: "/services/python_full_stack",
  },
];
const Slider = () => {
  const [showModal, setModal] = useState(false);
  return (
    <div className="parent">
      <h2 className="title">Trending Courses</h2>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.img} alt="movie" />
              <h3 className="trending-title">{imageUrl.title}</h3>
              <div className="buttons-container-trending">
                <Link to={imageUrl.link}>
                  <button className="trend-btn"> Curriculum</button>
                </Link>

                <button
                  className="trend-btn"
                  onClick={() => setModal((prev) => !prev)}
                >
                  {" "}
                  Enroll Now
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className="view-course-btn-container">
        <Link to="/services">
          <button className="view-course-btn"> VIEW ALL COURSES</button>
        </Link>
      </div>
      <PopUpModal showModal={showModal} setModal={setModal} />
    </div>
  );
};
export default Slider;
