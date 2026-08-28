import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration.
// build.sourcemap is off for production to keep the deployed bundle small;
// turn it on locally if you need to debug a minified build.
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
  },
});
