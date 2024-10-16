import { defineConfig } from "astro/config";
import icon from "astro-icon";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), compressor()],
  server: {
    host: "0.0.0.0",
    port: 4321,
  },
});