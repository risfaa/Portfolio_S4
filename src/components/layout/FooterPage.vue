<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import Instagram from '@/components/icons/Instagram.vue'
import LinkedIn from '@/components/icons/linkedin.vue'

const route = useRoute()
const showFooter = ref(true)

watch(route, () => {
  if (route.path === '/') {
    showFooter.value = false
  } else {
    showFooter.value = true
  }
})
</script>

<template>
  <footer v-if="showFooter" class="bg-noir text-blanc text-center p-10 sm:p-20">
    <h1 class="font-Heavy text-2xl sm:text-3xl">Faris HALEPOVIC</h1>
    <a href="/file/CV_Faris_HALEPOVIC.pdf" download="CV_Faris_HALEPOVIC.pdf" class="text-bleu text-lg sm:text-xl hover:underline">Télécharger mon CV</a>
    <ul class="text-xl sm:text-2xl flex justify-center gap-5 mt-5">
      <li><RouterLink to="/projets">Projets</RouterLink></li>
      <li><RouterLink to="/about">A propos</RouterLink></li>
    </ul>
    <ul class="flex justify-center gap-5 mt-6">
      <li><a href=""><Instagram /></a></li>
      <li><a href=""><LinkedIn /></a></li>
    </ul>
  </footer>
</template>