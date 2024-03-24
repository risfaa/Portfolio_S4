<script setup lang="ts">
import HeroProjet from '../components/HeroProjet.vue';
import CarouselAvAp from '../components/CarouselAvAp.vue';

defineProps<{
    imgPathHero: string;
    titre: string;
    textBtn: string;
    link: string;
    imageUrls: string[];
}>();
</script>
<template>
    <div class="mt-[12vh] md:px-[10%]">
        <HeroProjet :imgPath="imgPathHero" :titre="titre" :textBtn="textBtn" :link="link" />
    </div>
    <div class="mt-5 sm:mt-[10%] sm:px-[10%] max-w-[1200px] mx-auto sm:text-xl">
        <slot name="description"></slot>
    </div>
    <div>
        <CarouselAvAp :images="imageUrls" />
    </div>
</template>