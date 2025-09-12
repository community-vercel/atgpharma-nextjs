import React from "react";

// COMPONENTS
import AutomaticPage from "../../../components/pageContainer/automatic";
import SEOHead from "../../../components/seo";

// DATA
import automaticProductsData from "../../../data/products/automaticProducts";

function Creams() {
  const { automaticProducts, seo } = automaticProductsData;
  return (
    <div>
      <SEOHead data={seo[4]} />
      <AutomaticPage
        product={automaticProducts[4]}
        allProducts={automaticProducts}
      />
    </div>
  );
}

export default Creams;
