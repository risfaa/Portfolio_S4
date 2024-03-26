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
    figma1: string;
    figma2: string;
    figma3: string;
    photoshop1: string;
    photoshop2: string;
    photoshop3: string;
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
    <div class="mt-12 md:mt-44">
        <div class="md:px-10 xl:px-[15%] mx-auto md:text-lg">
            <p>Pour la création de ces jaquettes je reprends tout les chapitres présents dans le tome, je réfléchis aux personnages et aux moments qui m’ont marqué, et ensuite je définis quel personnage je souhaite mettre en avant.</p>
            <p class="mt-4 md:mt-8">Pour la structure de la couverture, je suis mon instinct et laisse place à ma créativité sur la position du logo, du personnage et du texte.</p>
            <p class="mt-4 md:mt-8">Lors du processus de création, j’utilise Figma pour faire un croquis pour avoir une idée du rendu finale. Puis quand je suis satisfait du résultat du croquis je met tout au propre sur Photoshop.</p>
        </div>
        <div class="grid justify-center mt-10 md:mt-40 md:px-10 xl:px-[15%] mx-auto">
            <h4 class="font-Bold md:text-2xl">Croquis figma :</h4>
            <div class="grid grid-cols-3 gap-2 mt-3 md:mt-5 md:gap-5 xl:gap-8">
                <img :src="figma1" alt="Image croquis figma" class="rounded-md" loading="lazy">
                <img :src="figma2" alt="Image croquis figma" class="rounded-md" loading="lazy">
                <img :src="figma3" alt="Image croquis figma" class="rounded-md" loading="lazy">
            </div>
        </div>
        <div class="grid justify-center mt-10 md:mt-40 md:px-10 xl:px-[15%] mx-auto">
            <h4 class="font-Bold md:text-2xl">Résultat final photoshop :</h4>
            <div class="grid grid-cols-3 gap-2 mt-3 md:mt-5 md:gap-5 xl:gap-8">
                <img :src="photoshop1" alt="Image photoshop" class="rounded-md" loading="lazy">
                <img :src="photoshop2" alt="Image photoshop" class="rounded-md" loading="lazy">
                <img :src="photoshop3" alt="Image photoshop" class="rounded-md" loading="lazy">
            </div>
        </div>
    </div>
    <div class="grid gap-3 my-10 sm:px-10 sm:grid-cols-2 lg:gap-5 lg:px-[15%] lg:my-40">
        <img class="rounded-md mx-auto sm:h-full" :src="gridImgFull" alt="Image couverture manga" loading="lazy">
        <div class="grid gap-3 lg:gap-5">
            <img class="rounded-md" :src="gridImgWidht" alt="Image couverture manga">
            <div class="grid gap-3 grid-cols-2 lg:gap-5">
                <img class="rounded-md" :src="gridImgAnnexe1" alt="Image couverture" loading="lazy">
                <img class="rounded-md" :src="gridImgAnnexe2" alt="Image couverture manga" loading="lazy">
            </div>
        </div>
    </div>
</template>