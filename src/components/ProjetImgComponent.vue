<script setup lang="ts">
import btnArrow from '@/components/icons/btnArrow.vue'

defineProps<{
    imgPath: string
    imgAlt?: string
    url: string
}>()
</script>

<template>
    <div class="contents rounded-lg overflow-hidden mx-auto">
        <RouterLink :to="url" class="grid__img-hover">
            <div class="relative w-full h-full">
                <btnArrow class="arrow z-10 absolute top-5 right-4 w-8 h-8 md:w-10 md:h-10"/>
                <img class="grid__projet--img rounded-lg" :src="imgPath" :alt="imgAlt">
            </div></RouterLink>
    </div>
</template>