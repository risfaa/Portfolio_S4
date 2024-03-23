<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showHeader = ref(false)

watch(route, () => {
  if (route.path === '/') {
    showHeader.value = true
  } else {
    showHeader.value = false
  }
})

// Variable etat du menu
const activeMenu = ref(false)
// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
  activeMenu.value = !activeMenu.value;
}
</script>

<template>
  <header>
    <nav class="border__header" v-if="showHeader">
      <ul class="flex justify-center gap-8 sm:gap-12 mt-3">
        <li class="link">
          <RouterLink to="/projets">Projets</RouterLink>
        </li>
        <li class="link">
          <RouterLink to="/about">A propos</RouterLink>
        </li>
      </ul>
    </nav>
    <nav class="bg-noir flex justify-between duration-500 mx-2 sm:w-5/6 sm:mx-auto sm:text-[24px] rounded-md p-4 sm:p-5 sm:px-8 text-blanc mt-5" v-else>
      <div>
        <RouterLink to="/" class="link">Faris HALEPOVIC</RouterLink>
      </div>
      <ul class="menu sm:justify-end sm:gap-8" :class="{ 'menu--mobile' : activeMenu}" v-if="activeMenu">
        <li class="link">
          <RouterLink to="/projets" @click="toggleMenu">Projets</RouterLink>
        </li>
        <li class="link">
          <RouterLink to="/about" @click="toggleMenu">A propos</RouterLink>
        </li>
      </ul>

      <ul class="hidden sm:visible sm:flex sm:justify-end sm:gap-8" v-else>
        <li class="link">
          <RouterLink to="/projets">Projets</RouterLink>
        </li>
        <li class="link">
          <RouterLink to="/about">A propos</RouterLink>
        </li>
      </ul>

      <button class="relative z-10 flex h-5 w-8 flex-col justify-between sm:hidden" @click="activeMenu = !activeMenu">
        <div class="ease h-[2px] w-full transform rounded-full bg-blanc transition duration-300" :class="{
          'translate-y-[9px] rotate-45 bg-blanc': activeMenu,
        }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-blanc transition duration-300" :class="{
          'bg-blanc opacity-0': activeMenu,
        }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-blanc transition duration-300" :class="{
          '-translate-y-[9px] -rotate-45 bg-blanc': activeMenu,
        }"></div>
      </button>
    </nav>
  </header>
</template>