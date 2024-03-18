export default defineNuxtConfig({
  modules: ["nuxt-icon", "@nuxt/content"],
  devtools: { enabled: true },
  content: {
    highlight: {
      theme: "nord",
      preload: ["ts", "js", "css", "java", "json", "bash", "vue"],
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
