import React from "react";

// COMPONENTS
import AutomaticPage from "../../../components/pageContainer/automatic";
import SEOHead from "../../../components/seo";

// DATA
import automaticProductsData from "../../../data/products/automaticProducts";

function Cartridges() {
  const { automaticProducts, seo } = automaticProductsData;
  return (
    <div>
      <SEOHead data={seo[0]} />
      <AutomaticPage
        product={automaticProducts[0]}
        allProducts={automaticProducts}
      />
    </div>
  );
}

export default Cartridges;
