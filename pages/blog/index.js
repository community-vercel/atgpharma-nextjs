import React from "react";
import Link from "next/link";
import Butter from "buttercms";
import { fetchAPI } from "../../lib/api";

import ac10BlogData from "../../data/Blog/ac10";

// COMPONENTS
import PageContainer from "../../components/pageContainer";
import SEOHead from "../../components/seo";

const butter = Butter("f1c6a38312c618e1f8299a0d0973d5589ba0efdf");
export default class Blog extends React.Component {
  static async getInitialProps() {
    let allPosts = [];
    let noMorePosts = false;
    let currentPage = 1;
    while (!noMorePosts) {
      try {
        await butter.post
          .list({ page: currentPage, page_size: 10 })
          .then((resp) => {
            allPosts.push(resp.data.data);
          });
        currentPage++;
      } catch {
        noMorePosts = true;
      }
    }

    const articlesRes = await fetchAPI("/articles", {
      populate: ["image", "category"],
    });
    const staticPosts = [ac10BlogData]; // TODO: remove this static import
    articlesRes.data.concat(allPosts.flat());
    return {
      props: {
        // posts: [].concat(allPosts.flat()),
        posts: staticPosts.concat(articlesRes.data.concat(allPosts.flat())),
        hardCodedImages: [undefined,"Blog/p1.webp", "Blog/p2_vap.webp", "Blog/p3.png"] //TODO: had to add this images as strapi's images were fail, THIS IS Temp Solution
      },
      revalidate: 1,
    };
  }
  render() {
    const { posts, hardCodedImages } = this.props.props;
    if(Array.isArray) posts.forEach((post, index) => {
      if(!post.featured_image) post.featured_image = hardCodedImages[index];
    });
    return (
      <div>
        <SEOHead
          data={{
            title: "Blog | Filling and Packaging | ATG Pharma",
            description:
              "Read ATG Pharma's blog to learn about filling and packaging equipment, education on production machines, and ATG Pharma's company culture.",
          }}
        />
        <PageContainer>
          <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="relative max-w-7xl mx-auto">
              <div className="text-center">
                <h2 className="tracking-tight font-extrabold text-gray-900 text-5xl">
                  From the blog
                </h2>
              </div>
              <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
                {posts.map((post, index) => {
                  const {
                    seo_title,
                    summary,
                    featured_image,
                    categories,
                    attributes,
                    isStatic
                  } = post;
                  let isAtg = categories?.some((entry) => entry.name === "atg");
                  if (!categories) console.log(post);
                  if (isAtg || !categories)
                    return (
                      <Link
                        key={index}
                        href={`/blog/${
                          attributes ? attributes.slug : post.slug
                        }`}
                      >
                        <a className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:opacity-60">
                          <div className="flex-shrink-0">
                            <img
                              className="h-80 w-full object-fit"
                              src={
                                featured_image ||
                                `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${attributes?.image?.data?.attributes?.url}`
                              }
                              alt=""
                            />
                          </div>
                          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                              <div className="block mt-2">
                                <h2 className="text-xl font-semibold text-gray-900">
                                  {seo_title || attributes.title}
                                </h2>
                                <p className="mt-3 text-base text-gray-500">
                                  {summary || attributes.description}
                                </p>
                              </div>
                            </div>
                            <div className="mt-6 text-right">
                              <div className="ml-3">
                                <div className="text-sm font-medium text-gray-700">
                                  <span aria-hidden="true">&middot;</span>
                                  <span>5 min read</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    );
                })}
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    );
  }
}
