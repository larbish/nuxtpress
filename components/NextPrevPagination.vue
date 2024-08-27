<script lang="ts" setup>
// TODO: Can we somehow get the current content name in this component (Better way)?
const route = useRoute()
const contentName = route.path.split('/')[1]

// const [prev, next] = await queryContent(contentName)
//   .only(['_path', 'title'])
//   .findSurround(route.path)

// * data[0] is previous page & data[1] is next page
const { data } = await useAsyncData(
  'pagination',
  () => queryContent(contentName).only(['_path', 'title']).findSurround(route.path),
  {
    watch: [() => route.path],
  }
)
</script>

<template>
    <div class="grid gap-6 sm:grid-cols-2" v-if="data">
      <NuxtLink v-if="data[0]" :to="data[0]._path" class="flex flex-col px-4 py-3 no-underline transition-all ease-in-out border rounded-lg hover:border-indigo-500 hover:text-indigo-500">
        <small class="text-gray-400">Previous Page</small>
        <span>{{ data[0].title }}</span>
      </NuxtLink>
      <NuxtLink v-if="data[1]" :to="data[1]._path" class="flex flex-col col-start-2 px-4 py-3 no-underline transition-all ease-in-out border rounded-lg hover:border-indigo-500 hover:text-indigo-500">
        <small class="text-gray-400">Next Page</small>
        <span>{{ data[1].title }}</span>
      </NuxtLink>
    </div>
</template>
