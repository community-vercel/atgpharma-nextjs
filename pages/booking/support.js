// COMPONENTS
import PageContainer from "../../components/pageContainer";
import SeoHead from "../../components/seo";

const seo = {
  title: "Customer Support & Booking | ATG Pharma",
  description:
    "Book time to talk with out support technicians to help you set up and troubleshoot your automatic filling equiptment from ATG Pharma",
};

function Booking() {
  return (
    <div>
      <SeoHead data={seo} />

      <PageContainer>
        <div className="container overflow-visible my-16 max-w-7xl mx-auto h-screen">
          <iframe
            title="scheduling ATG appointments"
            src="https://outlook.office365.com/owa/calendar/ATGSupport@atgpharma.com/bookings/"
            width="100%"
            height="100%"
            frameBorder="0"
          />
        </div>
      </PageContainer>
    </div>
  );
}

export default Booking;
