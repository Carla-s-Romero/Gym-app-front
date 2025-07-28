<template lang="pug">
v-row#training-tips
  v-col(cols="12")
      .text-h4.font-weight-black.mb-4 Quais são os principais benefícios da Musculação?
      .red-line.mt-2.mb-4

      WorkoutTipsList(:tips="tips")

</template>

<script>
import WorkoutTipsList from '../Common/WorkoutTipsList.vue'
export default {
    name: 'TrainingAssemblyTips',
    components: {
      WorkoutTipsList
    },
    data: () => ({
      tips: [
        {
          title: 'Defina um Objetivo Claro',
          description: 'Antes de começar qualquer treino de musculação, é essencial saber exatamente o que você quer alcançar. Ter um objetivo bem definido serve como um mapa que orienta todas as suas escolhas na academia, desde os exercícios selecionados até o número de séries, repetições e o tempo de descanso.',
          itemsList: [
            {
              titleList: 'Você quer ganhar massa muscular? ',
              contentList: 'O foco será em treinos com cargas mais pesadas e menos repetições.'
            },
            {
              titleList: 'Seu objetivo é emagrecer e definir? ',
              contentList: 'O ideal é combinar musculação com treinos mais dinâmicos e uma alimentação voltada ao déficit calórico. '
            },
            {
              titleList: 'Deseja aumentar sua força?',
              contentList: 'Isso exige progressões específicas e estímulos neuromusculares intensos. '
            },
            {
              titleList: 'Ou seu foco é melhorar a resistência muscular? ',
              contentList: 'Então o caminho envolve séries mais longas e cargas moderadas.'
            }
          ],
          textFinal: 'Definir seu objetivo também ajuda a manter a motivação, pois você passa a acompanhar seu progresso com mais clareza. Com um propósito bem traçado, o treino deixa de ser aleatório e se transforma em um plano eficiente rumo aos resultados desejados'
        },
        {
          title: 'Escolha a Divisão de Treino Ideal',
          description: 'A divisão de treino é a forma como você organiza os grupos musculares ao longo da semana. Ela deve considerar seu objetivo, nível de experiência e quantos dias por semana você consegue treinar. Escolher a divisão certa ajuda a melhorar o desempenho, evitar lesões e otimizar a recuperação muscular. Exemplo:',
          table: {
            headers: ['Nível', 'Frequência semanal', 'Tipo de Divisão', 'Exemplo de Organização'],
            rows: [
              ['Iniciante', '2 a 3x por semana', 'Full Body (corpo inteiro)', 'Seg: Corpo todo<br>Qua: Corpo todo<br>Sex: Corpo todo'],
              ['Intermediário', '3 a 4x por semana', 'AB (superior/inferior)', 'Seg: Superior<br>Ter: Inferior<br>Qui: Superior<br>Sex: Inferior'],
              ['Avançado', '5 a 6x por semana', 'ABC (divisão por grupos)', 'Seg: Peito + Tríceps<br>Ter: Costas + Bíceps<br>Qua: Pernas + Ombro<br>Qui: Descanso<br>Sex: Repetição A<br>Sáb: Repetição B']
            ]
          },
          importantTips: {
            items: [
              {
                title: 'Garanta tempo de recuperação',
                content: 'Sempre deixe pelo menos 48h de descanso para o mesmo grupo muscular.'
              },
              {
                title: 'Frequência é essencial',
                content: 'Treinar cada grupo muscular 2x por semana geralmente traz melhores resultados.'
              },
              {
                title: 'Treina apenas 2 vezes por semana?',
                content: 'A divisão Full Body (corpo inteiro) é a mais indicada. Ela garante que todos os grupos musculares sejam trabalhados em cada sessão, aproveitando ao máximo o tempo disponível.'
              },
              {
                title: 'Consegue treinar 4 vezes por semana?',
                content: 'A divisão AB (superior/inferior) é uma excelente escolha. Ela permite alternar os grupos musculares, oferecendo estímulos eficazes com tempo adequado de recuperação..'
              },
              {
                title: 'Busca performance, definição ou ganho avançado de massa?',
                content: 'A divisão ABC é ideal. Com ela, você pode se dedicar com mais intensidade a grupos musculares específicos em cada treino, otimizando os resultados.'
              },
            ]
          }
        },
        {
          title: 'Conheça os Exercícios Compostos',
          description: 'Os exercícios compostos devem ser a base do seu treino. Eles envolvem múltiplas articulações e grupos musculares ao mesmo tempo, proporcionando mais gasto calórico, maior recrutamento muscular e eficiência nos resultados. Exemplo: Agachamento, Supino reto, Terra, Barra fixa ou puxada. Ao iniciá-los no começo do treino, quando você está com mais energia e força, você consegue maior desempenho e segurança na execução. Além disso, eles ajudam a melhorar força global e servem como base para os exercícios isolados que virão depois.'
        },
        {
          title: 'Comece pelos Exercícios Compostos',
          description: 'Definir corretamente o número de séries, repetições e o tempo de descanso é fundamental para que o treino seja eficaz e seguro, além de estar alinhado com seu objetivo específico. Cada combinação desses fatores gera um estímulo diferente no músculo e no sistema cardiovascular:',
          itemsList: [
            {
              titleList: 'Séries e repetições adequadas ',
              contentList: 'garantem que você esteja desafiando o músculo na intensidade certa, promovendo adaptações como crescimento, força ou resistência.'
            },
            {
              titleList: 'Tempo de descanso ',
              contentList: 'influencia a recuperação entre os esforços. Descansos curtos aumentam a resistência e o gasto calórico, enquanto descansos mais longos permitem levantar cargas maiores e melhorar a força.'
            },
          ],
          textFinal: 'Sem esse planejamento, o treino pode ser ineficiente, por exemplo, descansar pouco demais pode prejudicar a execução correta do exercício, e descansar demais pode reduzir a intensidade do estímulo. Por isso, ajustar esses parâmetros de acordo com sua meta é o que vai fazer o treino funcionar de verdade, evitando desperdício de tempo e riscos de lesão.'
        }
      ]
    }
  )
}
</script>

<style scoped>
</style>
