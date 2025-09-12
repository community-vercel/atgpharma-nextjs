/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

function SEO({ data }) {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Head>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <link rel="icon" href="/Bottles_Blue.svg" />
      <link href="http://fonts.cdnfonts.com/css/graphik" rel="stylesheet" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />

      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta
        name="facebook-domain-verification"
        content="zyn3zcutjzx9mxvmnj69of75aachr9"
      />
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
        type="text/javascript"
        src="https://secure.agilecompanyintelligence.com/js/270007.js"
      />
      <script
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
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.GA_AD_ID}');
      `,
        }}
      />
      {router.pathname !== "/build" && (
        <script
          dangerouslySetInnerHTML={{
            __html: `window.pipedriveLeadboosterConfig = {base: 'leadbooster-chat.pipedrive.com',companyId: 1043272,playbookUuid: 'a6b15bd7-bb54-465c-bbba-8ddcd7a18270',version: 2};(function () {var w = window;if (w.LeadBooster) {console.warn('LeadBooster already exists');} else {w.LeadBooster = {q: [],on: function (n, h) {this.q.push({ t: 'o', n: n, h: h });},trigger: function (n) {this.q.push({ t: 't', n: n });},};}})()`,
          }}
        />
      )}
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
          fbq('track', 'PageView');`,
        }}
      />
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
          fbq('init', '1329108114601378');
          fbq('track', 'PageView');`,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function() {
            var surf = document.createElement('script');
            surf.setAttribute('src','//cdn.surfside.io/v1.1.0/wave.min.js');
            surf.setAttribute("type","text/javascript");
            surf.setAttribute('id','surfside');
            surf.setAttribute('accountId','609be')
            surf.setAttribute('sourceId','d6939')
            surf.setAttribute('platform','digital');
            var sync = document.createElement('img');
            sync.setAttribute('src','//edge.surfside.io/id/uid?');
            sync.setAttribute('height','1');
            sync.setAttribute('width','1');
            sync.setAttribute('display','none');
            document.head.appendChild(surf,sync);
            })();`,
        }}
      />
    </Head>
  );
}
export default SEO;
