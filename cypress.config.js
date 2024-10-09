import { defineConfig } from "cypress";
// import dotenv from "dotenv";

// dotenv.config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Load environment variables from .env file
      // config.env.API_BASE_URL = process.env.API_BASE_URL;
      return config;
    },
    // supportFile: "cypress/support/e2e.js", // Ensure this points to your support file
  },
});
