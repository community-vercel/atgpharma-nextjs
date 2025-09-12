import Image from "next/image";
import ReactPlayer from "react-player";
import PartnerList from "../PartnerInfo";

function ImageText({ data }) {
  const panels = data.map((panel, index) => {
    const {
      title,
      subTitle,
      text,
      textSpan,
      buttons,
      imageFirst,
      leftButtonText,
      RightButtonText,
      imageRoot,
      leftButtonAction,
      RightButtonAction,
      url,
      isGummy,
      showPartnerLogos,
      partnerInfo,
      ImageTextStyles,
      productImageStyles,
      featuredVideoUrl,
      featuredVideoTitle
    } = panel;
    return (
      <>
        <div key={index} style={ImageTextStyles} className="grid grid-cols-1 gap-8  lg:grid-cols-2 my-8">
          <div
            className={`hidden ${
              imageFirst ? "lg:flex" : "hidden"
            } col-span-1 flex-col justify-start items-start`}
          >
            <img
              src={imageRoot}
              alt="Picture of the author"
              width={450}
              height={450}
              className={`${url ? "hidden" : " "} z-0 md:w-5/6 w-5/6 mr-auto`}
              style={{...productImageStyles}}
            />
            <div className={` ${url ? " " : "hidden "} w-full`}>
              <ReactPlayer url={url} controls muted loop playing width="100%" />
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center text-center lg:text-left">
            <h3 className="text-4xl tracking-tight font-extrabold w-full text-atgBlue">
              <span>{title}</span>
            </h3>
            <p className="mt-2 pb-4 text-xl self-center lg:self-start tracking-wider font-bold text-gray-900">
              <span>{subTitle}</span>
            </p>
            <p className="text-sm lg:text-base font-light tracking-wider py-3 text-gray-500">
              <span className=" block tracking-wider">{text}</span>
              <span className=" block pt-4 tracking-wider">{textSpan}</span>
            </p>
            <div className={`${isGummy ? "visible" : "hidden"}`}>
              <h3 className="text-xl text-gray-500 font-bold tracking-wide">
                Visit our suppliers:
              </h3>
              <div className="my-2 flex flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="https://darkcitymolds.com/"
                  className=" underline text-atgBlue text-base hover:text-gray-600"
                >
                  Dark City Molds
                </a>{" "}
                &#38;
                <a
                  href="https://boldmaker.com/"
                  className=" underline text-atgBlue text-base hover:text-gray-600"
                >
                  Bold maker
                </a>
              </div>
            </div>
            <div className="flex lg:hidden col-span-1 flex-col justify-end items-end">
              <img
                src={imageRoot}
                alt="Picture of the author"
                width={450}
                height={450}
                className={` ${url ? "hidden" : " "} z-0 md:w-3/5 w-5/6 mx-auto`}
              />
              <div className={` ${url ? " " : "hidden "} w-full`}>
                <ReactPlayer url={url} controls width="100%" />
              </div>
            </div>
            <div
              className={`${
                buttons ? "visible" : "hidden"
              } lg:mx-0 mx-auto py-10 flex justify-center lg:justify-around flex-col lg:flex-row`}
            >
              <a
                href={leftButtonAction}
                className="mx-2 flex items-center justify-center px-12 py-3  md:py-4 border-2 border-transparent rounded-full shadow-sm bg-card text-sm  text-white hover:bg-gray-50"
              >
                {leftButtonText}
              </a>
              <a
                href={RightButtonAction}
                className="mt-2 lg:mt-0 mx-2 flex items-center justify-center px-12 py-3 md:py-4 border-2 border-atgBlue rounded-full shadow-sm bg-white text-sm  text-atgBlue hover:bg-gray-50"
              >
                {RightButtonText}
              </a>
            </div>
          </div>
          {
            (featuredVideoUrl && featuredVideoTitle) && (
              <div className="w-full col-span-2 max-w-2xl flex flex-col items-center mx-auto">
                <h3 className="mb-4 text-4xl text-atgBlue font-bold">{featuredVideoTitle}</h3>
                <ReactPlayer url={featuredVideoUrl} controls muted loop playing width="100%" />
              </div>
            )
          }
          
          <div
            className={`hidden ${
              imageFirst ? "hidden" : "lg:flex"
            }  col-span-1 flex-col justify-end items-end`}
          >
            <img
              src={imageRoot}
              alt="Picture of the author"
              width={450}
              height={450}
              className={`${url ? "hidden" : " "} z-0 md:w-5/6 w-5/6 ml-auto`}
              style={{...productImageStyles}}
            />
            <div className={` ${url ? " " : "hidden "} w-full`}>
              <ReactPlayer url={url} controls muted loop playing width="100%" />
            </div>
          </div>
        </div>
        {showPartnerLogos &&  <PartnerList partnerInfo={partnerInfo} />}
      </>
    );
  });
  return <>{panels}</>;
}

export default ImageText;
