import React from "react";

// COMPONENTS
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// DATA
import ClientLogosData from "../../../data/clientLogos";

function ClientLogos() {
  const responsive = {
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
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
        className="z-0 self-center  w-full"
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
    <div className="container max-w-7xl mx-auto">
      <h2 className="font-semibold mb-1 tracking-tighter text-center">
        <span>The best in the industry trust ATG</span>
      </h2>
      <div className="px-5">
        <Carousel
          responsive={responsive}
          ssr
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
