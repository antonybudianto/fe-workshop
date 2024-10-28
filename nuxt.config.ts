// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  ssr: false,
  app: {
    head: {
      script: [
        {
          src: "scripts/init.js"
        },
        {
          src: "scripts/halo.js"
        },
        {
          src: "scripts/helo.js"
        }
      ]
    }
  }
});
