import { defineConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ssr(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./Button": "./src/Button.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
