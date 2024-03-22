<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showFooter = ref(true)

if (route.path === '/') {
  showFooter.value = false
} else {
  showFooter.value = true
}
</script>

<template>
  <footer v-if="showFooter">
    <h1>Footer</h1>
  </footer>
</template>