import React from "react";
import "./Slide.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slide = ({ children }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1150 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1150, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="slide block justify-center">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">
          Popular professional services
        </h1>
        <Carousel responsive={responsive}>{children}</Carousel>
      </div>
    </div>
  );
};

export default Slide;
