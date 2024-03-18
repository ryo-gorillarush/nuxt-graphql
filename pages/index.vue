<script setup>
const { data: posts } = await useAsyncData("latest-posts", () =>
  queryContent("/blog").sort({ data: 1 }).limit(3).find()
);
</script>

<template>
  <section>
    <h1 class="text-5xl font-bold mt-20">What is Lorem Ipsum?</h1>
    <p class="text-base text-gray-900 p-2 italic">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
  </section>
  <section class="flex flex-col md:flex-row">
    <div class="md:w-3/4">
      <h2 class="text-3xl font-bold mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
      <p class="text-lg py-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p class="text-lg py-2">Molestie ac feugiat sed lectus vestibulum.</p>
      <p class="text-lg py-2">
        Duis convallis convallis tellus id interdum velit laoreet id donec.
      </p>
    </div>
    <img
      src="~/assets/images/sample-avatar.jpg"
      class="w-1/2 md:max-w-sm p-8 mx-auto"
    />
  </section>
  <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
    <div class="grid md:grid-cols-3 pt-8 gap-0">
      <Post :posts="posts" />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
