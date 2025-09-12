import React from "react";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";

// COMPONENTS
import PageContainer from "./index";
import ButtonGrid from "../buttons/buttonsGird";
import QuestionCta from "../Panels/questionsCTA";
import SpecificationTable from "../tables/specificationTable";
import ProductHeaderCTA from "../Panels/productsHeaderCTA";
import VideoCTA from "../Panels/videoWdescription";
import Mixer from "../Panels/mixer";

function Packaging({ product, allProducts }) {
  const { productIndex, specification, basis, title } = product;
  return (
    <PageContainer>
      {/* <div className=" h-100 relative">
        <Image
          src="/products/packaging/Product_Packaging.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <main className="py-20 px-8 xl:px-0 max-w-7xl mx-auto z-10 relative flex flex-col items-center justify-center">
          <h1 className="tracking-tight text-white  py-6 font-bold text-center text-4xl md:text-5xl lg:font-extrabold lg:text-6xl">
            <span className="block text-white text-center">
              Final Step to Complete
            </span>
            <span className="block text-white text-center">
              Your Production
            </span>
          </h1>
          <p className="text-sm pt-4  lg:text-lg font-light text-white self-center">
            <span className="block py-5 text-center">
              Our packaging solutions are designed to keep up with the flow of
              your production line. With automated packaging equipment, we can
              increase your production tolerance and guarantee proper capping,
              close, count and label each time
            </span>
          </p>
        </main>
      </div> */}
      <div className="px-8 xl:px-0 max-w-7xl mx-auto my-20">
        <h4 className="my-12 text-3xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-5xl lg:text-3xl xl:text-5xl md:w-auto flex flex-col items-center">
          <span className="block xl:inline">Select your System</span>
        </h4>
        <ButtonGrid data={allProducts} currentProduct={productIndex} />
        <div className="max-w-md mx-auto grid grid-cols-3 gap-4">
          <a
            href="/products/semi-automatic/cartridges"
            className="flex flex-row gap-4 text-gray-500 hover:text-atgBlue"
          >
            <ArrowCircleLeftIcon className="h-6 w-6 " aria-hidden="true" />
            <p>Semi-Automatic</p>
          </a>
          <p className="text-atgBlue text-center px-2 font-bold ">Packaging</p>
          <a
            href="/products/automatic/cartridge-filling-machine"
            className="flex flex-row gap-4 justify-end  text-gray-500 hover:text-atgBlue"
          >
            <p>Automatic</p>
            <ArrowCircleRightIcon className="h-6 w-6 " aria-hidden="true" />
          </a>
        </div>
        <ProductHeaderCTA data={product} />
        {!product.mixer && <VideoCTA data={product} />}
        {!product.mixer && (
          <SpecificationTable
            data={specification}
            basis={basis}
            title={title}
          />
        )}
      </div>
      {product.mixer && <Mixer data={product} />}
      <div className="px-8 xl:px-0 max-w-7xl mx-auto my-20">
        <QuestionCta />
      </div>
    </PageContainer>
  );
}

export default Packaging;
