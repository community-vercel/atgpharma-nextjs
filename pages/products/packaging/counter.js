import React from "react";

// COMPONENTS
import PackagingPage from "../../../components/pageContainer/packaging";
import SEOHead from "../../../components/seo";

// DATA
import PackagingProductsData from "../../../data/products/packagingProducts";

function Creams() {
  const { PackagingProducts, seo } = PackagingProductsData;
  return (
    <div>
      <SEOHead data={seo[3]} />
      <PackagingPage
        product={PackagingProducts[3]}
        allProducts={PackagingProducts}
      />
    </div>
  );
}

export default Creams;
