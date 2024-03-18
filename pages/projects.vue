<script setup>
const query = gql`
  {
    viewer {
      repositories(first: 8, orderBy: { field: CREATED_AT, direction: DESC }) {
        totalCount
        nodes {
          id
          name
          createdAt
          description
          url
          forks {
            totalCount
          }
          watchers {
            totalCount
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

const { data } = await useAsyncQuery(query);
</script>

<template>
  <div>
    <h1 class="text-3xl my-8">Projects</h1>
    <p class="text-lg mb-8">Here are some of my projects on GitHub.</p>
    <section class="grid grid-cols-2 gap-10">
      <div
        v-for="project in data?.viewer.repositories.nodes"
        :key="project.id"
        class="p-8 border-4my-4 rounded-lg hover:bg-gray-50"
      >
        <a :href="project.url" target="_blank">
          <h2
            class="text-2xl text-indigo-800 font-semibold mb-2 hover:underline"
          >
            {{ project.name }}
          </h2>
        </a>
        <p>{{ project.description }}</p>
        <div class="mt-4">
          <Icon name="material-symbols:kid-star" /> Stars:
          {{ project.stargazers.totalCount }}
          <Icon name="material-symbols:fork-left" /> Forks:
          {{ project.forks.totalCount }}
          <Icon name="material-symbols:eye-tracking-outline" /> Watchers:
          {{ project.watchers.totalCount }}
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
