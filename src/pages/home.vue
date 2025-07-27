<template lang="pug">
v-row
  v-col(cols="12")
    Header
    
  v-container
    v-row
      v-col(cols="12")
        section.ma-auto.px-12.py-6
          .text-h4.font-weight-black O que é musculação?
          .red-line.mt-2.mb-4
          .text-body-1
          | A musculação é uma prática de exercício físico baseada na realização de movimentos com resistência, geralmente utilizando pesos livres, máquinas ou o próprio peso do corpo, com o objetivo de gerar contrações musculares controladas. Essas contrações estimulam adaptações no organismo, como o crescimento muscular 
          strong (hipertrofia)
          | , o aumento da força física, e a melhora do condicionamento geral.

      v-col.text-center.pa-0(cols="12")
        v-responsive.mx-auto.mb-0.pb-0(max-width="1000" aspect-ratio="1.8")
          iframe.px-6(width="100%" height="80%" src="https://www.youtube.com/embed/ntm42tvkngk" title="Como a musculação impacta a saúde? | DrauzioCast" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      
      v-col(cols="12" style="padding-top: 0; margin-top: 0;")
        .text-body-1.px-6
          | Ao contrário do que muitos pensam, a musculação não é voltada apenas para atletas ou para quem quer "ficar forte". Trata-se de uma atividade extremamente versátil, que pode ser ajustada para qualquer pessoa, independentemente da idade, do sexo ou do nível de condicionamento físico.
        
  div.white--text.py-10.px-md-4.px-lg-20.mt-16(style="background-color:#121212;")
    BenefitCards

  v-container
    v-row.mt-10
      v-col(cols="12" md="6" order="2" order-md="1")
        v-img.rounded-xl(src="@/assets/img/treino-cardio.png" width="100%" :height="$vuetify.breakpoint.smAndDown ? '60vh' : '80vh'")
      v-col(cols="12" md="6" order="1" order-md="2")
        section.ma-auto.px-4.px-md-10.py-6
          .text-h4.font-weight-black Por que você deve treinar?
          .red-line.mt-2.mb-4

          .text-body-1.pb-2
            | Treinar musculação não é apenas sobre ficar mais forte ou ter músculos maiores. É sobre melhorar sua vida em muitas maneiras diferentes.

          .text-body-1.font-weight-bold Quando você melhora a sua forma física, você melhora a sua:

            v-container.pa-0.mt-2
             ListaApp
</template>
<script>
import Header from '../components/Header/index.vue'
import BenefitCards from '../components/Cards/index.vue'
import ListaApp from '../components/lista/index.vue'

export default {
    name: 'HomeView',

    components: {
      Header,
      BenefitCards,
      ListaApp
    },

    data: () => ({
    }),
};
</script>