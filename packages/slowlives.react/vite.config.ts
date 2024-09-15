import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({
      identifiers: ({ hash, packageName }) => `${packageName ?? ""}_${hash}`,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src", "index.ts"),
      formats: ["es"],
      fileName: "index",
    },
  },
});
