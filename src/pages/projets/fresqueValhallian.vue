<script setup lang="">
import ProjectPersoPage from '@/components/ProjectPersoPage.vue';

import CarouselAvAp from '@/components/CarouselAvAp.vue';
const imageUrls = [
  '/img/img_jaquette_avant.png',
  '/img/img_jaquette_apres.jpg',
];

</script>
<template>
    <ProjectPersoPage 
        imgPathHero="/img/mockup_fresque_page_listes_projets/Valhallian_cover.png" 
        titre="Fresque manga -" 
        sousTitre="Valhallian"
        textBtn="Retour" 
        link="/projets"
        :imageUrls=imageUrls
        gridImgFull="/img/mockup_valhallian_page_fresque/mockup_yuyu_hakusho_fresque2.png"
        gridImgWidht="/img/mockup_valhallian_page_fresque/mockup_valhallian_fresque1.png"
        gridImgAnnexe1="/img/mockup_valhallian_page_fresque/mockup_yuyu_hakusho_fresque3.png"
        gridImgAnnexe2="/img/mockup_valhallian_page_fresque/mockup_yuyu_hakusho_fresque4.png"
        figma1="/img/img_info_projet/fresque_valhallian/figma_fresque_valhallian_1.png"
        figma2="/img/img_info_projet/fresque_valhallian/figma_fresque_valhallian_2.png"
        figma3="/img/img_info_projet/fresque_valhallian/figma_fresque_valhallian_3.png"
        photoshop1="/img/img_info_projet/fresque_valhallian/photoshop_fresque_valhallian_1.png"
        photoshop2="/img/img_info_projet/fresque_valhallian/photoshop_fresque_valhallian_2.png"
        photoshop3="/img/img_info_projet/fresque_valhallian/photoshop_fresque_valhallian_3.png"
    >
        <template #description>
            <p class="mt-4 sm:mt-6">Pour ce projet de couverture et tranche personnalisée tout comme les couvertures “Bleach” l’idée me viens d’un artiste belge <em>greysquirrel9</em> sur instagram qui à réaliser plus d’une quarantaine de fresque manga toute aussi admirable les unes que les autres.</p>
            <p class="mt-4 sm:mt-6">C’est en voyant son travail que j’ai voulu faire la même chose pour les série que j’affectionne fortement.</p>
            <p class="mt-4 sm:mt-6">L’idée de base pour ce projet est très simple c’est d’embellire ça mangathèque, de rajouter des couleurs et d’avoir quelque chose de différent qui donne du caractère et de l’âme à sa collection.</p>
        </template>
    </ProjectPersoPage>
</template>