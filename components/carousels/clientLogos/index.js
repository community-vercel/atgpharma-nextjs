import React from "react";

// COMPONENTS
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// DATA
import ClientLogosData from "../../../data/clientLogos";

function ClientLogos() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CarouselImages = ClientLogosData.map((entry, index) => {
    const { iconRoot, width, height } = entry;
    return (
      <img
        key={index}
        src={iconRoot}
        alt="Picture of the author"
        width={width}
        height={height}
        className="z-0 self-center  w-4/6 lg:w-auto mx-auto pb-4 lg:pb-0"
      />
    );
  });
  const CustomLeftArrow = ({ onClick }) => (
    <i onClick={() => onClick()} className="custom-left-arrow" />
  );
  const CustomRightArrow = ({ onClick }) => (
    <i className="custom-right-arrow" onClick={() => onClick()} />
  );

  return (
    <div className="container px-8 xl:px-0 my-12 mb-24 max-w-7xl mx-auto">
      <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center mb-12 mt-24">
        <span>The </span>
        <span className="text-atgBlue">best in the industry </span>
        <span>trust ATG </span>
      </h2>
      {/* <p className="text-md lg:text-lg my-6 pb-2 font-bold leading-6 text-gray-500 text-center">Professionals of the world’s leading companies choose ATG Pharma for their production.</p> */}
      <div className="hidden mt-8 lg:grid grid-cols-2 gap-8 md:grid-cols-6">
        {CarouselImages}
      </div>
      <div className="lg:hidden">
        <Carousel
          responsive={responsive}
          ssr
          showDots
          infinite
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {CarouselImages}
        </Carousel>
      </div>
    </div>
  );
}

export default ClientLogos;
