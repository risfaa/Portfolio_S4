<script setup lang="ts">
import { ref, onMounted } from 'vue';

import ProjetImgComponent from '@/components/ProjetImgComponent.vue'

// Variable pour l'effet machine à écrire
const textElements = ref<HTMLElement[]>([]);
let contenuEcriture: string[] = [];
let timers: any[] = [];

onMounted(() => {
    // Fonction pour l'effet machine à écrire //
    const startTyping = (element: HTMLElement, contenuInitial: string) => {
        // Efface le contenu de l'élément
        element.innerHTML = '';
        let i = 0;
        const timer = setInterval(() => {
            // Vérifie si tous les caractères ont été écrits
            if (i < contenuInitial.length) {
                // Ajoute un caractère à chaque intervalle
                element.innerHTML += contenuInitial.charAt(i);
                i++;
            } else {
                clearInterval(timer); // Arrête l'intervalle lorsque tout le texte a été écrit
            }
        }, 100); // Intervalle de temps
        // Ajoute le timer à la liste
        timers.push(timer);
    };

    // Récupére tous les éléments
    textElements.value = Array.from(document.querySelectorAll('.ecriture-machine'));
    // Vérifie si des éléments ont été trouvés
    if (textElements.value.length > 0) {
        // Sauvegarde le contenu initial de chaque élément
        contenuEcriture = textElements.value.map((element) => element.innerHTML);

        // Démarre l'effet machine à écrire pour chaque élément
        textElements.value.forEach((element, index) => {
            startTyping(element, contenuEcriture[index]);
        });

        // Redémarre l'effet
        setInterval(() => {
            // Arrête tous les timers précédents
            timers.forEach((timer) => clearInterval(timer));
            // Pour chaque élément, réinitialise le contenu avec le contenu initial et démarre l'effet
            textElements.value.forEach((element, index) => {
                element.innerHTML = contenuEcriture[index];
                startTyping(element, contenuEcriture[index]);
            });
        }, 12000); // Temps avant de redémarrer l'effet
    }
    // //
});
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