<script lang="ts" setup>
// TODO: Can we somehow get the current content name in this component (Better way)?
const route = useRoute()
const contentName = route.path.split('/')[1]

const [prev, next] = await queryContent(contentName)
  .only(['_path', 'title'])
  .findSurround(route.path)
</script>

<template>
    <div class="grid gap-6 sm:grid-cols-2">
      <NuxtLink v-if="prev" :to="prev._path" class="flex flex-col px-4 py-3 no-underline transition-all ease-in-out border rounded-lg hover:border-indigo-500 hover:text-indigo-500">
        <small class="text-gray-400">Previous Page</small>
        <span>{{ prev.title }}</span>
      </NuxtLink>
      <NuxtLink v-if="next" :to="next._path" class="flex flex-col col-start-2 px-4 py-3 no-underline transition-all ease-in-out border rounded-lg hover:border-indigo-500 hover:text-indigo-500">
        <small class="text-gray-400">Next Page</small>
        <span>{{ next.title }}</span>
      </NuxtLink>
    </div>
</template>
