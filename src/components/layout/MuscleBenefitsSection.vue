<template lang="pug">
    v-row.mt-10
      v-col(cols="12" md="6" order="2" order-md="1")
        v-img.rounded-xl(src="@/assets/images/treino-cardio.png" width="100%" :height="$vuetify.breakpoint.smAndDown ? '60vh' : '80vh'")
      v-col(cols="12" md="6" order="1" order-md="2")
        section.ma-auto.px-4.px-md-10.py-6
          .text-h4.font-weight-black Por que você deve treinar?
          .red-line.mt-2.mb-4

          .text-body-1.pb-2
            | Treinar musculação não é apenas sobre ficar mais forte ou ter músculos maiores. É sobre melhorar sua vida em muitas maneiras diferentes.

          .text-body-1.font-weight-bold Quando você melhora a sua forma física, você melhora a sua:
          
          v-container.pa-0.mt-2
            BenefitList
</template>

<script>
import BenefitList from '../Common/BenefitList.vue'

export default {
  name: 'MuscleBenefitsSection',

  components: {
    BenefitList
  },

  data: () => ({
  }),
};
</script>

<style scoped>
</style>
