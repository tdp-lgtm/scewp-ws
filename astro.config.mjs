// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// When building for GitHub Pages we serve from a project subpath
// (https://<owner>.github.io/<repo>/), so set `site` + `base` accordingly.
// For Netlify / the production domain these stay at the root.
const GH_PAGES = process.env.GITHUB_PAGES === "true";
const GH_OWNER = process.env.GH_OWNER || "tdp-lgtm";
const GH_REPO = process.env.GH_REPO || "scewp-ws";

// https://astro.build/config
export default defineConfig({
  site: GH_PAGES
    ? `https://${GH_OWNER}.github.io`
    : "https://stockholmcentre.org",
  base: GH_PAGES ? `/${GH_REPO}` : undefined,
  output: "static",
  integrations: [tailwind(), mdx(), sitemap()],
});
