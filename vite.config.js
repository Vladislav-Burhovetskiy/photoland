import { defineConfig } from "vite";
import copy from 'rollup-plugin-copy';
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/photoland/',
  plugins: [
    react(),
    copy({
      targets: [
        { src: "api", dest: "dist", flatten: false },
        { src: '404.html', dest: 'dist' },
      ],
      hook: "writeBundle",
    }),
  ],
});
