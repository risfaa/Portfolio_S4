<script setup lang="ts">
import BtnComponent from '../components/BtnComponent.vue';

defineProps<{
    imgPath: string,
    titre: string,
    sousTitre?: string,
    textBtn: string,
    link: string
}>()
</script>
<template>
    <div>
        <div class="flex relative w-full max-h-[30vh] md:max-h-[40vh] lg:max-h-[70vh]">
            <BtnComponent class="absolute top-3 left-3 sm:top-8 sm:left-8" :text="textBtn" :link="link" />
            <img :src="imgPath" alt="Image couverture" class="rounded-lg object-cover">
        </div>
        <div class="font-Bold text-2xl md:text-5xl max-w-[900px] leading-tight mt-4">
            <h2>{{ titre }}</h2>
            <h2>{{ sousTitre }}</h2>
        </div>
    </div>
</template>