import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./SignIn": "./src/components/SignIn/index.tsx",
        "./Button": "./src/components/Button/index.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
  test: {
    global: true,
    environment: "jsdom",
    setupFiles: "./test-setup.js",
    coverage: {
      provider: "istanbul",
      reporter: ["text", "cobertura"],
      threshold: {
        global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100,
        },
      },
    },
  },
});
