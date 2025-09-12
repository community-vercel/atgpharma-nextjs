import Image from "next/image";
import ReactPlayer from "react-player";
import { useState } from "react";

// COMPONENTS
import PageContainer from "../../components/pageContainer";
import CardList from "../../components/cardList";
import HeaderWText from "../../components/Panels/headerWtext";
import ProfileCards from "../../components/profileCards";
import ClientLogos from "../../components/carousels/clientLogos";
import CTAWIcons from "../../components/Panels/CTAwIcons";
import QuestionsCTA from "../../components/Panels/questionsCTA";
import NewsLetter from "../../components/Panels/newsLetter";
import SeoHead from "../../components/seo";
import TestimonialPanel from "../../components/Panels/testimonial";

// DATA
import AboutPageData from "../../data/About";

function About() {
  const [video, setVideo] = useState(false);
  const {
    cardList,
    driveFactor,
    Teams,
    Profiles,
    profilesHeader,
    CtaWIconsData,
    Testimonial,
    seo,
  } = AboutPageData;

  return (
    <div>
      <SeoHead data={seo} />
      <PageContainer>
        <div className="relative">
          {/* <Image
            src="/About/VidPlaceHolder.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0"
          /> */}
          <div className="relative">
            <ReactPlayer
              url="https://youtu.be/rMIxslwvmy0"
              light="/About/VidPlaceHolder.jpg"
              playIcon={
                <svg
                  onClick={() => setVideo(!video)}
                  className="h-20 w-20 text-blue-500 z-40"
                  fill="currentColor"
                  viewBox="0 0 84 84"
                >
                  <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                  <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                </svg>
              }
              width="100%"
              height={650}
            />
          </div>
          <main
            className={` ${
              video ? "hidden" : ""
            } z-10 absolute top-0 right-1 left-1 px-8 xl:px-2 py-24 w-7xl mx-auto flex flex-col items-center justify-center`}
          >
            <h1 className="tracking-tight text-white  py-6 pb-12 font-bold text-center text-4xl md:text-5xl lg:font-extrabold lg:text-6xl ">
              <span className="block">Proudly Supporting</span>
              <span className="block xl:inline">
                The Manufacturing Industry
              </span>
            </h1>
            {/* <div  onClick={() => setVideo(!video)} className="inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
              <svg className="h-20 w-20 text-blue-500" fill="currentColor" viewBox="0 0 84 84">
                <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
              </svg>
            </div> */}
            <p className="text-2xl pt-24 pb-20 underline tracking-tight font-medium text-white text-center">
              WELCOME TO ATG PHARMA
            </p>
          </main>
        </div>
        <HeaderWText data={driveFactor} />
        <TestimonialPanel data={Testimonial} />
        <HeaderWText data={Teams} />
        <div className="px-8 xl:px-0 max-w-7xl mx-auto my-20">
          <CardList data={cardList} />
        </div>
        <h2 className="max-w-7xl mx-auto mt-24 text-center mb-12 text-3xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-5xl lg:text-3xl xl:text-5xl">
          <span className="block xl:inline">Contributing to Success</span>
        </h2>
        <CTAWIcons data={CtaWIconsData} />
        <ClientLogos />
        <div className="container px-8 xl:px-0 max-w-7xl mx-auto flex flex-col items-center">
          <div className="space-y-4 sm:grid grid-cols-4  xl:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-4">
            <div className="col-span-2 xl:col-span-1 pt-0 lg:pt-14">
              <Image
                src="/About/ExecTeam.jpg"
                alt="Picture of the author"
                width={800}
                height={550}
                className="z-0 rounded-3xl"
              />
            </div>
            <div className="px-6 sm:px-8  md:col-span-2  md:flex ">
              <div className="space-y-4">
                <div className="text-3xl leading-6 font-medium space-y-1">
                  <h3 className="transform -translate-y-2 text-3xl lg:text-4xl text-center lg:text-left  font-bold text-atgBlue ">
                    How It All Started
                  </h3>
                </div>
                <p className="-mt-8  text-base lg:text-lg my-4 leading-6 text-gray-500 text-center lg:text-left ">
                  <span className="block">
                    ATG Pharma was founded in 2003 by Mike Lio, with 20 years of
                    engineering experience in the pharmaceutical industry. ATG
                    Pharma originally started as an equipment validation and
                    supply company for the pharmaceutical industry.
                  </span>
                  <span className="block py-5">
                    In 2008, Mike discovered a market gap for companies who were
                    not interested in purchasing million-dollar fully-automatic
                    equipment—leading to the development of small-scale
                    equipment in his home garage.
                  </span>
                  <span className="block">
                    The focus was and is to this day to develop and source the
                    highest quality components from local North American vendors
                    while providing a personalized customer experience. Today,
                    our state-of-the-art filling and packaging equipment helps
                    businesses to semi and fully automate their production
                    lines, optimizing filling and packaging of vape cartridges,
                    capsules, oils, liquids, lotions, creams and balms.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-8 px-8 xl:px-0 max-w-7xl mx-auto flex flex-col items-center">
          <div className="pb-12 text-center">
            <div className="space-y-8 sm:space-y-12">
              <HeaderWText data={profilesHeader} />
              <ProfileCards data={Profiles} />
            </div>
          </div>
        </div>
        <NewsLetter />
        <QuestionsCTA />
      </PageContainer>
    </div>
  );
}

export default About;
