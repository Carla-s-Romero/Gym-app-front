<template lang="pug">
  v-container.pa-0
    v-row
      v-col(cols="12" v-for="benefit in benefits" :key="benefit.title")
        .text-body-1.mt-2
          span.red-dot
          strong {{ benefit.title }} - 
          | {{ benefit.description }}
</template>


<script>
export default {
    name: 'ListaApp',
  
    components: {
    },
  
    data: () => ({
      benefits: [
        {
          title: 'Saúde Mental',
          description: 'A musculação reduz o estresse, combate a ansiedade e melhora o humor. Ela libera endorfinas, os hormônios do bem-estar, fazendo você se sentir mais disposto e positivo no dia a dia.'
        },
        {
          title: 'Saúde do Corpo',
          description: 'Treinar regularmente melhora a circulação, reduz o risco de doenças como diabetes, colesterol alto, hipertensão e fortalece ossos e articulações.'
        },
        {
          title: 'Composição Corporal',
          description: 'Você queima gordura, ganha massa magra e acelera seu metabolismo. O resultado? Um corpo mais forte, definido e funcional.'
        },
        {
          title: 'Postura e Mobilidade',
          description: 'A musculação corrige desequilíbrios, melhora o alinhamento do corpo e te dá mais mobilidade para atividades simples como sentar, correr ou até subir escadas.'
        },
        {
          title: 'Confiança e Autoestima',
          description: 'A evolução nos treinos fortalece sua disciplina e sua autoestima. Cada conquista por menor que pareça reforça a certeza de que você é capaz de ir além.'
        }
      ]
    }),
};
</script>