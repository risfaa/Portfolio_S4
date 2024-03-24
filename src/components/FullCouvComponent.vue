<script setup lang="ts">
import { ref } from 'vue';

// Fonction pour ouvrir/fermer la Couverture
function toggleCouv() {
    activeCouv.value = !activeCouv.value;
}
// Variable etat Couv
const activeCouv = ref(false)

defineProps<{
    imgPath: string;
    imgPathFull: string;
}>();
</script>
<template>

    <div class="cursor-pointer" :class="{'fixed top-0 left-0 bg-noir bg-opacity-80 w-[100%] h-[100%]': activeCouv}" @click="toggleCouv" v-scroll-lock="activeCouv">
        <div class="grid__couvertures--img" :class="{ 'grid__couvertures--active': activeCouv }">
            <img v-if="!activeCouv" :src="imgPath" alt="Image de couverture">
            <img v-else :src="imgPathFull" alt="Image couverture complete">
        </div>
    </div>

</template>

<style scoped>
.grid__couvertures--img {
    transition: all 0.3s ease-in-out;
}

.grid__couvertures--img img {
    border-radius: 5px;
}

.grid__couvertures--active {
    position: fixed;
    max-width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.1);
}
</style>