<script setup lang="ts">
import ProjectPage from '@/components/ProjectPage.vue';
import FresqueComponent from '@/components/FresqueComponent.vue';
import FullCouvComponent from '@/components/FullCouvComponent.vue';

</script>
<template>
    <ProjectPage 
        imgPathHero="/img/mockup_cover_bleach_page_manga_concerner/mockup_tete_page_cover_bleach_chainsaw_man.png" 
        titre="Couvertures Chainsaw Man dans le style Bleach" 
        textBtn="Retour" 
        link="/projets"
        titreFresque="Voici les couvertures que j’ai réaliser pour le manga Chainsaw Man dans le style des couvertures du manga Bleach."
        figma1="/img/Photo_Faris.png"
        figma2="/img/Photo_Faris.png"
        figma3="/img/Photo_Faris.png"
        photoshop1="/img/Photo_Faris.png"
        photoshop2="/img/Photo_Faris.png"
        photoshop3="/img/Photo_Faris.png"
        gifPhotoshop="/img/home_page/DESIGNSYNDROME-PAPERCUT-TEXTURE.png"
    >
        <template #description>
            <p>Il y 3 ans une trend est apparue sur les réseaux sociaux qui consiste à reproduire le style des couvertures du manga “bleach” de l’auteur <em>TITE Kubo</em> et de les appliquer sur les couverture d’autres mangas.</p>
            <p>C’est en découvrant cette trend et un artiste français <em>dendenmushiproduction</em> sur instagram qui lui aussi de son coté fait également des couvertures personnalisée du manga One piece dans le style des couverutres du manga Bleach ; que j’ai décider de me lancer moi aussi dans la confection de personnalisation de couverture de mangas dans le style de “Bleach”.</p>
        </template>
        <template #fresque>
            <FresqueComponent 
                img1="/img/cover_chainsaw_man/tranche_chainsaw_man_tome1.png"
                img2="/img/cover_chainsaw_man/tranche_chainsaw_man_tome2.png"
                img3="/img/cover_chainsaw_man/tranche_chainsaw_man_tome3.png"
                img4="/img/cover_chainsaw_man/tranche_chainsaw_man_tome4.png"
                img5="/img/cover_chainsaw_man/tranche_chainsaw_man_tome5.png"
                img6="/img/cover_chainsaw_man/tranche_chainsaw_man_tome6.png"
                img7="/img/cover_chainsaw_man/tranche_chainsaw_man_tome7.png"
                img8="/img/cover_chainsaw_man/tranche_chainsaw_man_tome8.png"
                img9="/img/cover_chainsaw_man/tranche_chainsaw_man_tome9.png"
                img10="/img/cover_chainsaw_man/tranche_chainsaw_man_tome10.png"
                img11="/img/cover_chainsaw_man/tranche_chainsaw_man_tome11.png"
                img12="/img/cover_chainsaw_man/tranche_chainsaw_man_tome12.png"
                imgCouv="/img/cover_chainsaw_man/1er_couv_cover_bleach_chainsaw_man_tome14.png"
            />
        </template>
        <template #couvertures>
            <FullCouvComponent imgPath="/img/cover_chainsaw_man/1er_couv_cover_bleach_chainsaw_man_tome1.png" imgPathFull="/img/cover_chainsaw_man/jaquette_chainsaw_man_tome1.png" />
            <FullCouvComponent imgPath="/img/cover_chainsaw_man/1er_couv_cover_bleach_chainsaw_man_tome2.png" imgPathFull="/img/cover_chainsaw_man/jaquette_chainsaw_man_tome1.png" />
            <FullCouvComponent imgPath="/img/cover_chainsaw_man/1er_couv_cover_bleach_chainsaw_man_tome3.png" imgPathFull="/img/cover_chainsaw_man/jaquette_chainsaw_man_tome1.png" />
            <FullCouvComponent imgPath="/img/cover_chainsaw_man/1er_couv_cover_bleach_chainsaw_man_tome4.png" imgPathFull="/img/cover_chainsaw_man/jaquette_chainsaw_man_tome1.png" />
            <FullCouvComponent imgPath="/img/cover_chainsaw_man/1er_couv_cover_bleach_chainsaw_man_tome5.png" imgPathFull="/img/cover_chainsaw_man/jaquette_chainsaw_man_tome1.png" />
            <FullCouvComponent imgPath="/img/cover_chainsaw_man/1er_couv_cover_bleach_chainsaw_man_tome6.png" imgPathFull="/img/cover_chainsaw_man/jaquette_chainsaw_man_tome1.png" />
            <FullCouvComponent imgPath="/img/cover_chainsaw_man/1er_couv_cover_bleach_chainsaw_man_tome7.png" imgPathFull="/img/cover_chainsaw_man/jaquette_chainsaw_man_tome1.png" />
            <FullCouvComponent imgPath="/img/cover_chainsaw_man/1er_couv_cover_bleach_chainsaw_man_tome8.png" imgPathFull="/img/cover_chainsaw_man/jaquette_chainsaw_man_tome1.png" />
            <FullCouvComponent imgPath="/img/cover_chainsaw_man/1er_couv_cover_bleach_chainsaw_man_tome9.png" imgPathFull="/img/cover_chainsaw_man/jaquette_chainsaw_man_tome1.png" />
            <FullCouvComponent imgPath="/img/cover_chainsaw_man/1er_couv_cover_bleach_chainsaw_man_tome10.png" imgPathFull="/img/cover_chainsaw_man/jaquette_chainsaw_man_tome1.png" />
            <FullCouvComponent imgPath="/img/cover_chainsaw_man/1er_couv_cover_bleach_chainsaw_man_tome11.png" imgPathFull="/img/cover_chainsaw_man/jaquette_chainsaw_man_tome1.png" />
            <FullCouvComponent imgPath="/img/cover_chainsaw_man/1er_couv_cover_bleach_chainsaw_man_tome12.png" imgPathFull="/img/cover_chainsaw_man/jaquette_chainsaw_man_tome1.png" />
            <FullCouvComponent imgPath="/img/cover_chainsaw_man/1er_couv_cover_bleach_chainsaw_man_tome13.png" imgPathFull="/img/cover_chainsaw_man/jaquette_chainsaw_man_tome1.png" />
            <FullCouvComponent imgPath="/img/cover_chainsaw_man/1er_couv_cover_bleach_chainsaw_man_tome14.png" imgPathFull="/img/cover_chainsaw_man/jaquette_chainsaw_man_tome1.png" />
        </template>
    </ProjectPage>
</template> 