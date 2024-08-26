<script lang="ts" setup>
definePageMeta({
  layout: 'content', // NuxtPress provides content layout
  contentName: 'docs' // Name of your content type. In this case, it's `docs`
})
</script>

<template>
  <main class="flex flex-col h-full">
    <ContentDoc />
    <div class="flex-grow"></div>
    <hr>
    <NextPrevPagination></NextPrevPagination>
    <!-- Feel free to add custom markup like Newsletter CTA etc -->
  </main>
</template>