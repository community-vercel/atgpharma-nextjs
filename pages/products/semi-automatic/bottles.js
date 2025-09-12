import React from "react";

// COMPONENTS
import ManualPage from "../../../components/pageContainer/manual";
import SEOHead from "../../../components/seo";

// DATA
import manualData from "../../../data/products/manualProducts";

function Bottles() {
  const { manualProducts, seo } = manualData;
  return (
    <div>
      <SEOHead data={seo[0]} />
      <ManualPage product={manualProducts[0]} allProducts={manualProducts} />
    </div>
  );
}

export default Bottles;
