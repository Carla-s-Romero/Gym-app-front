<template lang="pug">
v-row
  v-col(cols="12")
    Header

  v-container
    BenefitsIntro

  div.white--text.py-10.px-md-4.px-lg-20.mt-16(style="background-color:#121212;")
    TrainingBenefits

  v-container
    MuscleBenefitsSection
</template>
<script>
import Header from '../components/layout/Header/index.vue'
import TrainingBenefits from '../components/layout/TrainingBenefits.vue'
import MuscleBenefitsSection from '../components/layout/MuscleBenefitsSection.vue'
import BenefitsIntro from '../components/layout/BenefitsIntro.vue'

export default {
    name: 'HomeView',

    components: {
      Header,
      TrainingBenefits,
      MuscleBenefitsSection,
      BenefitsIntro
    },

    data: () => ({
    }),
};
</script>