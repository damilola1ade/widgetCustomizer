import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode, ...rest }) => {
  const defaultOption = {
    esbuild: {
      loader: "jsx",
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          ".js": "jsx",
          ".ts": "tsx",
        },
      },
    },
    plugins: [react()],
  };
  if (command === "build") {
    return {
      build: {
        commonjsOptions: {
          transformMixedEsModules: true,
          exclude: [ 'node_modules/lodash-es/**', 'node_modules/@types/lodash-es/**', ], //This fixes exports at lodash error
          ignoreTryCatch: false
        },
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes("node_modules")) {
                return id
                  .toString()
                  .split("node_modules/")[1]
                  .split("/")[0]
                  .toString();
              }
            },
          },
        },
      },
      ...defaultOption,
    };
  } else {
    return defaultOption;
  }
});
