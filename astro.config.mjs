import { defineConfig } from "astro/config";
import icon from "astro-icon";

import compressor from "astro-compressor";

import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://ahaduglobal.com",
  integrations: [
    robotsTxt(),
    icon(),
    compressor(),
    sitemap({
      filter: (page) =>
        page !== "https://ahaduglobal.com/terms-and-conditions" &&
        page !== "https://ahaduglobal.com/privacy-policy",
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 4321,
  },
});
