import Image from "next/image";

// COMPONENTS
import MobileView from "../components/mobile/home";
import PageContainer from "../components/pageContainer";
import CardList from "../components/cardList";
import TestimonialHeader from "../components/Panels/testimonialHeader";
import ClientLogos from "../components/carousels/clientLogos";
import HomeBannerMachines from "../components/carousels/HomeBannerMachines";
import ButtonPairs from "../components/buttons/pairedButtons";
import CTAWButton from "../components/Panels/CTAwButton";
import RangeScale from "../components/Panels/rangeScale";
import GridWCTA from "../components/productGrid/gridWCTA";
import ReverseGirdWCTA from "../components/productGrid/reversedgridWCTA";
import SEOHead from "../components/seo";
import {TestimonialCard, TestimonialCardWithImg } from "../components/TestimonialCard/TestimonialCard";

// DATA
import HomePageData from "../data/home";
import ATGCarousel from "../components/ATGCarousel/ATGCarousel";
import React from "react";
import Build from "./build";

const clientTestimonialCarouselConfig = {
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
}

const clientTestimonialCarouselItems = (clientTestimonials) => clientTestimonials.map((testimonial) => {

  return (
    <div className="w-full p-4 flex justify-center mb-12">
      <Image
        key={testimonial.imageRoot}
        src={testimonial.imageRoot}
        alt="client testimonial"
        width={850}
        height={500}
      />
    </div>
  )
})

export default function Home() {
  const {
    cardList,
    automaticSection,
    manualSection,
    manualGridCTA,
    productionSection,
    CTAwButton,
    DesktopHeaderButtonPairs,
    MobileHeaderButtonPairs,
    automaticGridCTA,
    miniCandyDepositorSpecs,
    miniCandyDepositorAC10,
    preLoadedTrayHeader,
    preLoadedTraySpecs,
    seo,
    clientTestimonials
  } = HomePageData;
  return (
    <div>
      <noscript>
        <img
          alt=""
          src="https://secure.agilecompanyintelligence.com/270007.png"
          style={{ display: "none" }}
        />
      </noscript>
      <SEOHead data={seo} />
      <MobileView />
      <div className="hidden md:block">
        {/* <PageContainer> */}
          <Build/>
          {/* <div className="h-100 relative">
            <Image
              src="/Home/Home_Page_Hero.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="z-0"
            />
            <main className="px-8 xl:px-0 py-16 sm:py-24 z-10 relative max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 lg:gap-4">
              <div className="sm:text-center lg:col-span-7 lg:text-left lg:flex flex-col lg:items-start">
                <h1 className="tracking-tight text-white  pt-6 font-bold text-4xl md:text-6xl lg:font-extrabold lg:text-5xl, xl:text-6xl">
                  <span className="block ">One Machine for</span>
                  <span className="inline">All Your Filling Needs</span>
                </h1>
                <p className="py-3 max-w-md mx-auto lg:mx-0  text-lg font-light text-white  md:mt-2 md:max-w-xl">
                  ATG Pharma is a manufacturer of versatile filling and
                  packaging equipment. Optimize filling vape cartridges,
                  capsules, lotions, bottles, creams, balms, and more.
                </p>
                <ButtonPairs data={DesktopHeaderButtonPairs} />
              </div>
              <HomeBannerMachines />
              <ButtonPairs data={MobileHeaderButtonPairs} />
            </main>
          </div>
          <ClientLogos />
          <TestimonialHeader data={productionSection} />
          <RangeScale />
          <div className="w-full px-8 py-4 mt-6 my-20 xl:px-0 max-w-7xl mx-auto">
            <ATGCarousel
                className="client-testimonial-carousel"
                infinite
                breakpoints={clientTestimonialCarouselConfig}
                LeftArrow={({ onClick }) => <i onClick={() => onClick()} className="custom-left-arrow" />}
                RightArrow={({ onClick }) => <i className="custom-right-arrow" onClick={() => onClick()} />}
            >
              {
                // clientTestimonialCarouselItems(clientTestimonials)
                HomePageData.clientTestimonialData.map(cData => cData.imageRoot ? <TestimonialCardWithImg {...cData} /> : <TestimonialCard {...cData} />)
              }
            </ATGCarousel>
          </div>
          <div className="my-20 px-8 xl:px-0 max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center mb-6">
              <span>What Makes Us Different</span>
            </h2>
            <CardList data={cardList} />
          </div>
          <GridWCTA headerData={automaticSection} data={automaticGridCTA} showGridSection />
          <ReverseGirdWCTA 
            headerData={manualSection} 
            data={manualGridCTA} 
            showGridSection 
            showButtons
            headerRootStyle={{ marginBottom: "0", paddingBottom: "1rem" }}
            sectionStyles={{ marginTop: "-1rem", marginBottom: "0.5rem"}}
          />
          <GridWCTA 
            headerData={miniCandyDepositorAC10} 
            data={miniCandyDepositorSpecs} 
            gridStyles={{ marginBottom: "10rem" }}
            headerRootStyle={{ marginBottom: "0.4rem", marginTop: 0 }}
            sectionStyles={{marginBottom: "0.8rem", marginTop: "1rem" }}
            imageSectionStyles={{ marginLeft: "2rem", marginBottom: "0.5rem" }}
          />
          <ReverseGirdWCTA
            headerData={preLoadedTrayHeader} 
            data={preLoadedTraySpecs} 
            showSpecGrid 
            headerRootStyle={{ marginBottom: "1rem", marginTop: "1rem" }} 
            sectionStyles={{ marginTop: "1rem" }} 
            gridStyles={{ justifyContent: "center", marginBottom: "1rem" }}
          />
          <CTAWButton data={CTAwButton} /> */}
        {/* </PageContainer> */}
      </div>
    </div>
  );
}
