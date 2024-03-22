<script setup lang="ts">

</script>

<template>
  <div class="home-page">
    <img src="/img/home_page/Portfolio.png" alt="" class="home_page--img">
  </div>
</template>

<style>
.home-page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/img/home_page/DESIGNSYNDROME-PAPERCUT-TEXTURE.png');
  display: flex;
  justify-content: center;
  align-items: center;
}
.home_page--img {
  width: 75%;
}
@media (min-width: 768px) {
  .home_page--img {
    width: 40%;
    max-width: 550px;
  }
}
</style>