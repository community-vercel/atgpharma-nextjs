import React from "react";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";

//TODO: this component could have utilized renderProp pattern to make it more extensible. Had to add many different checks to hide/show part of the UI, which is very inefficient
// COMPONENTS
import PageContainer from "./index";
import ButtonGrid from "../buttons/buttonsGird";
import ImageTextPanel from "..//Panels/imageWtext";
import SpecificationTable from "../tables/specificationTable";
import ProductHeaderCTA from "../Panels/productsHeaderCarousel";
import PackagingCTA from "../Panels/packagingCTA";
import PackagingDemo from "../Panels/packagingDemo";
import SpecComparison from "../tables/SpecComparison";
import ProductPanelSection from "../Panels/ProductPanelSection";

function AutomaticPage({ product, allProducts, hideProductSelectionArea, AdvantageListComponent, renderComponent }) {
  const {
    productIndex,
    panels,
    specification,
    hasSpecComparison,
    productsForComparison,
    packaging,
    basis,
    packagingCTA,
    title,
    specificationTitle,
    hideBottomRedirection,
    headerProducts,
    hideComponentTitles,
    showPartnerLogos,
    partnerInfo,
    renderComponentData
  } = product;
  return (
    <PageContainer>
      {/* <div className=" h-100 relative">
        <Image
          src="/products/automatic/Produsts_Auto.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <main className="py-20 px-8 xl:px-0 max-w-7xl mx-auto z-10 relative flex flex-col items-center justify-center">
          <h1 className="tracking-tight text-white  py-6 font-bold text-center text-4xl md:text-5xl lg:font-extrabold lg:text-6xl">
            <span className="block text-white text-center">
              Take Control of Your Production
            </span>
            <span className="block text-white text-center">
              With Automation
            </span>
          </h1>
          <p className="text-sm pt-4  lg:text-lg font-light text-white self-center">
            <span className="block py-5  text-center">
              The RoboCAP provides a filling system that can meet all your
              current and future filling needs with one robot.
            </span>
          </p>
        </main>
      </div> */}
      <div className="px-8 xl:px-0 max-w-7xl mx-auto  my-20">
        {!hideProductSelectionArea && (
          <>
            <h4 className="my-12 text-3xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-5xl lg:text-3xl xl:text-5xl md:w-auto flex flex-col items-center">
              <span className="block xl:inline">Select your Product</span>
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
              <p className="text-atgBlue text-left px-2 font-bold ">Automatic</p>
              <a
                href="/products/packaging/capper"
                className="flex flex-row gap-4 justify-end  text-gray-500 hover:text-atgBlue"
              >
                <p>Packaging</p>
                <ArrowCircleRightIcon className="h-6 w-6 " aria-hidden="true" />
              </a>
            </div>
          </>
        )}
        <ProductHeaderCTA data={product} AdvantageListComponent={AdvantageListComponent} />
        {
          Array.isArray(headerProducts) && headerProducts.length > 0 ?
            headerProducts.map((hp, i) => <ProductPanelSection key={i} sectionInfo={hp} />) : null
        }
        {
          specification ? 
          <>
            {(hasSpecComparison) ?
              <SpecComparison data={specification} basis={basis} title={title} productsForComparison={productsForComparison} specificationTitle={specificationTitle} /> :
              <SpecificationTable data={specification} basis={basis} title={title} specificationTitle={specificationTitle} />
            }
          </> : null
        }
        {
          (!hideComponentTitles && title) && (
            <h2 className="my-12 text-3xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-5xl lg:text-3xl xl:text-5xl md:w-auto flex flex-col items-center">
              <span className="block xl:inline">{title} Components</span>
            </h2>)
        }
        {
          Array.isArray(panels) && <ImageTextPanel data={panels} />
        }
        {
          hideBottomRedirection
            ? null
            : packaging ? <PackagingDemo /> : <PackagingCTA data={packagingCTA} />
        }
        {
          typeof renderComponent === "function" && renderComponent(renderComponentData)
        }
      </div>
    </PageContainer>
  );
}

export default AutomaticPage;
