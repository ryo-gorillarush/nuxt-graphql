<script setup>
const props = defineProps(["posts"]);
</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post._id" class="my-8 py-4 border-b-2">
      <NuxtLink :to="post._path" class="text-blue-500 text-2xl">{{
        post.title
      }}</NuxtLink>
      <p class="text-gray-500">{{ post.description }}</p>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
