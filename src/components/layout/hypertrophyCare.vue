<template lang="pug">
  v-row#avoid-errors
    v-col.mt-12.px-6(cols="12")
      .text-h4.font-weight-black Como garantir a hipertrofia e quais erros podem ser evitados?
      .red-line.mt-2.mb-4

      .text-body-1
        | A 
        strong hipertrofia muscular
        | é o processo de crescimento do tecido muscular que acontece como resposta ao esforço físico, principalmente ao treinamento com sobrecarga, como ocorre na musculação. Durante os treinos, as fibras musculares sofrem microlesões, e é no período de descanso e recuperação que o corpo entra em ação para reparar essas fibras, tornando-as maiores e mais fortes. Esse ciclo de estímulo, recuperação e adaptação é o que gera o crescimento muscular ao longo do tempo. 
        strong No entanto, para que a hipertrofia aconteça 
        | de forma eficiente, é fundamental seguir alguns princípios essenciais. 

      v-container.px-4.mt-2
        BenefitList(:benefits="benefits")

    v-col(cols="12")
      .text-body-1.mb-4
        | No entanto, é preciso seguir as instruções dos profissionais de saúde para 
        strong evitar riscos associados à prática, como lesões, danos aos músculos ou quadros de exaustão muscular.

      AvoidMistakes(:mistakes="mistakes")
</template>

<script>
import BenefitList from '../Common/BenefitList.vue'
import AvoidMistakes from '../Cards/AvoidMistakes.vue'

export default {
    name: 'HypertrophyCare',

    components: {
      BenefitList,
      AvoidMistakes
    },

    data: () => ({
      benefits: [
        {
          title: 'A sobrecarga progressiva',
          description: ', progressiva é um princípio fundamental na musculação que consiste em aumentar gradualmente o desafio dos seus treinos. Isso pode ser feito aumentando o peso que você levanta, o número de repetições, a quantidade de séries, ou mesmo a intensidade dos exercícios. Esse aumento constante força os músculos a se adaptarem, estimulando o crescimento e o fortalecimento muscular. Sem essa progressão, os músculos acabam se acomodando e o avanço nos resultados diminui.'
        },
        {
          title: 'Alimentação adequada',
          description: ', a alimentação tem um papel fundamental para quem busca hipertrofia muscular. Para que os músculos cresçam e se recuperem, é essencial consumir os nutrientes certos na quantidade correta. Isso inclui proteínas de alta qualidade, que são os blocos de construção dos músculos, além de carboidratos, que fornecem energia para os treinos, e gorduras saudáveis, que ajudam na produção hormonal e no funcionamento do corpo. Manter uma dieta equilibrada e adaptada às suas necessidades potencializa os resultados do treino.'
        },
        {
          title: 'Descanso',
          description: ', embora o treino seja importante para estimular o crescimento muscular, o processo real de desenvolvimento acontece no descanso. Durante as horas de recuperação, especialmente no sono profundo, o corpo libera hormônios como o hormônio do crescimento, que são fundamentais para a regeneração e o fortalecimento dos músculos. Por isso, garantir uma boa qualidade de sono e dar tempo suficiente para o corpo se recuperar entre os treinos é tão importante quanto a própria atividade física.'
        },
        {
          title: 'Consistência',
          description: ', a chave para alcançar resultados duradouros na musculação é a consistência. Não adianta treinar com muita intensidade por alguns dias e depois parar por um longo período. O progresso depende da regularidade e da disciplina em manter uma rotina constante de exercícios, respeitando o ritmo do corpo. Com paciência e perseverança, você constrói uma base sólida para o crescimento muscular e a melhora da saúde.'
        }
      ],
      mistakes: [
      {
        image: require('@/assets/images/training-calendar.png'),
        title: {
          normal: 'Treinar sem',
          highlight: 'planejamento'
        },
        description: 'Ficar trocando de treino toda hora ou treinar aleatoriamente prejudica a evolução. Um plano estruturado é essencial para gerar estímulos consistentes.'
      },
      {
        image: require('@/assets/images/rest-time.png'),
        title: {
          normal: 'Treinar Todos os  ',
          highlight: 'Dias Sem Descanso'
        },
        description: 'Treinar todos os dias sem permitir que o corpo se recupere pode causar overtraining, lesões e estagnação nos resultados. Descanso é parte do progresso.'
      },
      {
        image: require('@/assets/images/healthy-exercise.png'),
        title: {
          normal: 'Fazer os Exercícios ',
          highlight: 'com Má Execução'
        },
        description: 'Usar cargas altas com má postura ou execução incorreta pode limitar os ganhos e aumentar o risco de lesões. Técnica sempre vem antes do peso.'
      },
      {
        image: require('@/assets/images/cardio-control.png'),
        title: {
          normal: 'Excesso ',
          highlight: 'de Cardio'
        },
        description: 'O treino cardiovascular é importante, mas em excesso pode atrapalhar os ganhos musculares, especialmente se for feito com intensidade alta e sem alimentação adequada.'
      },
      {
        image: require('@/assets/images/bad-food.png'),
        title: {
          normal: 'Não Comer ',
          highlight: 'o Suficiente'
        },
        description: 'Sem nutrientes, o corpo não tem como reconstruir os músculos. A hipertrofia depende de um superávit calórico controlado, principalmente com proteínas de qualidade.'
      },
      {
        image: require('@/assets/images/time-to-sleep.png'),
        title: {
          normal: 'Negligenciar ',
          highlight: 'o Sono'
        },
        description: 'Dormir mal reduz os níveis de testosterona e GH (hormônio do crescimento), atrapalhando a recuperação e o crescimento muscular.'
      }
    ]
    }),
}
</script>