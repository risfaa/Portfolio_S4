<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    images: string[];
}>();

let currentIndex = 0;
const totalItems = props.images.length;
let translateValue = ref('0px');

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalItems;
    translateValue.value = '-' + (currentIndex * 100) + '%';
};

const prevSlide = () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    translateValue.value = '-' + (currentIndex * 100) + '%';
};
</script>

<template>
    <div class="relative sm:w-[90%] lg:w-[70%] rounded-lg overflow-hidden mx-auto my-10 sm:my-32">
        <div class="absolute bottom-3 left-3 sm:bottom-8 sm:left-8 z-10">
            <button class="bg-noir text-blanc text-sm sm:text-base p-1 sm:p-2 px-2 sm:px-3 rounded-lg font-Bold"
                @click="prevSlide">
                <span>Avant</span>
            </button>
        </div>
        <div class="absolute bottom-3 right-3 sm:bottom-8 sm:right-8 z-10">
            <button class="bg-noir text-blanc text-sm sm:text-base p-1 sm:p-2 px-2 sm:px-3 rounded-lg font-Bold"
                @click="nextSlide">
                <span>Après</span>
            </button>
        </div>
        <div class="carousel-container">
            <div class="carousel-wrapper" :style="{ transform: 'translateX(' + translateValue + ')' }">
                <div v-for="(image, index) in props.images" :key="index" class="carousel-item">
                    <img :src="image" alt="Carousel Image" class="carousel-image" />
                </div>
            </div>
        </div>
    </div>
</template>