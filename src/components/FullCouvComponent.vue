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
}>();
</script>
<template>

    <div class="cursor-pointer" :class="{'fixed top-0 left-0 bg-noir bg-opacity-80 w-[100%] h-[100%]': activeCouv}" @click="toggleCouv">
        <div class="grid__couvertures--img" :class="{ 'grid__couvertures--active': activeCouv }">
            <img :src="imgPath" alt="Image de couverture">
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
    top: 0%;
    left: 0%;
    transform: translate(100%, 30%) scale(1.1);
}
</style>