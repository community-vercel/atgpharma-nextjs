import React from "react";

// COMPONENTS
import AutomaticPage from "../../../components/pageContainer/automatic";
import SEOHead from "../../../components/seo";

// DATA
import automaticProductsData from "../../../data/products/automaticProducts";

function Capsules() {
  const { automaticProducts, seo } = automaticProductsData;
  return (
    <div>
      <SEOHead data={seo[3]} />
      <AutomaticPage
        product={automaticProducts[3]}
        allProducts={automaticProducts}
      />
    </div>
  );
}

export default Capsules;
