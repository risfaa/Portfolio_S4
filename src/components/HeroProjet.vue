<script setup lang="ts">
import BtnComponent from '../components/BtnComponent.vue';

defineProps<{
    imgPath: string,
    titre: string,
    textBtn: string,
    link: string
}>()
</script>
<template>
    <div>
        <div class="relative">
            <BtnComponent class="absolute top-3 left-3 sm:top-8 sm:left-8" :text="textBtn" :link="link" />
            <img :src="imgPath" alt="Image couverture" class="rounded-lg">
        </div>
        <h2 class="font-Bold text-2xl md:text-5xl max-w-[900px] leading-tight mt-4">{{ titre }}</h2>
    </div>
</template>