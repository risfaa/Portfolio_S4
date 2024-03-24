<script setup lang="ts">
import HeroProjet from '../components/HeroProjet.vue';

defineProps<{
    imgPathHero: string;
    imgPathCover: string;
    titre: string;
    sousTitre?: string;
    textBtn: string;
    link: string;
    titreFresque?: string;
}>();
</script>
<template>
    <div class="mt-[12vh] md:px-[10%]">
        <HeroProjet :imgPath="imgPathHero" :titre="titre" :sousTitre="sousTitre" :textBtn="textBtn" :link="link" />
    </div>
    <div class="grid__projects my-10 lg:my-40 md:px-10 lg:gap-20 xl:px-[20%]">
        <img :src="imgPathCover" alt="Img couverture" class="rounded-lg">
        <div class="font-Roman grid h-full justify-between gap-4 lg:py-10">
            <slot name="description"></slot>
        </div>
    </div>
    <div>
        <h3 class="mx-auto leading-tight max-w-[950px] font-Bold sm:text-center text-lg sm:text-3xl sm:mt-20 mb-8 md:mb-20">{{ titreFresque }}</h3>
        <slot name="fresque"></slot>
    </div>
    <div class="sm:px-10 lg:px-[15%] py-5 lg:py-40">
        <p class="max-w-[900px] font-Bold leading-tight text-base lg:text-2xl mt-14 sm:mt-32 sm:pr-[20%] lg:pr-0 mb-8 sm:mb-20">Vous pouvez découvrir toutes les couvertures dans leurs entièreté avec compris la 1er et 4ème de couverture ainsi que la tranche ci dessous.</p>
        <div class="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8 transition-all duration-300">
            <slot name="couvertures"></slot>
        </div>
    </div>
</template>