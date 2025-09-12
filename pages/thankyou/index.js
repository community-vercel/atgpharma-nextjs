import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

// COMPONENTS
import PageContainer from "../../components/pageContainer";

function Faq() {
  return (
    <div>
      <Head>
        <title>Thank You | ATG Pharma</title>
        <meta
          name="description"
          content="Thank you for contacting ATG Pharma, expect an email from our sales representatives within the next 48 hours."
        />
        <link rel="icon" href="/Bottles_Blue.svg" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Thank You | ATG Pharma" />
        <meta
          property="og:description"
          content="Thank you for contacting ATG Pharma, expect an email from our sales representatives within the next 48 hours."
        />

        <meta name="twitter:title" content="Thank You | ATG Pharma" />
        <meta
          name="twitter:description"
          content="Thank you for contacting ATG Pharma, expect an email from our sales representatives within the next 48 hours."
        />
        <meta
          name="facebook-domain-verification"
          content="zyn3zcutjzx9mxvmnj69of75aachr9"
        />
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
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_AD_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_AD_ID}');
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
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1031340904443420');
            fbq('track', 'PageView');
            fbq('track', 'CompleteRegistration');`,
          }}
        />
      </Head>
      <PageContainer>
        <div className=" max-w-7xl mx-auto my-16">
          <h1 className="text-6xl text-gray-900 font-black tracking-wide text-center">
            Thank You!
          </h1>
          <h2 className="text-3xl text-gray-900 font-bold tracking-wide text-center py-2">
            We Received Your Request
          </h2>
          <p className="text-lg text-gray-500 tracking-wide text-center pt-8 ">
            You will receive the email from our sales representative within the
            next 48 hours.
          </p>
          <img
            src="/build/Check Icon-145.svg"
            alt="Picture of the author"
            className="h-52 w-auto mx-auto my-4"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12">
          <div className=" col-span-1 relative">
            <Image
              src="/contact/Banner_Left Side.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="z-0"
            />
            <main className="z-10 p-4 py-12 relative">
              <div className="px-6 sm:px-8 flex flex-col items-center justify-center">
                <h3 className="text-4xl pt-12 font-bold flex flex-col items-center justify-center text-center">
                  <span className="block text-white">Want to See Our</span>
                  <span className="block text-white">Equipment in Action?</span>
                </h3>
                <p className="text-md pt-8 pb-12 lg:pb-28 font-light text-white text-center">
                  <span className="inline lg:block pt-5">
                    Join us for free demos, and experience how we can help you
                  </span>
                  <span>
                    increase your production through-put and efficiency.
                  </span>
                </p>
                <div className="flex justify-center">
                  <a
                    href="booking/demo"
                    className=" mx-2 rounded-full flex items-center justify-center px-12 py-3 border-2 text-base md:py-4  border-transparent text-atgBlue bg-white hover:bg-atgBlue hover:text-white hover:border-atgBlue"
                  >
                    BOOK A DISCOVERY CALL
                  </a>
                </div>
              </div>
            </main>
          </div>
          <div className=" col-span-1 relative">
            <Image
              src="/contact/Banner_Right_Side.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="z-0"
            />
            <main className="z-10  p-4 py-12 relative">
              <div className="px-6 sm:px-8 flex flex-col items-center justify-center">
                <h3 className="text-4xl pt-12  font-bold flex flex-col items-center justify-center">
                  <span className="block text-white">Do You Need</span>
                  <span className="block text-white">Technical Support?</span>
                </h3>
                <p className="text-md pt-8  pb-12 lg:pb-28 font-light text-white text-center">
                  <span className="inline lg:block pt-5">
                    No matter what happens, our Tech Support team is here to
                    help.
                  </span>
                  <span className="inline">
                    We know how to build it and will help you to fix it.
                  </span>
                </p>
                <div className="flex justify-center">
                  <a
                    href="booking/support"
                    className=" mx-2 rounded-full flex items-center justify-center px-12 py-3 border-2 text-base md:py-4  border-transparent text-atgBlue bg-white hover:bg-atgBlue hover:text-white hover:border-atgBlue"
                  >
                    BOOK SUPPORT
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}

export default Faq;
