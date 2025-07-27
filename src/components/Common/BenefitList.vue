<template lang="pug">
  v-container.pa-0
    v-row
      v-col(cols="12" v-for="benefit in benefits" :key="benefit.title")
        .text-body-1.mt-2
          span.red-dot
          strong {{ benefit.title }}
          | {{ benefit.description }}
</template>


<script>
export default {
    name: 'BenefitList',
  
    components: {
    },
    
    props: {
      benefits: {
        type: Array,
        required: true
      }
    },
  
    data: () => ({
    }),
};
</script>