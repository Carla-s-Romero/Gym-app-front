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

          v-container.mt-2
            BenefitList(:benefits="benefits")
</template>

<script>
import BenefitList from '../Common/BenefitList.vue'

export default {
  name: 'MuscleBenefitsSection',

  components: {
    BenefitList
  },

  data: () => ({
    benefits: [
        {
          title: 'Saúde Mental - ',
          description: 'A musculação reduz o estresse, combate a ansiedade e melhora o humor. Ela libera endorfinas, os hormônios do bem-estar, fazendo você se sentir mais disposto e positivo no dia a dia.'
        },
        {
          title: 'Saúde do Corpo - ',
          description: 'Treinar regularmente melhora a circulação, reduz o risco de doenças como diabetes, colesterol alto, hipertensão e fortalece ossos e articulações.'
        },
        {
          title: 'Composição Corporal - ',
          description: 'Você queima gordura, ganha massa magra e acelera seu metabolismo. O resultado? Um corpo mais forte, definido e funcional.'
        },
        {
          title: 'Postura e Mobilidade - ',
          description: 'A musculação corrige desequilíbrios, melhora o alinhamento do corpo e te dá mais mobilidade para atividades simples como sentar, correr ou até subir escadas.'
        },
        {
          title: 'Confiança e Autoestima - ',
          description: 'A evolução nos treinos fortalece sua disciplina e sua autoestima. Cada conquista por menor que pareça reforça a certeza de que você é capaz de ir além.'
        }
      ]
  }),
};
</script>

<style scoped>
</style>
