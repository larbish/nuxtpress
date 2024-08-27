<script lang="ts" setup>
definePageMeta({
  layout: 'content',
  hideAside: true,
})

const route = useRoute()

// TODO: Why I've to manually pass the query to ContentDoc component?
// Without it, We get log: You should use slots with <ContentQuery>
const { data } = await useAsyncData(
  'content',
  () => queryContent('blog').where({ _path: route.path }).findOne(),
  {
    watch: [() => route.path],
  },
)
</script>

<template>
  <ContentDoc :query="data" />
</template>
