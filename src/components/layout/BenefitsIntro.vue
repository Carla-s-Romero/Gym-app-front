<template lang="pug">
v-row
  v-col(cols="12")
    section#what-is.ma-auto.px-12.py-6
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
</template>

<script>
export default {
  name: 'BenefitsIntro',
}
</script>