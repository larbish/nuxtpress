<script lang="ts" setup>
const { toc } = useContent()
</script>

<template>
    <div v-show="toc.links.length" class="px-4 py-2 text-sm border-l np-toc-content">
        <span class="inline-block mb-2 font-medium text-gray-700">On this page</span>
        <ul v-if="toc && toc.links">
            <li v-for="link in toc.links" :key="link.text" class="mb-2">
                <a :href="`#${link.id}`">
                {{ link.text }}
                </a>
            </li>
        </ul>
    </div>
</template>
