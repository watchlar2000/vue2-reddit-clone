const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: "/reddit-clone/",
  transpileDependencies: true,
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
});
