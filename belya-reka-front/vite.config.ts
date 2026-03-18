import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ],
  preview: {
    port: 2000,
    strictPort: true,
  },
  server: {
    port: 2000,
    strictPort: true,
    host: true,
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["framer-motion", "swiper"],
          redux: ["@reduxjs/toolkit", "react-redux"],
          charts: ["chart.js", "react-chartjs-2"],
        },
      },
    },
  },
  resolve: {
    alias: {
      assets: "/src/app/assets",
      pages: "/src/pages",
      styles: "/src/app/assets/styles",

      core: "/src/core",
      components: "/src/components",
      common: "/src/common",
      layout: "/src/layout",
      test: "/src/test",

      ts: "/src/fusion/ts",
      helpers: "/src/fusion/helpers",
      hooks: "/src/fusion/hooks",
      data: "/src/fusion/data",
      store: "/src/fusion/store",
    },
  },
});
