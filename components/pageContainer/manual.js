import Image from "next/image";
import React from "react";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";

// COMPONENTS
import PageContainer from "../../components/pageContainer";
import ButtonGrid from "../../components/buttons/buttonsGird";
import ImageTextPanel from "../../components/Panels/imageWtext";
import SpecificationTable from "../../components/tables/specificationTable";
import ProductHeaderCTA from "../../components/Panels/productsHeaderCarousel";
import AutomaticCTA from "../../components/Panels/AutomaticCta";

function Manual({ product, allProducts }) {
  const { productIndex, panels, specification, basis, title } = product;
  return (
    <PageContainer>
      {/* <div className=" h-100 relative">
        <Image
          src="/products/manual/Products_Manual.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <main className="py-16 sm:py-24 px-8 xl:px-0 max-w-7xl mx-auto z-10 relative flex flex-col items-center justify-center">
          <h1 className="tracking-tight text-white  py-6 font-bold text-center text-4xl md:text-5xl lg:font-extrabold lg:text-6xl">
            <span className="block lg:inline text-white text-center">
              The First Step{" "}
            </span>
            <span className="text-white text-center">in Your Production</span>
          </h1>
          <p className="text-sm pt-4  lg:text-lg font-light text-white text-center">
            <span className="block lg:inline py-5 text-center">
              Offering solutions to smaller companies with our ML-1 filling
              system. The perfect solution for new businesses looking to test
              products, increase filling outputs up to 1000 units a day. This is
              our faster solution to get your production started.{" "}
            </span>
            <span className=" text-center">
              Simply set it up, plug it in and start filling. This can be used
              as a starting point for your business or the first step into a
              brand new product line.
            </span>
          </p>
        </main>
      </div> */}
      <div className="px-8 xl:px-0 max-w-7xl mx-auto  my-20">
        <h4 className="my-12 text-3xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-5xl lg:text-3xl xl:text-5xl md:w-auto flex flex-col items-center">
          <span className="block xl:inline">Select your Product</span>
        </h4>
        <ButtonGrid data={allProducts} currentProduct={productIndex} />
        <div className="max-w-md mx-auto grid grid-cols-3 gap-4">
          <a
            href="/products/automatic/cartridge-filling-machine"
            className="flex flex-row gap-4 text-gray-500 hover:text-atgBlue"
          >
            <ArrowCircleLeftIcon className="h-6 w-6 " aria-hidden="true" />
            <p>Automatic</p>
          </a>
          <p className="text-atgBlue text-center px-2 font-bold ">
            Semi-Automatic
          </p>
          <a
            href="/products/packaging/capper"
            className="flex flex-row gap-4 justify-end  text-gray-500 hover:text-atgBlue"
          >
            <p>Packaging</p>
            <ArrowCircleRightIcon className="h-6 w-6 " aria-hidden="true" />
          </a>
        </div>
        <ProductHeaderCTA data={product} />
        <SpecificationTable data={specification} basis={basis} title={title} />
        <h2 className="my-12 text-3xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-5xl lg:text-3xl xl:text-5xl md:w-auto flex flex-col items-center">
          <span className="block xl:inline">{title} Components</span>
        </h2>
        <ImageTextPanel data={panels} />
      </div>
      <AutomaticCTA />
    </PageContainer>
  );
}

export default Manual;
