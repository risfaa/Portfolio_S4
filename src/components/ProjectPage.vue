<script setup lang="ts">
import HeroProjet from '../components/HeroProjet.vue';

defineProps<{
    imgPathHero: string;
    imgPathCover: string;
    titre: string;
    textBtn: string;
    link: string;
}>();
</script>
<template>
    <div class="mt-[12vh] md:px-[10%]">
        <HeroProjet :imgPath="imgPathHero" :titre="titre" :textBtn="textBtn" :link="link" />
    </div>
    <div>
        <img :src="imgPathCover" alt="Img couverture">
        <slot name="desription"></slot>
    </div>
</template>