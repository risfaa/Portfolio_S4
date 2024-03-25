<script setup lang="ts">
import btnArrow from '@/components/icons/btnArrow.vue'

defineProps<{
    imgPath: string
    imgAlt?: string
    url: string
}>()
</script>

<template>
    <div class="relative rounded-lg overflow-hidden mx-auto">
        <RouterLink :to="url" class="grid__img-hover">
            <btnArrow class="arrow z-10 absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10"/>
            <img class="grid__projet--img rounded-lg sm:p-2" :src="imgPath" :alt="imgAlt">
        </RouterLink>
    </div>
</template>