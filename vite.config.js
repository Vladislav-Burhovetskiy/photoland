import { defineConfig } from "vite";
import copy from 'rollup-plugin-copy';
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: "api", dest: "dist", flatten: false },
      ],
      hook: "writeBundle",
    }),
  ],
});
