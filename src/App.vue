<template lang="pug">
v-app
  Home
</template>

<script>
import Home from './pages/home.vue'
import './assets/styles/global.css'

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({

  }),
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.v-application {
  padding: 0 !important;
  margin: 0 !important;
}

.v-application__wrap {
  min-height: 100vh;
  padding: 0 !important;
  margin: 0 !important;
}
</style>