<script setup lang="ts">
import Arrow from '@/components/icons/Arrow.vue';

</script>

<template>
    <div class="carousel-container">
        <div class="carousel-wrapper">  
            <div v-for="i in 30" class="carousel-items">
                <Arrow class="max-sm:w-5" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.carousel-container {
  overflow: hidden;
  width: 11vh;
}

.carousel-wrapper {
  display: flex;
  gap: 0.5rem;
  animation: slide 30s linear infinite;
}

@keyframes slide {
  from {
    transform: translateX(-550%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>