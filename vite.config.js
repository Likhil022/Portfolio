import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portfolio/", // Match the exact repository name (case-sensitive)
  plugins: [react()],
});
