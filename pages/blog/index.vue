<script setup>
const { data: posts } = await useAsyncData("posts", () => {
  return queryContent("/blog").find();
});
</script>

<template>
  <h1 class="text-3xl my-8">Blog Posts</h1>
  I like to write about anything that I am currently working or something new
  that interests me. If you would like to write about something or be a guest
  blogger on your blog please reach out to me on Twitter. If you would like to
  subscribe to an RSS feed you can find it here.

  <section class="">
    <Post :posts="posts" />
  </section>
</template>

<style lang="scss" scoped></style>
