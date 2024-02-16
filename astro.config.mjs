import icon from "astro-icon"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  verbatimModuleSyntax: true,
  integrations: [tailwind(), icon(), react()],
  allowImportingTsExtensions: true,
  vite: {
    optimizeDeps: {
      exclude: ["oslo"],
    },
  },
})
