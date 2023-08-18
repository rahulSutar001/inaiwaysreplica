// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  buildModules:['@nuxt/http'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  axios: {
    baseURL: "http://localhost:8080" 
    // Adjust this to your API server's URL
  },
  
})
