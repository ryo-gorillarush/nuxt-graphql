<script setup>
const links = [
  { name: "GitHub", href: "https://github.com", icon: "mdi:github" },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: "grommet-icons:twitter",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "grommet-icons:facebook",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "grommet-icons:linkedin",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "grommet-icons:instagram",
  },
];
</script>

<template>
  <footer class="bg-gray-800">
    <section
      class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-6 text-gray-300 flex flex-row"
    >
      <p class="flex-1">Your Name 2023. All Rights Resetved</p>
      <p class="flex flex-row justify-center gap-4 mb-4 mt-2">
        <a v-for="link in links" :key="link.name" :href="link.href">
          <Icon :name="link.icon" size="1.5rem" class="text-gray-500" />
        </a>
      </p>
    </section>
  </footer>
</template>

<style lang="scss" scoped></style>
