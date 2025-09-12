import React from "react";

// COMPONENTS
import AutomaticPage from "../../../components/pageContainer/automatic";
import SEOHead from "../../../components/seo";

// DATA
import ac10ProductData from "../../../data/products/ac10DepositorProducts";

function AC10ProductDetails() {
    const { CandyDepositorProducts, seo } = ac10ProductData;

    const AdvantageListComponent = () => {
        return <ul className="text-sm lg:text-base pt-6 font-normal tracking-wider py-5 text-gray-600 self-start">
            <li>Up to <span className="font-bold">9000</span> pieces per hour</li>
            <li>Only <span className="font-bold">one operator</span> needed</li>
            <li>Compatible with <span className="font-bold">gelatin</span> gummies, candy, and chocolate</li>
        </ul>
    }
    return (
        <div>
            <SEOHead data={seo} />
            <AutomaticPage
                product={CandyDepositorProducts[0]}
                hideProductSelectionArea
                AdvantageListComponent={AdvantageListComponent}
            />
        </div>
    );
}

export default AC10ProductDetails;
