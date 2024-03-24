<script setup lang="">
import ProjectPersoPage from '@/components/ProjectPersoPage.vue';

import CarouselAvAp from '@/components/CarouselAvAp.vue';
const imageUrls = [
  '/img/home_page/DESIGNSYNDROME-PAPERCUT-TEXTURE.png',
  '/img/Photo_Faris.png',
  '/img/home_page/DESIGNSYNDROME-PAPERCUT-TEXTURE.png',
  '/img/Photo_Faris.png',
];

</script>
<template>
    <ProjectPersoPage 
        imgPathHero="/img/home_page/DESIGNSYNDROME-PAPERCUT-TEXTURE.png" 
        titre="Fresque manga Valhallian the black iron personnalisée" 
        textBtn="Retour" 
        link="/projets"
        :imageUrls=imageUrls
    >
        <template #description>
            <p class="mt-4 sm:mt-6">Pour ce projet de couverture et tranche personnalisée tout comme les couvertures “Bleach” l’idée me viens d’un artiste belge <em>greysquirrel9</em> sur instagram qui à réaliser plus d’une quarantaine de fresque manga toute aussi admirable les unes que les autres.</p>
            <p class="mt-4 sm:mt-6">C’est en voyant son travail que j’ai voulu faire la même chose pour les série que j’affectionne fortement.</p>
            <p class="mt-4 sm:mt-6">L’idée de base pour ce projet est très simple c’est d’embellire ça mangathèque, de rajouter des couleurs et d’avoir quelque chose de différent qui donne du caractère et de l’âme à sa collection.</p>
        </template>
    </ProjectPersoPage>
</template>