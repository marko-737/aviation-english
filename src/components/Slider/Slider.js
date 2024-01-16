import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Type from "../Home/Type";
import IcaoLevel from "../IcaoLevel";
import { FcPrevious, FcNext } from "react-icons/fc";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const CustomPrevArrow = ({ onClickHandler }) => (
    <div className="custom-prev-arrow" onClick={onClickHandler}>
      <FcPrevious />
    </div>
  );

  const CustomNextArrow = ({ onClickHandler, hasPrev }) => (
    <div className="custom-next-arrow" onClick={onClickHandler}>
      <FcNext />
    </div>
  );

  return (
    <div>
      <p className="main-title-english">Aviation English for</p>
      <Carousel
        autoPlay
        interval={5000}
        transitionTime={800}
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        onChange={handleSlideChange}
        showThumbs={false}
        stopOnHover={false}
        emulateTouch={true}
        swipeable={false}
        renderArrowPrev={(clickHandler) => (
          <CustomPrevArrow onClickHandler={clickHandler} />
        )}
        renderArrowNext={(clickHandler) => (
          <CustomNextArrow onClickHandler={clickHandler} />
        )}
      >
        <div className="pilots-img">
          {currentSlide === 0 && <Type text="Pilots" pause={2750} />}
          <IcaoLevel />
        </div>
        <div className="atc-img">
          {currentSlide === 1 && (
            <Type text="Air Traffic Controllers" pause={1000} delay={100} />
          )}
          <IcaoLevel />
        </div>
        <div className="cabin-img">
          {currentSlide === 2 && <Type text="Cabin crew" pause={2400} />}
        </div>
      </Carousel>
    </div>
  );
}
