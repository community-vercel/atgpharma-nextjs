import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

// COMPONENTS
import PageContainer from "../../components/pageContainer";
import QestionCTA from "../../components/Panels/questionsCTA";

function Faq() {
  return (
    <div>
      <Head>
        <title>ATG | FAQ</title>
        <link rel="icon" href="/Bottles_Blue.svg" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID}');
          `,
          }}
        />
        <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.GA_TRACKING_ID}')
      `,
        }}
      />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.pipedriveLeadboosterConfig = {base: 'leadbooster-chat.pipedrive.com',companyId: 1043272,playbookUuid: 'a6b15bd7-bb54-465c-bbba-8ddcd7a18270',version: 2};(function () {var w = window;if (w.LeadBooster) {console.warn('LeadBooster already exists');} else {w.LeadBooster = {q: [],on: function (n, h) {this.q.push({ t: 'o', n: n, h: h });},trigger: function (n) {this.q.push({ t: 't', n: n });},};}})()`,
          }}
        />
        <script
          src="https://leadbooster-chat.pipedrive.com/assets/loader.js"
          async
        ></script>
      </Head>

      <PageContainer>
        <div className=" h-100 relative">
          <Image
            src="/faq/FAQ_Top_Banner.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0"
          />
          <main className="py-16 sm:py-24 z-10 relative">
            <div className="px-6 sm:px-8 flex flex-col items-center justify-center">
              <h1 className="tracking-tight text-white  py-6 font-bold text-center text-4xl md:text-5xl lg:font-extrabold lg:text-6xl">
                <span className="block text-white">
                  We Are Here to Help You
                </span>
              </h1>
              <p className="text-sm lg:text-lg font-light text-white self-center">
                <span className=" block py-5">
                  Select the topic that you’re wondering about, then browse the
                  questions to find the answer.
                </span>
              </p>
              {/* <div className="flex-1 flex pt-8 pb-24 items-center justify-center px-12 lg:ml-6 lg:justify-end">
                <div className="w-full">
                  <label htmlFor="search" className="sr-only">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input id="search" name="search" className="pl-12 pr-32 py-2 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Type your Questions here..." type="search" />
                  </div>
                </div>
              </div> */}
            </div>
          </main>
        </div>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Frequently asked questions
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Can’t find the answer you’re looking for? Reach out to our
                  <a
                    href="/booking/support"
                    className="font-medium text-atgBlue hover:font-bold"
                  >
                    {" "}
                    customer support{" "}
                  </a>
                  team.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-2">
                <dl className="space-y-12">
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      What kind of products is the RoboCAP compatible with?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      The RoboCAP is compatible with all liquid products. From
                      creams and topicals to oils.
                    </dd>
                  </div>

                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      How many products can I fill on one RoboCAP?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Our robots are completely customized depending on what you
                      need to fill. The base of the RoboCAP always remains the
                      same. However, depending on what type of product your
                      filling, you can switch out the nozzle, trays, molds, tank
                      size and heating options. (Easy changeover and no downtime
                      required)
                    </dd>
                  </div>

                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Should I only purchase one RoboCAP?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      The amount of RoboCAPs required for your production is
                      entirely dependent on your production needs and budget.
                      Our robot provides a filling system that can meet all your
                      current and future filling needs. Allowing you to scale
                      your production as demands grow.
                    </dd>
                  </div>

                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      How do I learn how to use the equipment?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Upon purchasing our equipment, we provide an exclusive
                      online library of training videos to give your businesses
                      the information it needs to get your production up and
                      running. ATG also has around the clock technical support
                      calls with members of our team. They are happy to jump on
                      a virtual call to answer any questions you have.
                    </dd>
                  </div>

                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      What if I am having trouble using the machine or if
                      something malfunctions?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      ATG offers 24/7 support for our clients. We offer FREE
                      online the calls, and should local companies request
                      in-facility training, we are happy to do so. We can travel
                      internationally if necessary, should troubleshooting
                      issues arise.
                    </dd>
                  </div>

                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      How do I know the RoboCAP can fill my product?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      What separates our machine in the industry is the ability
                      to customize your filling production line. The RoboCAP has
                      endless capabilities. From vape cartridges, bottle
                      filling, lotions, balms, capsules, edibles, you name it,
                      we can fill it. If you are still unsure, we are happy to
                      offer custom testing for your product before you decide to
                      purchase. That way you can be assured your product and
                      machine will meet the highest standards.
                    </dd>
                  </div>

                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      How accurate is the RoboCAP’s filling?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      2.5% Fill Volume accuracy
                    </dd>
                  </div>

                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Is there a lot of maintenance required on the RoboCAP?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      The maintenance required on the RoboCAP is comparable to
                      any fully auto machine on the market. With all machines,
                      cleaning and calibrating is necessary. ATG provides full
                      documentation covering all the steps to ensure your robot
                      is running optimally.
                    </dd>
                  </div>

                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Will you notify me when my shipment leaves?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Yes, client success will inform you that your order has
                      left our facility. You will receive an email with the
                      tracking number and expected delivery date. Once the order
                      has been delivered, a delivery confirmation email will be
                      sent to book your set-up and training call.
                    </dd>
                  </div>

                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Is the equipment fairly standard to set up?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Manuals for all our equipment is included with each
                      shipment to assist you with learning about your equipment.
                      ATG also offers a complementary training and set-up call
                      with our technical support team. During this meeting we
                      teach you how to set up all the equipment purchased. Along
                      with training your team, so your company can start filling
                      right after!
                    </dd>
                  </div>

                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      If needed, how can I place an order for parts in the
                      future?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Our technical support team is accessible to our clients
                      around the clock. This is for any troubleshooting,
                      technical support, and for placing parts orders. Our team
                      can advise any parts you may need to improve production as
                      well as fulfill any requests our clients may have for
                      additional parts.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <QestionCTA />
      </PageContainer>
    </div>
  );
}

export default Faq;
