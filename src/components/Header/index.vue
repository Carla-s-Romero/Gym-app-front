<template lang="pug">
v-app
    .banner-container.position-relative
        v-app-bar.my-10.white--text.lighten-5(
        rounded="xl"
        flat
        elevation="2"
        style="max-width: 1000px; margin: auto; background: linear-gradient(90deg, rgba(255, 255, 255, 0.50) 0%, rgba(158, 154, 154, 0.50) 43.37%, rgba(255, 255, 255, 0.50) 100%);"
        )
            h1.white--text.text--darken-4 
</template>

<script>
export default {
  name: 'AppHeader',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.banner-container {
    width: 100%;
    height: 90vh;
    margin: 0;
    padding: 0;
    background-image: url('~@/assets/banner-principal.png');
    background-size: cover;
    background-position: center;
    position: relative;
}

</style>