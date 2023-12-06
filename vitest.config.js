/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.js"],
    testMatch: ["./src/*.test.jsx"],
    globals: true,
  },
});
