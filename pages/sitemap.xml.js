/* eslint-disable no-loop-func */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
import * as fs from "fs";
import Butter from "buttercms";
const path = require("path");

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = "https://www.atgpharma.com";
  const butter = Butter("f1c6a38312c618e1f8299a0d0973d5589ba0efdf");
  const DIR = path.join(process.cwd(), "./pages");
  let Files = [];
  function ThroughDirectory(Directory) {
    fs.readdirSync(Directory).forEach((File) => {
      const Absolute = path.join(Directory, File);
      if (fs.statSync(Absolute).isDirectory() && File !== "api") {
        return ThroughDirectory(Absolute);
      } else {
        let exactPatch = Absolute.substring(
          Absolute.lastIndexOf("pages/") + 6,
          Absolute.lastIndexOf(".js")
        ).split("/index")[0];
        if (exactPatch.charAt(0) === "/") exactPatch = "";
        if (exactPatch.indexOf("[") < 0) return Files.push(exactPatch);
      }
    });
  }
  await ThroughDirectory(DIR);
  const staticPaths = Files.filter((staticPage) => {
    return !["api", "index", "_app", "404", "sitemap.xml"].includes(staticPage);
  }).map((staticPagePath) => {
    return `${BASE_URL}/${staticPagePath}`;
  });

  let dynamicPaths = [];
  let noMorePosts = false;
  let currentPage = 1;
  while (!noMorePosts) {
    try {
      await butter.post
        .list({ page: currentPage, page_size: 10 })
        .then((resp) => {
          const posts = resp.data.data.map((post, _) => {
            const isAtg = post.categories.some((entry) => entry.name === "atg");
            if (isAtg) dynamicPaths.push(`${BASE_URL}/blog/${post.slug}`);
            return null;
          });
          currentPage++;
        });
    } catch {
      noMorePosts = true;
    }
  }

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
