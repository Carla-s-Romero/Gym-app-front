<template lang="pug">
div
  .banner-container.position-relative
    v-app-bar.ma-auto.mt-10(
      rounded="xl"
      flat
      elevation="2"
      style="position: absolute; max-width: 1000px; background: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(158, 154, 154, 0.5) 43%, rgba(255, 255, 255, 0.5) 100%);"
    ) 
      v-img.pl-2(src="@/assets/images/logo.png" width="55" height="55" contain)
      v-spacer
      div
        v-btn.font-weight-black(
          text
          color="black" 
          @click="scrollToSection('what-is')"
        ) O que é musculação
        v-btn.font-weight-black(
          text
          color="black"
          @click="scrollToSection('avoid-errors')"
        ) Evitar erros
        v-btn.font-weight-black(
          text
          color="black"
          @click="scrollToSection('training-tips')"
        ) Dicas de como montar o treino
</template>

<script>
export default {
  name: 'AppHeader',

  data: () => ({
    
  }),

  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.banner-container {
    width: 100%;
    height: 90vh;
    background-image: url('@/assets/images/banner-principal.png');
    background-size: cover;
    background-position: center;
}
</style>