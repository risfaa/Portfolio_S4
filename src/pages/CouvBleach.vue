<script setup lang="ts">
import ProjectPage from '../components/ProjectPage.vue';
import FresqueComponent from '../components/FresqueComponent.vue';
import FullCouvComponent from '../components/FullCouvComponent.vue';

</script>
<template>
    <ProjectPage 
        imgPathHero="img/home_page/DESIGNSYNDROME-PAPERCUT-TEXTURE.png" 
        titre="Couvertures Hunter X Hunter dans le style Bleach" 
        textBtn="Retour" 
        link="/"
        imgPathCover="/img/Photo_Faris.png"
        titreFresque="Voici les couvertures que j’ai réaliser pour le manga Hunter X Hunter dans le style des couvertures du manga Bleach."
    >
        <template #description>
            <p>Il y 3 ans une trend est apparue sur les réseaux sociaux qui consiste à reproduire le style des couvertures du manga “bleach” de l’auteur <em>TITE Kubo</em> et de les appliquer sur les couverture d’autres mangas.</p>
            <p>C’est en découvrant cette trend et un artiste français <em>dendenmushiproduction</em> sur instagram qui lui aussi de son coté fait également des couvertures personnalisée du manga One piece dans le style des couverutres du manga Bleach ; que j’ai décider de me lancer moi aussi dans la confection de personnalisation de couverture de mangas dans le style de “Bleach”.</p>
        </template>
        <template #fresque>
            <FresqueComponent 
                img1="/img/Photo_Faris.png"
                img2="/img/Photo_Faris.png"
                img3="/img/Photo_Faris.png"
                img4="/img/Photo_Faris.png"
                img5="/img/Photo_Faris.png"
                img6="/img/Photo_Faris.png"
                img7="/img/Photo_Faris.png"
                img8="/img/Photo_Faris.png"
                img9="/img/Photo_Faris.png"
                img10="/img/Photo_Faris.png"
                img11="/img/Photo_Faris.png"
                img12="/img/Photo_Faris.png"
                imgCouv="/img/Photo_Faris.png"
            />
        </template>
        <template #couvertures>
            <FullCouvComponent imgPath="/img/Photo_Faris.png" imgPathFull="img/home_page/DESIGNSYNDROME-PAPERCUT-TEXTURE.png" />

        </template>
    </ProjectPage>
</template> 