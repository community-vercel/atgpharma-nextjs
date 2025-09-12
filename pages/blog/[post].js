import React from "react";
import Butter from "buttercms";
import Head from "next/head";
import { fetchAPI } from "../../lib/api";
import Script from "next/script";

// COMPONENTS
import PageContainer from "../../components/pageContainer";
import QuestionsCta from "../../components/Panels/questionsCTA";
import ac10BlogData from "../../data/Blog/ac10";

const butter = Butter("f1c6a38312c618e1f8299a0d0973d5589ba0efdf");
export default class Post extends React.Component {
  static async getInitialProps({ query }) {
    if(/^STATIC-.*/.test(query.post)) {
      const [_, slug] = query.post.split("-");

      switch (slug) {
        case "data.Blog.ac10":
          return ac10BlogData;
      
        default:
          throw new Error("Invalid slug found")
      }
    }

    try {
      const resp = await butter.post.retrieve(query.post);
      return resp.data.data;
    } catch {
      const articlesRes = await fetchAPI("/articles", {
        filters: {
          slug: query.post,
        },
        populate: ["image", "category", "author.picture"],
      });
      return articlesRes.data[0];
    }
  }
  render() {
    const post = this.props;
    return (
      <div>
        <Head>
          <title>ATG | {post?.seo_title || post?.attributes.title}</title>
          <meta
            name="description"
            content={post?.summary || post?.attributes.description}
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
          <meta property="og:type" content="article" />
          <meta property="og:url" content={post?.url} />
          <meta
            property="og:title"
            content={post?.title || post?.attributes.title}
          />
          <meta property="og:image" content={post?.featured_image} />
          <meta property="og:description" content={post?.meta_description} />

          <meta property="twitter:card" content={post?.featured_image_alt} />
          <meta property="twitter:domain" content="gowayfast.com" />
          <meta property="twitter:url" content="gowayfast.com" />
          <meta
            name="twitter:title"
            content={post?.seo_title || post?.attributes.title}
          />
          <meta name="twitter:description" content={post?.summary} />
          <meta name="twitter:image" content={post?.featured_image} />
          <meta
            name="facebook-domain-verification"
            content="zyn3zcutjzx9mxvmnj69of75aachr9"
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
          fbq('init', '1031340904443420');
          fbq('track', 'PageView');`,
            }}
          />
        </Head>
        <PageContainer>
          <div className="relative py-16 bg-white overflow-hidden">
            <div className="mt-6 w-4/5 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <div className="text-lg max-w-prose mx-auto">
                <h1>
                  <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-atgBlue sm:text-4xl mb-12 ">
                    {post?.title || post?.attributes.title}
                  </span>
                </h1>
              </div>
              <div
                className="Blog"
                dangerouslySetInnerHTML={{
                  __html: post?.body || post?.attributes.content,
                }}
              />
            </div>
            <QuestionsCta />
          </div>
        </PageContainer>
      </div>
    );
  }
}
