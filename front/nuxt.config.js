export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  mode: "universal",
  target: "static",
  generate: {
    dir: "../site/",
  },
  router: {},
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "dComm",
    htmlAttrs: {
      lang: "en",
    },

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  modules: ["@nuxtjs/i18n"],

  i18n: {
    vueI18nLoader: true,
    defaultLocale: "ua",
    vueI18n: {
      fallbackLocale: ["ua", "en", "ru"],
    },
    strategy: "prefix_except_default",
    legacy: false,
    globalInjection: true,
    langDir: "lang/",
    locales: [
      {
        code: "ua",
        name: "UA",
        nameFull: "Ukranian",
        iso: "ua-UA",
        file: "ua.js",
      },
      {
        code: "ru",
        name: "RU",
        nameFull: "Русский",
        iso: "ru-RU",
        file: "ru.js",
      },
      {
        code: "en",
        name: "EN",
        nameFull: "English",
        iso: "en-US",
        file: "en.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/pwa",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
