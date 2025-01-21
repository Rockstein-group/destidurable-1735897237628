import { defineConfig } from "astro/config";
import compressor from "astro-compressor";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compressor({ gzip: true, brotli: false })],
});
