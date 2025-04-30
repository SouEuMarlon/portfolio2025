// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    // Variáveis privadas
    cosmicReadKey: process.env.COSMIC_READ_KEY,
    cosmicBucketSlug: process.env.COSMIC_BUCKET_SLUG,

    public: {
      cosmicApiUrl: process.env.COSMIC_API_URL,
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    // '@nuxtjs/gtm',
  ],
  // gtm: {
  //   id: 'G-ZQFX8DDYT9',
  //   enabled: true,
  //   debug: true,
  //   layer: 'dataLayer',
  //   pageTracking: true,
  //   scriptDefer: true,
  //   scriptSrc: 'https://www.googletagmanager.com/gtm.js',
  //   dataLayer: {
  //     pageCategory: 'pageCategory',
  //     pageTitle: 'pageTitle',
  //     pagePath: 'pagePath',
  //     pageUrl: 'pageUrl',
  //     pageReferrer: 'pageReferrer',
  //     pageLanguage: 'pageLanguage',
  //     pageType: 'pageType',
  //     pageId: 'pageId',
  //     pageName: 'pageName',
  //     pageAuthor: 'pageAuthor',
  //   },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
      },
      bodyAttrs: {
        class: 'scroll-smooth',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ],
    }
  },
})