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

  v-container
    hypertrophyCare

  v-container(style="margin-top: 4rem;")
    AcademyMap
</template>
<script>
import Header from '../components/layout/Header/index.vue'
import TrainingBenefits from '../components/layout/TrainingBenefits.vue'
import MuscleBenefitsSection from '../components/layout/MuscleBenefitsSection.vue'
import BenefitsIntro from '../components/layout/BenefitsIntro.vue'
import hypertrophyCare from '../components/layout/hypertrophyCare.vue'
import AcademyMap from '../components/layout/AcademyMap.vue'

export default {
    name: 'HomeView',

    components: {
      Header,
      TrainingBenefits,
      MuscleBenefitsSection,
      BenefitsIntro,
      hypertrophyCare,
      AcademyMap
    },

    data: () => ({
    }),
};
</script>