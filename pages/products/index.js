// COMPONENTS
import PageContainer from "../../components/pageContainer";
import CarouselTextPanel from "../../components/Panels/CarouselWText";
import SEOHead from "../../components/seo";

// DATA
import ProductPageData from "../../data/products";

function Products() {
  const { panels, seo } = ProductPageData;
  return (
    <div>
      <SEOHead data={seo} />
      <PageContainer>
        <div className="px-8 xl:px-0 max-w-7xl mx-auto my-20">
          <h1 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center">
            <span className="block xl:inline">Select your Product</span>
          </h1>
          <CarouselTextPanel data={panels} />
        </div>
      </PageContainer>
    </div>
  );
}

export default Products;
