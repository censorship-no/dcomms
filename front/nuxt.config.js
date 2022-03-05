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
    htmlAttrs: {
      lang: "ua",
    },
    title: "dComms",
    description:
      "Децентралізовані комунікації, які працюють з інтернетом або без нього",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Децентралізовані комунікації, які працюють з інтернетом або без нього",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "dComms",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Децентралізовані комунікації, які працюють з інтернетом або без нього",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: `/logo_ceno.png`,
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "summary_large_image",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: `/logo_ceno.png`,
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: "dComms",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "dComms",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "dComms",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Децентралізовані комунікації, які працюють з інтернетом або без нього",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: `/logo_ceno.png`,
      },

      {
        hid: "og:image:width",
        property: "og:image:width",
        content: "200",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: `/logo_ceno.png`,
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: `/logo_ceno.png`,
      },

      {
        hid: "vk:image",
        property: "vk:image",
        content: `/logo_ceno.png`,
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  modules: ["@nuxtjs/i18n"],

  i18n: {
    detectBrowserLanguage: false,
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
