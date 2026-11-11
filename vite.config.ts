
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = path.dirname(fileURLToPath(import.meta.url))
const port = Number.parseInt(process.env.PORT || "8443", 10)

// Standalone Vite configuration for the React + TypeScript portfolio.
// Figma Make-specific plugins have been removed.
export default defineConfig(({ mode }) => {
  const isDevelopment = mode === "development"

  return {
    base: '/mahyar-dana-portfolio/',

    plugins: [
      react(),
      tailwindcss(),
    ],

    resolve: {
      alias: {
        "@": path.resolve(projectRoot, "src"),
      },
    },

    build: {
      sourcemap: isDevelopment ? "inline" : false,
      minify: !isDevelopment,
    },

    server: {
      host: process.env.FIGMA_DEV_SERVER_HOST || "0.0.0.0",
      port,
      strictPort: true,
    },

    preview: {
      host: process.env.FIGMA_DEV_SERVER_HOST || "0.0.0.0",
      port,
      strictPort: true,
    },
  }
})
