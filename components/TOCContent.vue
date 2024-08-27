<script lang="ts" setup>
// TODO: Can we somehow get the current content name in this component (Better way)?
const route = useRoute()

const { data } = await useAsyncData(
  'toc',
  () => queryContent(route.path).findOne(),
  {
    watch: [() => route.path],
  },
)
</script>

<template>
  <div v-if="data?.body?.toc?.links.length" class="px-4 py-2 text-sm border-l np-toc-content">
    <span class="inline-block mb-2 font-medium text-gray-700">On this page</span>
    <ul>
      <li v-for="link in data.body.toc.links" :key="link.text" class="mb-2">
        <a :href="`#${link.id}`">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </div>
</template>
