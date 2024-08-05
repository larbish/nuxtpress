// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.scss"],
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  routeRules: {
    '/': { prerender: true }
  },
  content: {
    // TODO: IDK why this isn't working, I have to pass layout manually in app.vue
    // documentDriven: {
    //   layoutFallbacks: ['doc'],
    // }
    documentDriven: true,
  }
})