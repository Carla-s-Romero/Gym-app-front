<template lang="pug">
v-row.pt-4.pl-12
  v-col.pl-12(cols="12")
    section.ma-auto.px-12.py-6.white--text
      .text-h4.font-weight-black.mb-4 Quais são os principais benefícios da Musculação?
      .red-line.mt-2.mb-4

      p.mb-6.text-body-1(style="width: 80%;") A musculação vai muito além da estética. Ela é uma prática completa que traz benefícios físicos, mentais e metabólicos, sendo recomendada tanto para quem busca performance quanto para quem quer mais saúde e qualidade de vida no dia a dia. Quando praticada de forma regular e com orientação adequada, os efeitos positivos podem ser sentidos em poucas semanas, tanto no corpo quanto na mente.
    
      v-carousel.pa-0(
        hide-delimiter-background
        height="330"
        cycle
        interval="5000"
        show-arrows
        :show-arrows-on-hover="false"
        )
          v-carousel-item(v-for="n in Math.ceil(cards.length / 3)" :key="n"
          style="margin-top: 82px; margin-left: 80px; width: 70%;"
          )
            v-row
              v-col.pl-20(
                v-for="i in 3"
                :key="i"
                cols="12"
                sm="6"
                md="4"
                height="300"
                v-if="(n - 1) * 3 + i - 1 < cards.length"
              )
                v-card.d-flex.flex-column.justify-center.white--text(
                  elevation="5"
                  height="200"
                  style="background-color: rgba(25, 25, 25, 0.8); border: 2px solid #FF0000;"
                )
                  v-card-title.pb-2 {{ cards[(n - 1) * 3 + i - 1].title }}
                  v-card-text.font-weight-regular.mt-2.px-4.white--text {{ cards[(n - 1) * 3 + i - 1].text }}
</template>


<script>
export default {
  name: 'BenefitCards',
  
  data: () => ({
    cards: [
      {
        title: 'Aumento da Massa Muscular',
        text: 'A musculação estimula o crescimento dos músculos, melhorando o volume, a definição e o desempenho físico.'
      },
      {
        title: 'Fortalecimento Ósseo',
        text: 'O treinamento resistido aumenta a densidade mineral óssea, prevenindo a osteoporose e tornando os ossos mais resistentes a lesões.'
      },
      {
        title: 'Melhora do Metabolismo',
        text: 'Músculos consomem mais energia, mesmo em repouso, o que ajuda a queimar mais calorias e facilita o controle do peso corporal.'
      },
      {
        title: 'Prevenção de Lesões',
        text: 'Articulações e ligamentos mais fortes tornam o corpo menos suscetível a lesões em atividades do dia a dia ou em outros esportes.'
      },
      {
        title: 'Redução do Estresse',
        text: 'A liberação de endorfinas durante o exercício ajuda a reduzir o estresse e a ansiedade, melhorando o bem-estar mental.'
      },
      {
        title: 'Redução do Estresse',
        text: 'A liberação de endorfinas durante o exercício ajuda a reduzir o estresse e a ansiedade, melhorando o bem-estar mental.'
      }
    ]
  })
};
</script>
<style scoped>
.v-card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s;
}
</style>
