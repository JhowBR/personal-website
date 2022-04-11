import React from "react";
import * as fs from "fs";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  /*
  const BASE_URL = "http://www.jonathangalli.com";

  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        //"api",
        "_app",
        "index",
        //"_document.js",
        //"404.js",
        "sitemap.xml",
        //"spellapidsd",
        "music"
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });

  const dynamicPaths = [ `${BASE_URL}/product/1`, `${BASE_URL}/product/2` ];

  const allPaths = [...staticPaths, ...dynamicPaths];
  */

  /*}
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
  */

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

      <url>
        <loc>https://www.jonathangalli.com/</loc>
        <lastmod>2022-04-10T01:45:56+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://www.jonathangalli.com/music</loc>
        <lastmod>2022-04-10T01:45:56+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.jonathangalli.com/spellapi/introduction</loc>
        <lastmod>2022-04-10T01:45:56+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.jonathangalli.com/spellapi/spell</loc>
        <lastmod>2022-04-10T01:45:56+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://www.jonathangalli.com/spellapi/spell-user</loc>
        <lastmod>2022-04-10T01:45:56+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://www.jonathangalli.com/spellapi/enums</loc>
        <lastmod>2022-04-10T01:45:56+00:00</lastmod>
        <priority>0.64</priority>
      </url>

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