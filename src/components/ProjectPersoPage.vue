<script setup lang="ts">
import HeroProjet from '../components/HeroProjet.vue';
import CarouselAvAp from '../components/CarouselAvAp.vue';

defineProps<{
    imgPathHero: string;
    titre: string;
    sousTitre?: string;
    textBtn: string;
    link: string;
    imageUrls: string[];
    gridImgFull: string;
    gridImgWidht: string;
    gridImgAnnexe1: string;
    gridImgAnnexe2: string;
}>();
</script>
<template>
    <div class="mt-[12vh] md:px-[10%]">
        <HeroProjet :imgPath="imgPathHero" :titre="titre" :sousTitre="sousTitre" :textBtn="textBtn" :link="link" />
    </div>
    <div class="mt-5 sm:mt-[10%] sm:px-[10%] max-w-[1200px] mx-auto sm:text-xl">
        <slot name="description"></slot>
    </div>
    <div>
        <CarouselAvAp :images="imageUrls" />
    </div>
    <div class="sm:px-10 lg:px-[15%]">
        <p class="max-w-[900px] font-Bold leading-tight text-base lg:text-2xl mt-14 sm:mt-32 sm:pr-[20%] lg:pr-0 mb-8 sm:mb-20">Vous pouvez découvrir toutes les couvertures dans leurs entièreté avec compris la 1er et 4ème de couverture ainsi que la tranche ci dessous.</p>
    </div>
    <div class="grid gap-3 my-10 sm:px-10 sm:grid-cols-2 lg:gap-5 lg:px-[15%] lg:my-40">
        <img class="rounded-md mx-auto sm:h-full" :src="gridImgFull" alt="Image couverture manga">
        <div class="grid gap-3 lg:gap-5">
            <img class="rounded-md" :src="gridImgWidht" alt="Image couverture manga">
            <div class="grid gap-3 grid-cols-2 lg:gap-5">
                <img class="rounded-md" :src="gridImgAnnexe1" alt="Image couverture">
                <img class="rounded-md" :src="gridImgAnnexe2" alt="Image couverture manga">
            </div>
        </div>
    </div>
</template>