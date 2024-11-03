const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {
      const environment = config.env.ENV || 'local';

      const urls = {
        local: 'http://localhost:4000/fashionhub/',
        staging: 'https://staging-env/fashionhub/',
        production: 'https://pocketaces2.github.io/fashionhub/',
      };

      config.baseUrl = urls[environment];
      return config;
    },
    experimentalRunAllSpecs: true,
  },
  env: {
    username :"demouser",
    password : "fashion123"
  }
});

