<script setup lang="ts">
import { ref, onMounted } from 'vue';

import ArrowAnimation from '@/components/ArrowAnimation.vue'
import ProjetImgComponent from '@/components/ProjetImgComponent.vue'

// Effect machine à écrire
const textEcriture = ref<HTMLElement | null>(null);
let contenuEciture = '';

onMounted(() => {
    // Récupérer l'élément avec la classe .ecriture-machine lors du montage du composant
    textEcriture.value = document.querySelector('.ecriture-machine');
    // Vérifier si l'élément existe avant de continuer
    if (textEcriture.value) {
        // Sauvegarder le contenu initial de l'élément
        contenuEciture = textEcriture.value.innerHTML;
        // Vider le contenu de l'élément
        textEcriture.value.innerHTML = '';
        // Initialiser un compteur pour l'effet machine à écrire
        let i = 0;
        // Définir une fonction pour l'effet machine à écrire
        const timer = setInterval(() => {
            // Vérifier si tous les caractères ont été écrits
            if (i < contenuEciture.length) {
                // Ajouter un caractère à chaque intervalle
                textEcriture.value!.innerHTML += contenuEciture.charAt(i);
                i++;
            } else {
                clearInterval(timer); // Arrêter l'intervalle lorsque tout le texte a été écrit
            }
        }, 100); // Intervalle de temps pour l'effet machine à écrire (100 millisecondes)
    }
});
// //
</script>
<template>
    <div class="mt-[12vh] sm:mt-[20vh] md:px-[10%] lg:px-[12%]">
        <div class="text-center">
            <h1 class="mb-4 text-2xl sm:text-4xl font-Bold tracking-wider text-bleu">Mes réalisations</h1>
            <div class="sm:text-[22px]">
                <p>Voici la galerie de mes réalisations.</p>
                <p>Vous y trouverez mes projets de couverture de manga personnalisée !</p>
            </div>
        </div>

        <section class="sm:mt-32">
            <div class="flex items-center gap-3">
                <ArrowAnimation />
                <h2 class="ecriture-machine font-Bold sm:text-3xl">Couvertures dans le style de bleach -</h2>
            </div>
            <p class="ml-5 mt-3 sm:text-lg">Découvrez mes jaquettes mangas qui reprennent le style incontournable du manga “Bleach” avec une apparence simple et épuré.</p>
            <div class="projet__grid">
                <div class="projet__grid--first">
                    <ProjetImgComponent imgPath="/img/home_page/Portfolio.png" url="/projets" alt="Image d'illustration projet" />
                    <ProjetImgComponent imgPath="/img/home_page/Portfolio.png" url="/projets" alt="Image d'illustration projet" />
                </div>
                <div class="projet__grid--second">
                    <ProjetImgComponent imgPath="/img/home_page/Portfolio.png" url="/projets" alt="Image d'illustration projet" />
                    <ProjetImgComponent imgPath="/img/home_page/Portfolio.png" url="/projets" alt="Image d'illustration projet" />
                </div>
            </div>
        </section>

        <section class="sm:mt-32">
            <div class="flex items-center gap-3">
                <ArrowAnimation />
                <h2 class="ecriture-machine font-Bold sm:text-3xl">Fresque manga -</h2>
            </div>
            <p class="ml-5 mt-3 sm:text-lg">Découvrez des fresques mangas, avec une fois tout les mangas mit bout-à-bout forment une fresque qui permet d’embellir votre mangathèque.</p>
            <div class="projet__grid--manga">
                <ProjetImgComponent imgPath="/img/home_page/Portfolio.png" url="/projets" alt="Image d'illustration projet" />
                <div class="projet__grid--second-manga">
                    <ProjetImgComponent imgPath="/img/home_page/Portfolio.png" url="/projets" alt="Image d'illustration projet" />
                    <ProjetImgComponent imgPath="/img/home_page/Portfolio.png" url="/projets" alt="Image d'illustration projet" />
                </div>
            </div>
        </section>
    </div>
</template>

<style>
/* Animation curseur machine à écrire */
.ecriture-machine {
    white-space: nowrap;
    overflow: hidden;
    animation: curseur 0.5s ease infinite;
}
@keyframes curseur {
    0%, 100% {
        border-right: opacity(0);
    }
    50% {
        border-right: opacity(1);
    }
}

.projet__grid, .projet__grid--manga {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.projet__grid--first, 
.projet__grid--second,  
.projet__grid--second-manga {
    display: grid;
    gap: 1rem;
    overflow: hidden;
}
.projet__grid--first {
    grid-template-columns: 2fr 3fr;
}
.projet__grid--second {
    grid-template-columns: 1fr 1fr;
}
.projet__grid--first img, .projet__grid--second img, .projet__grid--manga img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
}
.projet__grid--manga {
    grid-template-columns: 3fr 2fr;
}

.grid__img-hover, .grid__img-hover .grid__projet--img{
    transition: all 0.4s ease;
}
.grid__img-hover:hover .grid__projet--img{
    background-color: rgb(0, 0, 0, 0.1);
    filter: brightness(0.8);
}
.grid__img-hover:hover .grid__projet--img {
    transform: scale(1.05);
}
.arrow {
    opacity: 0;
    transition: opacity 0.4s ease;
}
.grid__img-hover:hover .arrow {
    opacity: 1;
}

@media (max-width: 768px) {
    .projet__grid--first, 
    .projet__grid--second, 
    .projet__grid--manga {
        grid-template-columns: 1fr;
        max-width: 90%;
        margin-inline: auto;
        gap: 0.5rem;
    }
    .projet__grid,
    .projet__grid--manga,
    .projet__grid--second-manga {
        gap: 0.5rem;
    }
}
</style>