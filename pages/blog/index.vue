<script lang="ts" setup>
definePageMeta({
  layout: 'content',
  hideAside: true,
  hidePagination: true,
})

const { data: posts } = await useAsyncData('blogs', () => queryContent('blog').find())
</script>

<template>
  <div>
    <h1 class="mb-8 text-4xl font-semibold text-gray-900">
      Blog
    </h1>
    <ul class="not-prose">
      <li v-for="doc in posts" :key="doc._path">
        <NuxtLink :to="doc._path" class="inline-block mb-3 text-xl font-medium transition-opacity opacity-50 hover:opacity-100">
          {{ doc.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
