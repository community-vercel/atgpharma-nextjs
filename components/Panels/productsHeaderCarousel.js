import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
// import 'react-multi-carousel/lib/styles.css';

import ButtonPairs from "../buttons/pairedButtons";
import ATGButton from "../ATGButton/ATGButton";

function classNames(...classes) {
  const result = [];
  for (let i = 0; i < classes.length; i++) {
    switch (typeof classes[i]) {
      case "string": {
        result.push(classes[i]);
        break;
      }

      case "object": {
        const keys = Object.keys(classes[i]);
        if(keys.length === 1 && classes[i][keys[0]]) result.push(keys[0])
        break
      }
    }
  }
  return result.join(" ");
}

function ProductHeaderCarousel({ data, AdvantageListComponent }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const {
    title,
    subTitle,
    actionButtonPair,
    imageRoot,
    carousel,
    descriptionP1,
    descriptionP2,
    downloadBrochureBtn,
    showDownloadBrochureBtn,
    productTitleStyles,
  } = data;
  console.log("AdvantageListComponent", Boolean(AdvantageListComponent));
  const CarouselImages = carousel.map((entry, index) => {
    const { imageRoot } = entry;
    return (
      <img
        key={index}
        src={imageRoot}
        alt="Picture of the author"
        className="z-0 w-5/6 mx-auto max-w-16"
      />
    );
  });
  const CustomDot = ({
    index,
    onClick,
    active,
    carouselState: { currentSlide },
  }) => (
    <button
      onClick={(e) => {
        onClick();
        e.preventDefault();
      }}
      // className={classNames("custom-dot max-w-24", {
      //   "custom-dot--active": active,
      // })}
      className="w-24 h-28 focus:outline-none bg-contain bg-no-repeat bg-top relative"
      style={{backgroundImage: `url(${carousel[index].imageRoot})`}}
    >
      {/* {CarouselImages[index]}  bottom-8 left-2/4 */}
      <span
        className={classNames("custom-circle absolute inset-x-0 bottom-0", {
          "custom-circle--active": active,
        })}
      />
    </button>
  );

  const CustomLeftArrow = ({ onClick }) => (
    <i onClick={() => onClick()} className="custom-left-arrow" />
  );
  const CustomRightArrow = ({ onClick }) => (
    <i className="custom-right-arrow" onClick={() => onClick()} />
  );
  const downloadBrochureHandler = () => {
    const { url } = downloadBrochureBtn;

    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="grid grid-cols-1 gap-8  lg:grid-cols-2 ">
      <div style={productTitleStyles} className="col-span-1 text-left flex flex-col items-center lg:items-start justify-start mt-0 lg:mt-12">
        <h1 className="mt-12 text-5xl tracking-normal font-extrabold text-atgBlue text-center lg:text-left">
          <span className="block xl:inline">{title}</span>
        </h1>
        <p className="mt-2 pb-6 text-xl tracking-wider font-bold text-gray-900 flex flex-col items-center">
          <span className="block xl:inline">{subTitle}</span>
        </p>
        <div className="flex lg:hidden col-span-1 flex-col justify-end items-end">
          <img
            src={imageRoot}
            alt="Picture of the author"
            className="z-0 w-full md:w-2/3 mx-auto"
          />
        </div>
        <p className="text-sm lg:text-base pt-6 font-light tracking-wider py-5 text-gray-500 self-start">
          <span className=" block">{descriptionP1}</span>
          <span className="pt-3 block">{descriptionP2}</span>
        </p>
        {!!AdvantageListComponent && <AdvantageListComponent />}
        <ButtonPairs classes={"pb-4"} data={actionButtonPair} />
        {showDownloadBrochureBtn && (<ATGButton buttonType="primary" onClick={downloadBrochureHandler} label={downloadBrochureBtn.downloadBrochureLabel} />)}
      </div>
      <div className="hidden sm:text-center col-span-1  lg:block items-center text-center my-auto justify-center">
        {/* <Carousel
          responsive={responsive}
          arrows
          autoPlaySpeed={3000}
          infinite
        >
          {CarouselImages}
        </Carousel> */}
        <Carousel
          showDots
          slidesToSlide={1}
          containerClass="carousel-with-custom-dots"
          responsive={responsive}
          partialVisible
          infinite
          renderDotsOutside
          customDot={<CustomDot />}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {CarouselImages}
        </Carousel>
      </div>
    </div>
  );
}

export default ProductHeaderCarousel;
