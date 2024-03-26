<script setup lang="ts">
import ProjectPage from '@/components/ProjectPage.vue';
import FresqueComponent from '@/components/FresqueComponent.vue';
import FullCouvComponent from '@/components/FullCouvComponent.vue';

</script>
<template>
    <ProjectPage 
        imgPathHero="/img/mockup_cover_bleach_page_manga_concerner/mockup_tete_page_cover_bleach_yuyu_hakusho.png" 
        titre="Couvertures YuYu Hakusho dans le style Bleach" 
        textBtn="Retour" 
        link="/projets"
        titreFresque="Voici les couvertures que j’ai réaliser pour le manga YuYu Hakusho dans le style des couvertures du manga Bleach."
        figma1="/img/img_info_projet/cover_bleach_yuyu_hakusho/figma_cover_yuyu_hakusho_1.png"
        figma2="/img/img_info_projet/cover_bleach_yuyu_hakusho/figma_cover_yuyu_hakusho_2.png"
        figma3="/img/img_info_projet/cover_bleach_yuyu_hakusho/figma_cover_yuyu_hakusho_3.png"
        photoshop1="/img/img_info_projet/cover_bleach_yuyu_hakusho/photoshop_cover_yuyu_hakusho_1.png"
        photoshop2="/img/img_info_projet/cover_bleach_yuyu_hakusho/photoshop_cover_yuyu_hakusho_2.png"
        photoshop3="/img/img_info_projet/cover_bleach_yuyu_hakusho/photoshop_cover_yuyu_hakusho_3.png"
    >
        <template #description>
            <p>Il y 3 ans une trend est apparue sur les réseaux sociaux qui consiste à reproduire le style des couvertures du manga “bleach” de l’auteur <em>TITE Kubo</em> et de les appliquer sur les couverture d’autres mangas.</p>
            <p>C’est en découvrant cette trend et un artiste français <em>dendenmushiproduction</em> sur instagram qui lui aussi de son coté fait également des couvertures personnalisée du manga One piece dans le style des couverutres du manga Bleach ; que j’ai décider de me lancer moi aussi dans la confection de personnalisation de couverture de mangas dans le style de “Bleach”.</p>
        </template>
        <template #fresque>
            <FresqueComponent 
                img1="/img/cover_yuyu_hakusho/tranche_yuyu_hakusho_tome1.png"
                img2="/img/cover_yuyu_hakusho/tranche_yuyu_hakusho_tome2.png"
                img3="/img/cover_yuyu_hakusho/tranche_yuyu_hakusho_tome3.png"
                img4="/img/cover_yuyu_hakusho/tranche_yuyu_hakusho_tome4.png"
                img5="/img/cover_yuyu_hakusho/tranche_yuyu_hakusho_tome5.png"
                img6="/img/cover_yuyu_hakusho/tranche_yuyu_hakusho_tome6.png"
                img7="/img/cover_yuyu_hakusho/tranche_yuyu_hakusho_tome7.png"
                img8="/img/cover_yuyu_hakusho/tranche_yuyu_hakusho_tome8.png"
                img9="/img/cover_yuyu_hakusho/tranche_yuyu_hakusho_tome9.png"
                img10="/img/cover_yuyu_hakusho/tranche_yuyu_hakusho_tome10.png"
                img11="/img/cover_yuyu_hakusho/tranche_yuyu_hakusho_tome11.png"
                img12="/img/cover_yuyu_hakusho/tranche_yuyu_hakusho_tome12.png"
                imgCouv="/img/cover_yuyu_hakusho/1er_couv_cover_bleach_yuyu_hakusho_tome10.png"
            />
        </template>
        <template #couvertures>
            <FullCouvComponent imgPath="/img/cover_yuyu_hakusho/1er_couv_cover_bleach_yuyu_hakusho_tome1.png" imgPathFull="/img/cover_yuyu_hakusho/jaquette_yuyu_hakusho_tome1.png" />
            <FullCouvComponent imgPath="/img/cover_yuyu_hakusho/1er_couv_cover_bleach_yuyu_hakusho_tome2.png" imgPathFull="/img/cover_yuyu_hakusho/jaquette_yuyu_hakusho_tome2.png" />
            <FullCouvComponent imgPath="/img/cover_yuyu_hakusho/1er_couv_cover_bleach_yuyu_hakusho_tome3.png" imgPathFull="/img/cover_yuyu_hakusho/jaquette_yuyu_hakusho_tome3.png" />
            <FullCouvComponent imgPath="/img/cover_yuyu_hakusho/1er_couv_cover_bleach_yuyu_hakusho_tome4.png" imgPathFull="/img/cover_yuyu_hakusho/jaquette_yuyu_hakusho_tome4.png" />
            <FullCouvComponent imgPath="/img/cover_yuyu_hakusho/1er_couv_cover_bleach_yuyu_hakusho_tome5.png" imgPathFull="/img/cover_yuyu_hakusho/jaquette_yuyu_hakusho_tome5.png" />
            <FullCouvComponent imgPath="/img/cover_yuyu_hakusho/1er_couv_cover_bleach_yuyu_hakusho_tome6.png" imgPathFull="/img/cover_yuyu_hakusho/jaquette_yuyu_hakusho_tome6.png" />
            <FullCouvComponent imgPath="/img/cover_yuyu_hakusho/1er_couv_cover_bleach_yuyu_hakusho_tome7.png" imgPathFull="/img/cover_yuyu_hakusho/jaquette_yuyu_hakusho_tome7.png" />
            <FullCouvComponent imgPath="/img/cover_yuyu_hakusho/1er_couv_cover_bleach_yuyu_hakusho_tome8.png" imgPathFull="/img/cover_yuyu_hakusho/jaquette_yuyu_hakusho_tome8.png" />
            <FullCouvComponent imgPath="/img/cover_yuyu_hakusho/1er_couv_cover_bleach_yuyu_hakusho_tome9.png" imgPathFull="/img/cover_yuyu_hakusho/jaquette_yuyu_hakusho_tome9.png" />
            <FullCouvComponent imgPath="/img/cover_yuyu_hakusho/1er_couv_cover_bleach_yuyu_hakusho_tome10.png" imgPathFull="/img/cover_yuyu_hakusho/jaquette_yuyu_hakusho_tome10.png" />
            <FullCouvComponent imgPath="/img/cover_yuyu_hakusho/1er_couv_cover_bleach_yuyu_hakusho_tome11.png" imgPathFull="/img/cover_yuyu_hakusho/jaquette_yuyu_hakusho_tome11.png" />
            <FullCouvComponent imgPath="/img/cover_yuyu_hakusho/1er_couv_cover_bleach_yuyu_hakusho_tome12.png" imgPathFull="/img/cover_yuyu_hakusho/jaquette_yuyu_hakusho_tome12.png" />
        </template>
    </ProjectPage>
</template> 