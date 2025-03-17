import React, { useState } from "react";
import Carousel from "react-multi-carousel";

import { Link } from "react-router-dom";
import PopUpModal from "../PopUpModal";
import Star from "../../assets/imgs/star.jpg";

import "react-multi-carousel/lib/styles.css";
import "./TrendingCarousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
    name: "Durga Prasad",
    desc: " It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    company: "Google",
    rating: 5,
  },
  {
    name: "Durga Prasad",
    desc: " It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    company: "Google",
    rating: 5,
  },
  {
    name: "Durga Prasad",
    desc: "to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    company: "Google",
    rating: 5,
  },
];
const Slider = () => {
  const [showModal, setModal] = useState(false);
  return (
    <>
      <div className="parent">
        <h2 className="title">Feedback</h2>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {sliderImageUrl.map((imageUrl, index) => {
            return (
              <div className="slider" key={index}>
                <div>
                  <div className="star-container">
                    {Array.from({ length: Number(imageUrl.rating) }, (_, i) => (
                      <img src={Star} className="star-logo" />
                    ))}
                  </div>
                  <p className="feedback-desc">{imageUrl.desc}</p>
                </div>

                <div>
                  <h4 className="feeback-title">{imageUrl.name}</h4>
                  <h5 className="feeback-company">{imageUrl.company}</h5>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};
export default Slider;
