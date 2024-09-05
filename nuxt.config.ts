// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/main.scss'],
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxthq/studio'],

  routeRules: {
    '/': { prerender: true },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },

  content: {
    highlight: {
      theme: 'dracula',
    },
  },

  compatibilityDate: '2024-08-26',
})
