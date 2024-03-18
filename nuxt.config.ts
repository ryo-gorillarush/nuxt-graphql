export default defineNuxtConfig({
  modules: ["nuxt-icon", "@nuxt/content", "@nuxtjs/apollo"],
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
  apollo: {
    clients: {
      default: {
        tokenName: "github-token",
        httpEndpoint: "https://api.github.com/graphql",
      },
    },
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
  },
});
