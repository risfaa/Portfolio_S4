<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';

</script>

<template>
  <HeaderPage />

  <Suspense>
    <Transition name="fade">
      <div class="p-4">
        <RouterView />
      </div>
    </Transition>
  </Suspense>

  <FooterPage />
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>