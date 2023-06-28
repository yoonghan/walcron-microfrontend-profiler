import { UserConfigExport, defineConfig } from "vite";
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

export const baseConfig: UserConfigExport = {
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
  server: {
    port: 5001,
    strictPort: true,
  },
  preview: {
    port: 5001,
    strictPort: true,
  },
};

// https://vitejs.dev/config/
export default defineConfig(baseConfig);
