<template lang="pug">
v-row.pt-4.pl-12
  v-col.pl-12(cols="12")
    section.ma-auto.px-12.py-6.white--text
      .text-h4.font-weight-black.mb-4 Quais são os principais benefícios da Musculação?
      .red-line.mt-2.mb-4

      p.mb-6.text-body-1(style="width: 80%;") A musculação vai muito além da estética. Ela é uma prática completa que traz benefícios físicos, mentais e metabólicos, sendo recomendada tanto para quem busca performance quanto para quem quer mais saúde e qualidade de vida no dia a dia. Quando praticada de forma regular e com orientação adequada, os efeitos positivos podem ser sentidos em poucas semanas, tanto no corpo quanto na mente.

      BenefitCard
</template>

<script>
import BenefitCard from '../Carousel/BenefitCard.vue'

export default {
  name: 'BenefitCards',

  components: {
    BenefitCard
  },

  data: () => ({   
  })
}
</script>
