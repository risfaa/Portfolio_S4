<script setup lang="ts">
defineProps<{
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    img5: string;
    img6: string;
    img7: string;
    img8: string;
    img9: string;
    img10: string;
    img11: string;
    img12: string;
    imgCouv: string;
}>();
</script>
<template>
    <div class="sm:px-10 lg:px-[12%]">
        <div class="bg-bleu w-full h-5 sm:h-16 rounded-t-lg"></div>
        <div class="flex">
            <ul class="flex">
                <li class="fresque__liste--items"><img :src="img1" alt="Image couverture manga"></li>
                <li class="fresque__liste--items"><img :src="img2" alt="Image couverture manga"></li>
                <li class="fresque__liste--items"><img :src="img3" alt="Image couverture manga"></li>
                <li class="fresque__liste--items"><img :src="img4" alt="Image couverture manga"></li>
                <li class="fresque__liste--items"><img :src="img5" alt="Image couverture manga"></li>
                <li class="fresque__liste--items"><img :src="img6" alt="Image couverture manga"></li>
                <li class="fresque__liste--items"><img :src="img7" alt="Image couverture manga"></li>
                <li class="fresque__liste--items"><img :src="img8" alt="Image couverture manga"></li>
                <li class="fresque__liste--items"><img :src="img9" alt="Image couverture manga"></li>
                <li class="fresque__liste--items"><img :src="img10" alt="Image couverture manga"></li>
            </ul>
            <img :src="imgCouv" alt="Image couverture aperçu" class="max-sm:hidden max-w-[20%]">
            <ul class="flex">
                <li class="fresque__liste--items"><img :src="img11" alt="Image couverture manga"></li>
                <li class="fresque__liste--items"><img :src="img12" alt="Image couverture manga"></li>
            </ul>
        </div>
        <img :src="imgCouv" alt="Image couverture aperçu" class="sm:hidden w-4/5 mx-auto mt-5">
    </div>
</template>

<style scoped>
.fresque__liste--items img {
    transition: all 0.5s ease;
    border: 1px solid #2575A8;
}

.fresque__liste--items img:hover {
    transform: translateY(-20px);
}

@media (max-width: 768px) {
    .fresque__liste--items img:hover {
    transform: translateY(-10px);
}
}
</style>