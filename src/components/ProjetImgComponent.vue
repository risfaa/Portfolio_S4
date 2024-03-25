<script setup lang="ts">
import btnArrow from '@/components/icons/btnArrow.vue'

defineProps<{
    imgPath: string
    imgAlt?: string
    url: string
}>()
</script>

<template>
    <div class="relative rounded-lg overflow-hidden">
        <RouterLink :to="url" class="grid__img-hover">
            <btnArrow class="arrow z-10 absolute top-2 right-2 w-8 h-8 md:w-10 md:h-10"/>
            <img class="grid__projet--img rounded-md" :src="imgPath" :alt="imgAlt">
        </RouterLink>
    </div>
</template>