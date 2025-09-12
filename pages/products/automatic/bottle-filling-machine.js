import React from "react";

// COMPONENTS
import AutomaticPage from "../../../components/pageContainer/automatic";
import SEOHead from "../../../components/seo";

// DATA
import automaticProductsData from "../../../data/products/automaticProducts";

function Bottles() {
  const { automaticProducts, seo } = automaticProductsData;
  return (
    <div>
      <SEOHead data={seo[2]} />
      <AutomaticPage
        product={automaticProducts[2]}
        allProducts={automaticProducts}
      />
    </div>
  );
}

export default Bottles;
