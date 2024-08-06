<script lang="ts" setup>
// const route = useRoute()
// const contentName = route.meta.contentName as string

// const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(queryContent(contentName)))

// console.log('navigation :>> ', navigation.value);
// const navLinks = computed(() => navigation.value![0].children)

</script>

<template>
    <div class="flex flex-col min-h-screen">
        <header class="sticky top-0 border-b bg-[--body-bg]">
            <div class="container flex min-h-[--header-height] items-center px-8 py-2 mx-auto header-content">
                <NuxtLink to="/" class="flex items-center gap-3">
                    <img src="https://anu-vue.netlify.app/logo.svg" alt="Logo" class="w-6 h-6" />
                    <span class="text-lg font-medium">My Docs</span>
                </NuxtLink>
            </div>
        </header>
        <div class="container flex justify-center flex-grow mx-auto max-w-8xl">
            <!-- <aside v-if="route.meta.showAsideNav" class="h-full bg-gray-100 w-60 sticky top-[calc(var(--header-height)+var(--aside-nav-margin-top))]">
                <ContentAsideNav v-if="navLinks?.length" :navLinks="navLinks"></ContentAsideNav>
            </aside> -->
            <div class="flex flex-col flex-grow max-w-4xl p-8 prose">
                <!-- TODO: Show TOC below header like VitePress -->
                <slot />

                <div class="flex-grow"></div>
                <!-- Next/Prev Links -->
                <!-- <hr class="mt-10 mb-6"> -->
                <!-- <div class="grid grid-cols-2 gap-6">
                    <NuxtLink v-if="prev" class="flex flex-col border py-3 px-4 rounded-lg no-underline hover:border-[--color-primary]" :to="prev._path">
                        <span class="text-xs text-gray-500">Previous Page</span>
                        <span>{{ prev.title }}</span>
                    </NuxtLink>
                    <NuxtLink v-if="next" :to="next._path" class="flex flex-col col-start-2 border py-3 px-4 rounded-lg no-underline hover:border-[--color-primary]">
                        <span class="text-xs text-gray-500">Next Page</span>
                        <span>{{ next.title }}</span>
                    </NuxtLink>
                </div> -->
            </div>
            <!-- * Hide it for now -->
            <aside v-if="false" class="hidden xl:block h-full shrink-0 mt-[--toc-margin-top] w-60 sticky top-[calc(var(--header-height)+var(--toc-margin-top))]">
                <TOCContent></TOCContent>
            </aside>
        </div>
    </div>
</template>
