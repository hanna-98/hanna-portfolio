import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/hanna-portfolio/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "404": ["@vitejs/plugin-vue"],
        },
      },
    },
  },
  plugins: [react()],
});
