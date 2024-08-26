// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.scss"],
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],

  routeRules: {
    '/': { prerender: true }
  },

  content: {
    highlight: {
      theme: 'dracula'
    }
  },

  compatibilityDate: '2024-08-26'
})