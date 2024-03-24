<script setup lang="ts"> 


</script>
<template>
    <div class="mt-24 mb-24 sm:mt-40">
        <h1 class="text-center text-bleu font-Heavy text-2xl sm:text-4xl">Présentation</h1>
        <div class="grid__about sm:mt-10 lg:mt-20 md:px-10 xl:px-[20%]">
            <div>
                <img src="/img/Photo_Faris.png" alt="Photo" class="rounded-lg">
                <a href="/file/CV_Faris_HALEPOVIC.pdf" download="CV_Faris_HALEPOVIC.pdf"><div class="text-bleu mt-2 text-center border-2 p-1 rounded-md transition-all duration-500 pointer hover:text-blanc hover:bg-bleu hover:border-bleu hover:shadow-md">Télécharger mon CV</div></a>
            </div>
            <div class="font-Roman grid h-full justify-between max-sm:gap-4 lg:py-6">
                <p>Je m’appelle Faris HALEPOVIC, j’ai 21 ans et je suis étudiant en deuxième année de BUT MMI à Montbéliard.</p>
                <p>J’aime apprendre de nouvelles choses, je me passionne à tout. Je suis quelqu’un de très minutieux et précis, j’aime ordonner mon travail et me donner des objectifs clairs.</p>
                <p>A travers ce Portfolio vous pourrez découvrir ma passion qu’est le manga et les animes avec mes différentes réalisations.</p>
                <div>    
                    <p class="">Si vous désirez me contacter voici mes informations :</p>
                    <a href="mailto:faris.halepovic@gmail.com" class="link font-bold">faris.halepovic@gmail.com</a>
                </div>
            </div>
        </div>

        <div>
            <h2 class="text-center text-bleu font-Heavy text-2xl sm:text-4xl mt-10 md:mt-40">Compétences</h2>
            <div class="grid justify-center gap-2 md:gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:px-[10%] mt-5 sm:-10 md:mt-14">
                <div class="grid min-w-[250px] text-center border-2 rounded-md pt-2 sm:p-5 max-w-[400px]">
                    <h3 class="text-bleu text-xl font-Heavy">Programmation</h3>
                    <ul class="flex justify-around mt-8">
                        <li class="text-center">
                            <img class="mx-auto" src="/icons/html.png" alt="logo html">
                            <p class="mt-1">HTML</p>
                        </li>
                        <li class="text-center">
                            <img class="mx-auto" src="/icons/css.png" alt="logo css">
                            <p class="mt-1">CSS</p>
                        </li>
                        <li class="text-center">
                            <img class="mx-auto" src="/icons/Wordpress.png" alt="logo css">
                            <p class="mt-1">Wordpress</p>
                        </li>
                    </ul>
                </div>
                <div class="grid min-w-[250px] text-center border-2 rounded-md pt-2 sm:p-5 max-w-[400px]">
                    <h3 class="text-bleu text-xl font-Heavy">Communication</h3>
                    <ul class="flex justify-around mt-8">
                        <li class="text-center">
                            <img class="mx-auto" src="/icons/indesign.png" alt="logo html">
                            <p class="mt-1">InDesign</p>
                        </li>
                        <li class="text-center">
                            <img class="mx-auto" src="/icons/googledrive.png" alt="logo css">
                            <p class="mt-1">Google Drive</p>
                        </li>
                    </ul>
                </div>
                <div class="grid min-w-[250px] text-center border-2 rounded-md pt-2 sm:p-5 max-w-[400px]">
                    <h3 class="text-bleu text-xl font-Heavy">Graphisme</h3>
                    <ul class="flex justify-around mt-8">
                        <li class="text-center">
                            <img class="mx-auto" src="/icons/photoshop.png" alt="logo html">
                            <p class="mt-1">Photoshop</p>
                        </li>
                        <li class="text-center">
                            <img class="mx-auto" src="/icons/illustrator.png" alt="logo css">
                            <p class="mt-1">Illustrator</p>
                        </li>
                        <li class="text-center">
                            <img class="mx-auto" src="/icons/figma.png" alt="logo css">
                            <p class="mt-1">Figma</p>
                        </li>
                    </ul>
                </div>
                <div class="grid min-w-[250px] text-center border-2 rounded-md pt-2 sm:p-5 max-w-[400px]">
                    <h3 class="text-bleu text-xl font-Heavy">Audiovisuel</h3>
                    <ul class="flex justify-around mt-8">
                        <li class="text-center">
                            <img class="mx-auto" src="/icons/davinci.png" alt="logo html">
                            <p class="mt-1">DaVinci Resolve</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>