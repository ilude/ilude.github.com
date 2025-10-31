/// <reference types="node" />
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import sourceIdentifierPlugin from 'vite-plugin-source-identifier'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production' || mode === 'prod'
  const base = process.env.BASE_URL || "/"
  // Silence Browserslist old data warnings in local/dev builds
  // CI can keep default behavior; this is safe and recommended by Browserslist docs
  process.env.BROWSERSLIST_IGNORE_OLD_DATA = process.env.BROWSERSLIST_IGNORE_OLD_DATA || '1'
  return {
    base,
    plugins: [
      react(), 
      sourceIdentifierPlugin({
        enabled: !isProd,
        attributePrefix: 'data-matrix',
        includeProps: true,
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})

