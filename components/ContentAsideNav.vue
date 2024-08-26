<script lang="ts" setup>
// TODO: Can we somehow get the current content name in this component (Better way)?
const route = useRoute()
const contentName = computed(() => route.path.split('/')[1])

const { data: navigation } = await useAsyncData(
    'navigation',
    () => fetchContentNavigation(queryContent(contentName.value)),
    {
        watch: [contentName]
    },
)

const navLinks = computed(() => navigation.value![0].children)
</script>

<template>
    <ul class="flex flex-col gap-3 text-sm">
         <li class="pb-4 -mt-4 border-b">
            <NuxtLink to="/" class="flex items-center gap-3">
                    <img src="https://anu-vue.netlify.app/logo.svg" alt="Logo" class="w-6 h-6" />
                    <span class="text-lg font-medium">NuxtPress</span>
                </NuxtLink>
         </li>
        <li v-for="link in navLinks" :key="link._path">
            <NuxtLink exact-active-class="text-indigo-500" :to="link._path">{{ link.title }}</NuxtLink>
        </li>
    </ul>
</template>
