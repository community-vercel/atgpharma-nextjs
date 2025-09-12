import React, { useState, useEffect } from "react";
import Image from "next/image";

// COMPONENTS
import Carousel from "react-multi-carousel";

// DATA
import homeData from "../../../data/home/index";

function HomeBannerMachines() {
  const { bannerCarousel } = homeData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageRoot, setImageRoot] = useState(
    bannerCarousel[currentIndex].imageRoot
  );
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 90,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CarouselImages = bannerCarousel.map((entry, index) => {
    const { iconRoot, width, height } = entry;
    return (
      <img
        key={index}
        src={iconRoot}
        alt="Picture of the author"
        width={width}
        height={height}
        className="z-0 w-1/2 mx-auto"
      />
    );
  });
  console.log(CarouselImages);

  useEffect(() => {
    setImageRoot(bannerCarousel[currentIndex].imageRoot);
  }, [currentIndex]);

  const CustomLeftArrow = ({ onClick }) => (
    <button onClick={() => onClick()} className="machine-left-arrow" />
  );
  const CustomRightArrow = ({ onClick }) => (
    <i className="machine-right-arrow" onClick={() => onClick()} />
  );

  return (
    <div className="m=pt-16 sm:m=pt-24 lg:mt-0 lg:col-span-5 transform lg:-translate-y-16 xl:-translate-y-32 lg:-mb-36">
      {/* <div className="lg:hidden"> */}
      <img
        src={imageRoot}
        alt="Picture of the author"
        width={700}
        height={700}
        className="z-0 w-5/6 mx-auto"
      />
      <svg
        className="h-10 w-10 mx-auto animate-bounce text-white self-center"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
      {/* </div> */}
      <div className="hidden lg:block w-2/3 mx-auto">
        <Carousel
          centerMode
          renderButtonGroupOutside
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          responsive={responsive}
          ssr
          arrows
          infinite
          afterChange={(previousSlide, { currentSlide, onMove }) => {
            let index;
            if (currentSlide < 2) {
              index = currentSlide + 4;
            } else if (currentSlide > 7) {
              index = currentSlide - 8;
            } else {
              index = currentSlide - 2;
            }
            console.log(index);
            setCurrentIndex(index);
          }}
        >
          {CarouselImages}
        </Carousel>
      </div>
    </div>
  );
}

const CustomRightArrow = ({ onClick }) => (
  <div className="custom-right-arrow" onClick={() => onClick()}>
    <svg
      className="h-10 w-10 mx-auto  text-white self-center"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

export default HomeBannerMachines;
