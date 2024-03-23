<script setup lang="ts">

defineProps<{
    text: String,
    link: String
}>()
</script>
<template>
    <RouterLink :to="link">
        <button class="bg-noir text-blanc text-sm sm:text-base p-1 sm:p-2 px-2 sm:px-3 rounded-lg font-Bold">
            <span>{{ text }}</span>
        </button>
    </RouterLink>
</template>