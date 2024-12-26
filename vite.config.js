import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/hny2025/",
  build: {
    outDir: "dist", // กำหนด output directory เป็น dist
  },
  plugins: [react()],
});
