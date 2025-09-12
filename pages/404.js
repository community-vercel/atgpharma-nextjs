import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

// COMPONENTS
import PageContainer from "../components/pageContainer";

function NotFound() {
  return (
    <div>
      <Head>
        <title>ATG | 404</title>
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
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto my-24 px-12">
          <div className="col-span-2 pr-0 lg:pr-24">
            <h1 className="tracking-tight text-atgBlue  pt-6 font-bold text-4xl md:text-6xl lg:font-extrabold lg:text-5xl, xl:text-6xl">
              Hmm.
            </h1>
            <h2 className="text-3xl lg:text-4xl tracking-tight font-bold text-gray-900 text-left mb-6 py-2">
              404 - Page Not Found
            </h2>
            <p className="text-atgBlue text-xl w-4/5 md:mx-0 mx-auto py-6 text-center lg:text-left">
              It seems like the page you are looking for can’t be found. Let us
              help guide you out and Get you back on the home.
            </p>
            <a
              href="/"
              className="w-4/5 mx-auto lg:w-1/3 mt-2 lg:mt-0 lg:mx-2 flex items-center justify-center px-12 py-3 md:py-4 border-2 border-transparent rounded-full shadow-sm bg-card text-sm  text-white hover:bg-gray-50"
            >
              HOME PAGE
            </a>
          </div>
          <img
            src="/404.png"
            alt="Picture of the author"
            className="z-0 w-full mx-auto"
          />
        </div>
      </PageContainer>
    </div>
  );
}

export default NotFound;
