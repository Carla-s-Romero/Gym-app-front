<template lang="pug">
div
  .banner-container.position-relative
    v-app-bar.ma-auto.mt-10(
    rounded="xl"
    flat
    elevation="2"
    style="position: absolute; max-width: 1000px; background: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(158, 154, 154, 0.5) 43%, rgba(255, 255, 255, 0.5) 100%);"
    ) 
</template>

<script>
export default {
  name: 'AppHeader',

  data: () => ({
    
  }),
};
</script>

<style scoped>
.banner-container {
    width: 100%;
    height: 90vh;
    background-image: url('@/assets/img/banner-principal.png');
    background-size: cover;
    background-position: center;
}
</style>