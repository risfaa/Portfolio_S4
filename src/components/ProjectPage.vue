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
    figma1: string;
    figma2: string;
    figma3: string;
    photoshop1: string;
    photoshop2: string;
    photoshop3: string;
    gifPhotoshop: string;
}>();
</script>
<template>
    <div class="mt-[12vh] md:px-[10%]">
        <HeroProjet :imgPath="imgPathHero" :titre="titre" :sousTitre="sousTitre" :textBtn="textBtn" :link="link" />
    </div>
    <div class="grid__projects my-10 lg:my-40 md:px-10 lg:gap-20 xl:px-[20%]">
        <img :src="imgPathCover" alt="Img couverture" class="rounded-lg">
        <div class="md:text-lg grid h-full justify-between gap-4 lg:py-10">
            <slot name="description"></slot>
        </div>
    </div>
    <div>
        <h3 class="mx-auto leading-tight max-w-[950px] font-Bold sm:text-center text-lg sm:text-3xl sm:mt-20 mb-8 md:mb-20">{{ titreFresque }}</h3>
        <slot name="fresque"></slot>
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
                <img :src="figma1" alt="Image croquis figma" class="rounded-md">
                <img :src="figma2" alt="Image croquis figma" class="rounded-md">
                <img :src="figma3" alt="Image croquis figma" class="rounded-md">
            </div>
        </div>
        <div class="grid justify-center mt-10 md:mt-40 md:px-10 xl:px-[15%] mx-auto">
            <h4 class="font-Bold md:text-2xl">Résultat final photoshop :</h4>
            <div class="grid grid-cols-3 gap-2 mt-3 md:mt-5 md:gap-5 xl:gap-8">
                <img :src="photoshop1" alt="Image photoshop" class="rounded-md">
                <img :src="photoshop2" alt="Image photoshop" class="rounded-md">
                <img :src="photoshop3" alt="Image photoshop" class="rounded-md">
            </div>
        </div>
        <div class="mt-5 md:mt-20 md:px-10 xl:px-[15%] mx-auto">
            <img :src="gifPhotoshop" alt="Image gif photoshop" class="rounded-md">
        </div>
    </div>
    <div class="sm:px-10 lg:px-[15%] py-5 lg:py-20">
        <p class="max-w-[900px] font-Bold leading-tight text-base lg:text-2xl mt-14 sm:mt-32 sm:pr-[20%] lg:pr-0 mb-8 sm:mb-20">Vous pouvez découvrir toutes les couvertures dans leurs entièreté avec compris la 1er et 4ème de couverture ainsi que la tranche ci dessous.</p>
        <div class="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8 transition-all duration-300">
            <slot name="couvertures"></slot>
        </div>
    </div>
</template>