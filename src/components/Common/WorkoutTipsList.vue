<template lang="pug">
  v-row
    v-col(cols="12" sm="10" md="12")(v-for="(tip, index) in tips" :key="index")
      div.d-flex.align-center.mb-3
        span.tip-number.rounded-circle.d-flex.align-center.justify-center.mr-3 {{ index + 1 }}
        .text-h5.font-weight-bold {{ tip.title }}

      v-col(cols="12")
        .text-body-1 {{ tip.description }}

        v-list.pa-0(v-if="tip.itemsList && tip.itemsList.length > 0")
          v-list-item(v-for="(item, itemIndex) in tip.itemsList" :key="itemIndex")
            v-list-item-content
              v-list-item-title
                li.font-weight-black {{ item.titleList }}
              v-list-item-subtitle.text-body-2.black--text {{ item.contentList }}
      
        .text-body-1.mt-3(v-if="tip.textFinal") {{ tip.textFinal }}

        v-simple-table.my-4.workout-table(v-if="tip.table" dense)
          template(v-slot:default)
            thead(v-if="tip.table.headers")
              tr
                th.text-body-1.font-weight-bold(v-for="(header, i) in tip.table.headers" :key="i") {{ header }}
            tbody
              tr(v-for="(row, rowIndex) in tip.table.rows" :key="rowIndex")
                td.text-subtitle-1.font-weight-black {{ row[0] }}
                td.text-subtitle-1 {{ row[1] }}
                td.text-subtitle-1 {{ row[2] }}
                td.text-subtitle-1.example-column(v-html="row[3]")

      v-col(cols="12")(v-if="tip.importantTips")
        div.important-tips-section.pa-4.my-5.rounded
          .background-position.d-flex.align-center.mb-3.tips-header
            v-icon.mr-2(color="amber darken-2") mdi-lightbulb-on
            span.text-subtitle-1.font-weight-bold.amber--text.text--darken-2 Dicas Importantes

          div(v-for="(importantTip, tipIndex) in tip.importantTips.items" :key="tipIndex")
            .text-body-2.font-weight-bold.mb-1 {{ importantTip.title }}
            p.text-body-2.mb-3 {{ importantTip.content }}
  </template>

<script>
export default {
  name: 'WorkoutTipsList',
  props: {
    tips: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.tip-number {
  background-color: #810D0D;
  color: white;
  width: 40px;
  height: 40px;
  font-size: 22px;
  font-weight: bold;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

.important-tips-section {
  background-color: transparent;
  border: 4px solid #ffc107;
  margin-top: 10rem;
}

.border {
  box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.637);
}

.v-data-table {
  box-shadow: none;
}

.v-data-table thead tr {
  background-color: rgba(129, 13, 13, 0.05);
}

.v-data-table thead th {
  color: #810D0D !important;
  font-weight: bold;
}

.v-data-table thead th:first-child {
  color: #810D0D !important;
  font-weight: bold;
}

.v-data-table tbody tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.v-data-table tbody tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.03);
}

.v-data-table td {
  color: rgba(0, 0, 0, 0.8) !important;
}

.example-column {
  line-height: 1.5;
  white-space: pre-line;
  max-width: 300px;
}

.configSpan {
  padding-left: 1rem;
  display: flex;
  width: 30%;
  margin-top: -2rem;
  background-color: #ffffff;
  color: white;
}

.background-position {
  background-color: rgb(255, 255, 255);
  margin-top: -2rem;
  width: 22%;
  padding-left: 1rem;
}
</style>