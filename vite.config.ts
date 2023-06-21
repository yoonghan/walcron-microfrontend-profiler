import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export const federationExposedComponents = {
  "./SignIn": "./src/components/SignIn/index.tsx",
  "./Button": "./src/components/Button/index.tsx",
  "./GroupButton": "./src/components/GroupButton/index.tsx",
  "./appRoutes": "./src/appRoutes.tsx",
  "./Contact": "./src/routes/contact.tsx",
  "./Basic": "./src/routes/basic.tsx",
};

export const federationName = "profiler";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: federationName,
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: federationExposedComponents,
      shared: ["react", "react-dom", "react-router-dom"],
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
