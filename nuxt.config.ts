// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // ... other modules
    '', "@nuxtjs/tailwindcss"
  ],

  vuefire: {
    config: {
      apiKey: "AIzaSyBfDH0tU6oxIlcbzZVg6IDRHmSlOzcUztY",
      authDomain: "zikam-expense.firebaseapp.com",
      projectId: "zikam-expense",
      storageBucket: "zikam-expense.appspot.com",
      messagingSenderId: "246667483441",
      appId: "1:246667483441:web:fd37635f69be063b6df810",
      measurementId: "G-5D7SHWZRNS",
      // there could be other properties depending on the project
    },
  },
})