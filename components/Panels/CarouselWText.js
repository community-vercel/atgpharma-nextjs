// COMPONENTS
import Carousel from "react-multi-carousel";

function ImageText({ data }) {
  const panels = data.map((panel, index) => {
    const {
      title,
      subTitle1,
      subTitle2,
      text,
      buttons,
      imageFirst,
      leftButtonText,
      RightButtonText,
      imageRoot,
      leftButtonAction,
      RightButtonAction,
      landingCarousel,
    } = panel;
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
    const CarouselImages = landingCarousel.map((entry, index) => {
      const { iconRoot, width, height } = entry;
      return (
        <img
          key={index}
          src={iconRoot}
          alt="Picture of the author"
          width={width}
          height={height}
          className="z-0 md:w-4/5 w-5/6 mx-auto"
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
      <div key={index} className="grid grid-cols-1 gap-8  lg:grid-cols-2 my-12">
        <div
          className={`hidden ${
            imageFirst ? "lg:block" : "hidden"
          } col-span-1 my-auto`}
        >
          <Carousel
            responsive={responsive}
            arrows
            autoPlaySpeed={3000}
            infinite
            showDots
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {CarouselImages}
          </Carousel>
        </div>
        <div className="col-span-1 text-center md:text-center lg:text-left flex flex-col items-start">
          <h3 className="mt-12 text-5xl tracking-tight font-extrabold w-full text-atgBlue">
            <span>{title}</span>
          </h3>
          <p className="mt-2 pb-6 text-xl self-center lg:self-start tracking-wider font-bold text-gray-900">
            <span className="block">{subTitle1}</span>
            <span>{subTitle2}</span>
          </p>
          {/* lg:w-4/6  */}
          <p className="text-base lg:text-ld font-light tracking-wider py-5 text-gray-500">
            <span className=" block">{text}</span>
          </p>
          <div className="block lg:hidden col-span-1 w-full  mx-auto my-auto">
            <Carousel
              responsive={responsive}
              arrows
              autoPlaySpeed={3000}
              infinite
              showDots
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
            >
              {CarouselImages}
            </Carousel>
          </div>
          <div
            className={`${
              buttons ? "visible" : "hidden"
            } lg:mx-0 mx-auto py-10 flex justify-center lg:justify-around flex-col lg:flex-row`}
          >
            <a
              href={leftButtonAction}
              className="mx-2 flex items-center justify-center px-12 py-3  md:py-4 border-2 border-transparent hover:border-atgBlue rounded-full shadow-sm text-sm  text-white hover:text-atgBlue bg-gradient-to-r from-buttonStart to-atgBlue hover:from-white hover:to-white "
            >
              {leftButtonText}
            </a>
            <a
              href={RightButtonAction}
              className="mx-2 flex items-center justify-center px-12 py-3  md:py-4 border-2 hover:border-transparent border-atgBlue rounded-full shadow-sm text-sm  hover:text-white text-atgBlue bg-gradient-to-r hover:from-buttonStart hover:to-atgBlue from-white to-white "
            >
              {RightButtonText}
            </a>
          </div>
        </div>
        <div
          className={`hidden ${
            imageFirst ? "hidden" : "lg:block"
          }  col-span-1 my-auto`}
        >
          <Carousel
            responsive={responsive}
            arrows
            autoPlaySpeed={3000}
            infinite
            showDots
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {CarouselImages}
          </Carousel>
        </div>
      </div>
    );
  });
  return <>{panels}</>;
}

export default ImageText;
