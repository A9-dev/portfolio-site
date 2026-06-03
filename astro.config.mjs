// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import remarkGfm from "remark-gfm";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
  },

  integrations: [
    mdx({
      remarkPlugins: [remarkGfm],
    }),
  ],
});
