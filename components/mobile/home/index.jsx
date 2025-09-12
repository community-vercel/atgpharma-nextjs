/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import { Fragment, useState, useEffect } from "react";

//COMPONENTS
import ClientLogos from "../../carousels/clientLogos/mobile";
import Footer from "../../footer/index";
import Header from "../../header";

const PRODUCTS = [
  {
    banner: "RoboCAP",
    name: "RL-300",
    header: "Fill Everything. Unlimited Possibilities.",
    subtext: "Fill all types of products Up-to 2000 units/per hour",
    src: "/Home/mob/r300.png",
  },
  {
    banner: "Semi-Automatic",
    name: "A1",
    header: "The Ultimate Cart Start Dream Machine.",
    subtext: "Fill Vape Cartridges.Automate manual filling",
    src: "/Home/mob/a1.png",
  },
  {
    banner: "RoboCAP",
    name: "RL-200",
    header: "Vape Cartridge Filling",
    subtext: "Fill Vape Cartridges 2000 Cartridges / per hour",
    src: "/Home/mob/r200.png",
  },
  {
    banner: "RoboCAP",
    name: "RL-500",
    header: "Cosmetic Fillers Choice",
    subtext: "Fill Creams, Bottles, Balms Any Flowable Creams and Topicals",
    src: "/Home/mob/r500.png",
  },
];
export default function MobileHomeView() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:hidden">
      <Header hide={scrollPosition < 1028} />
      <div className="flex flex-row justify-between px-8">
        <img
          src="/Logo_Coloured.svg"
          alt="Picture of the author"
          className="w-28 h-20"
        />
        <p className="text-sm font-semibold tracking-tighter pt-6">
          Fill Confident.
        </p>
      </div>

      <div className="h-screen relative">
        <Image
          src="/Home/mob/hero.png"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="relative px-8 h-full flex flex-col justify-between">
          <div className="mt-8">
            <h1 className="text-atgBlue text-5xl font-semibold tracking-tight">
              You have great products.
              <span className="block">We fill them.</span>
            </h1>
            <p className="my-2 font-medium tracking-tighter">
              ATG Pharma is a manufacturer of versatile filling and packaging
              equipment.
            </p>
          </div>
          <div className="flex flex-col items-center w-full pb-16">
            <a
              href="/build"
              className="bg-atgBlue text-white w-4/5  text-center py-3 text-lg"
            >
              Get started
            </a>
          </div>
        </div>
      </div>

      <ClientLogos />

      <div className="h-screen relative">
        <Image
          src="/Home/mob/one.png"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="relative px-8 h-full flex flex-col justify-between">
          <div className="mt-16">
            <h2 className="text-atgBlue text-5xl font-semibold tracking-tight text-center">
              One machine
              <span className="block">Fills All.</span>
            </h2>
            <p className="text-center font-semibold mt-2">
              Our RoboCAP Series can fill:
            </p>
            <p className="mt-4 font-medium tracking-tighter grid grid-cols-2 mx-20 gap-x-4">
              <span>Cartridges</span>
              <span>Gummies</span>
              <span>Capsules</span>
              <span>Creams</span>
              <span>Bottles</span>
              <span>Lotions</span>
              <span>Tinctures</span>
              <span>Balms</span>
            </p>
          </div>
          <div className="flex flex-col items-center w-full -mb-6">
            <a
              href="/products"
              className="bg-atgBlue text-white text-center w-4/5  py-3 text-lg"
            >
              View Our Products
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col my-6 px-8 mt-16">
        <div className="flex flex-col">
          <h2 className="text-atgBlue text-5xl font-semibold tracking-tight text-center">
            Unlimtied<span className="block">Possibilities.</span>
          </h2>
          <p className="my-2 font-medium tracking-tighter text-center">
            We manufacture versatile filling equipment that can scale with your
            business. One investment. Unlimited Possibilities.
          </p>
        </div>
        <div className="flex flex-col divide-y-2 divide-gray-100">
          <div className="grid grid-cols-2 py-8">
            <p className="text-atgBlue text-5xl font-medium tracking-tight text-center">
              300x
            </p>
            <p className=" font-medium tracking-tighter">
              Faster filling than hand filling or manual.
            </p>
          </div>
          <div className="grid grid-cols-2 py-8">
            <p className="text-atgBlue text-5xl font-medium tracking-tight text-center">
              75%
            </p>
            <p className=" font-medium tracking-tighter">
              Reduce operator costs by 75%
            </p>
          </div>
          <div className="grid grid-cols-2 py-8">
            <p className="text-atgBlue text-5xl font-medium tracking-tight text-center">
              +/-2.5%
            </p>
            <p className=" font-medium tracking-tighter">
              Accuracy, precision that is unmatched in the industry.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <a
            href="/products"
            className="bg-atgBlue text-white text-center w-4/5  py-3 text-lg"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex flex-col my-8 mt-10">
        <div className="flex flex-col  px-8">
          <h2 className="text-atgBlue text-5xl font-semibold tracking-tight text-center">
            Our Products.
          </h2>
          <p className="my-2 font-medium tracking-tighter">
            We have machines for every stage and type of product filling. We can
            take you from 0-100 and beyond. Where you start is up to you.
          </p>
        </div>
        {PRODUCTS.map((product, index) => (
          <Fragment key={index}>
            <div className="mx-8  -mb-32 z-20 mt-12">
              <div className="grid grid-cols-3  border-b border-gray-100">
                <div className="flex flex-col col-span-2">
                  {product.banner}
                  <h3 className="text-atgBlue text-5xl font-medium tracking-tight mt-2">
                    {product.name}
                  </h3>
                </div>
                <p className="my-2 font-medium tracking-tighter">
                  {product.header}
                </p>
              </div>
              <div className="grid grid-cols-2 mt-4 gap-y-6">
                <p className="text-sm font-medium tracking-tight">
                  {product.subtext}
                </p>
                <a
                  href="/products"
                  className="underline text-atgBlue hover:text-blue-900 text-right text-lg"
                >
                  Learn More
                </a>
                <div className=" bg-atgBlue w-max text-center py-2 col-span-2">
                  <a
                    href="/build"
                    className="text-white text-center py-2 w-max px-4"
                  >
                    Click to Build & Price
                  </a>
                </div>
              </div>
            </div>
            <img
              src={product.src}
              alt="Picture of the author"
              className="w-full h-auto"
            />
          </Fragment>
        ))}
      </div>

      <div className="flex flex-col my-6 px-8 mt-16">
        <div className="flex flex-col">
          <h2 className="text-atgBlue text-5xl font-semibold tracking-tight text-center">
            Don't take<span className="block">our word for it.</span>
          </h2>
          <p className="my-2 font-medium tracking-tighter text-center">
            Our clients love us.
          </p>
        </div>
        <img
          src="/Home/mob/review.png"
          alt="Picture of the author"
          className="w-full h-auto"
        />
      </div>
      <Footer />
    </div>
  );
}
