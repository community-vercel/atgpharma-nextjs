import Image from "next/image";

// COMPONENTS
import PageContainer from "../../components/pageContainer";
import CardList from "../../components/cardList";
import HeaderWText from "../../components/Panels/headerWtext";
import ProfileCards from "../../components/profileCards";
import ReviewCards from "../../components/cardList/reviews";
import QuestionsCTA from "../../components/Panels/questionsCTA";
import SEOHead from "../../components/seo";

// DATA
import SupportPageData from "../../data/support";

function Support() {
  const { cardList, Team, Profiles, Reviews, seo } = SupportPageData;

  return (
    <div>
      <SEOHead data={seo} />
      <PageContainer>
        <div className=" h-100 relative">
          <Image
            src="/Banner_Support_Desktop.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0"
          />
          <main className="py-16 px-8 xl:px-0 max-w-7xl mx-auto sm:py-24 z-10 relative flex-col items-center text-center justify-center">
            <h1 className="tracking-tight text-white  py-6 font-bold text-center text-4xl md:text-5xl lg:font-extrabold lg:text-6xl">
              <span className="block text-white">We are Here to Help</span>
            </h1>
            <p className="text-sm lg:text-lg font-light text-white self-center">
              <span className=" block py-5">
                ATG Pharma Inc. is the industry leader for not only
                top-of-the-line quality filling equipment but also aftermarket
                support and innovation.
              </span>
              <span className="block pb-5">
                Customers that join the ATG Pharma community receive more than
                just equipment to optimize their filling production when working
                with us. They are always looked after with our customer support
                training and feel reassured that they will continue to access
                the most innovative industry technology.
              </span>
            </p>
            <div className="py-10 sm:flex     items-center justify-center gap-3">
              <div className="rounded-full ">
                <a
                  href="/booking/support"
                  className="flex items-center justify-center px-8 py-3 md:py-4 border-2 hover:border-transparent border-atgBlue rounded-full shadow-sm bg-gradient-to-r hover:from-buttonStart hover:to-atgBlue from-white to-white text-md font-medium hover:text-white text-atgBlue md:px-14"
                >
                  BOOK SUPPORT
                </a>
              </div>
              {/* <div className="rounded-full ">
                <a
                  href="https://www.customer.onesupply.co/support"
                  target="_blank"
                  className="flex items-center justify-center px-8 py-3 md:py-4 border-2 hover:border-transparent border-atgBlue rounded-full shadow-sm bg-gradient-to-r hover:from-buttonStart hover:to-atgBlue from-white to-white text-md font-medium hover:text-white text-atgBlue md:px-14"
                >
                  CREATE TICKET
                </a>
              </div> */}
            </div>
          </main>
        </div>
        <div className="container my-16 px-8 xl:px-0 max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="my-12 text-3xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-5xl lg:text-3xl xl:text-5xl md:w-auto flex flex-col items-center">
            <span className="block xl:inline">How We Can Help</span>
          </h2>
          <CardList data={cardList} />
          <div className="pb-12 text-center">
            {/* <div className="space-y-8 sm:space-y-12">
              <HeaderWText data={Team} />
              <ProfileCards data={Profiles} />
            </div> */}
          </div>
          {/* unique feature does nore require HOC */}
          <h2 className="mt-20 text-3xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-5xl lg:text-3xl xl:text-5xl md:w-auto flex flex-col items-center">
            <span className="block xl:inline">
              What Our Clients Say About ATG
            </span>
          </h2>
          <p className="mt-5 mb-16 text-2xl tracking-tight font-bold text-atgBlue md:w-auto flex flex-col items-center">
            <span className="block xl:inline">
              Trusted by top Industry Leaders
            </span>
          </p>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            <div className="sm:text-center col-span-1 text-left flex items-center justify-center">
              <Image
                // src="/support_testimonial.png"
                src="/support/Priyanka_2.jpg"
                alt="Picture of the author"
                width={384}
                // height={430}
                height={418}
              />
            </div>
            <div className="col-span-1 text-center lg:text-left flex flex-col items-center lg:items-start">
              <Image
                src="/adastra_logo.png"
                alt="Picture of the author"
                width={200}
                height={45}
              />
              <p className="text-sm font-light tracking-wider w-full lg:w-4/6 py-6 text-gray-500 ">
                <span className=" block">
                  "Robocap RL 300 machine and MonoBlox Cartridge Press are very
                  user-friendly equipment. ATG Pharma provided clear SOPs and
                  manuals for the operation of the equipment. I am very happy
                  with the ATG Pharma support team’s solution-oriented customer
                  service and quick turnaround on troubleshooting requests. The
                  support team is always available for video calls with Adastra
                  Labs at short notice."
                </span>
              </p>

              <h3 className="mt-4 text-2xl font-bold text-atgBlue flex flex-col items-center">
                <span className="block xl:inline">Priyanka Nalawade</span>
              </h3>
              <p className="mt-2 pb-12 text-md tracking-tight font-normal text-atgBlue ">
                <span className="block lg:inline">
                  Head of Lab, Chemia &#38; Alternate QAP,{" "}
                </span>
                <span className="inline-flex">Adastra Labs</span>
              </p>

              <div className="rounded-lg ">
                <a
                  href="/blog/what-our-clients-say-adastra-labs-canada-how-we-are-a-partner-in-their-increasing-production-efficie"
                  className="w-full flex items-center justify-center px-10 py-3 md:py-4 border-2 border-transparent hover:border-atgBlue rounded-full shadow-sm bg-gradient-to-r from-buttonStart to-atgBlue hover:from-white hover:to-white text-md font-medium text-white hover:text-atgBlue md:px-14"
                >
                  Read Case Study
                </a>
              </div>
            </div>
          </div>
          {/*---------------------------------------------*/}
        </div>
        <ReviewCards data={Reviews} />
        <QuestionsCTA />
      </PageContainer>
    </div>
  );
}

export default Support;
