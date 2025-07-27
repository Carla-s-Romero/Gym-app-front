<template lang="pug">
  v-container
    v-row.pa-12(ref="cardContainer")
      v-col(cols="12" sm="6" v-for="(mistake, index) in mistakes" :key="mistake.title" :class="{visible: isVisible}" :style="{ transitionDelay: index * 0.2 + 's' }" class="animate-card")
        v-card.mt-2.rounded-lg.position-relative.w-90(outline
          style="border: 2px solid rgba(255, 0, 0, 0.10);" height="90%"
        )
            v-row.no-gutters
              v-col(cols="2" sm="1" align-self="center")
                .number-circle.pa-0.d-flex.justify-center.align-center.position-absolute.rounded-lg
                  span.white--text.font-weight-bold {{ index + 1 }}

              v-col(cols="10" sm="10")
                v-row
                  v-col.pt-6(cols="12")
                    v-card-title.d-flex.align-center.pa-0.pl-6.pt-2
                      v-img.mr-2(:src="mistake.image" max-height="70" max-width="70" contain)
                      div.title-container.pl-2
                        .normal-text.font-weight-black.text-h6 {{ mistake.title.normal }}
                        .highlight-text.red--text.text--darken-5.font-weight-black {{ mistake.title.highlight }}

                v-col(cols="12")
                  v-card-text
                    | {{ mistake.description }}
</template>

<script>
export default {
  name: 'AvoidMistakes',
  
  props: {
      mistakes: {
        type: Array,
        required: true
      }
    },
    
  data: () => ({
    isVisible: false
  }),

  mounted() {
    this.setupIntersectionObserver();
  },

  methods: {
    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            observer.unobserve(entry.target);
          }
        });
      }, options);

      this.$nextTick(() => {
        if (this.$refs.cardContainer) {
          observer.observe(this.$refs.cardContainer);
        }
      });
    }
  }
};
</script>

<style scoped>

.number-circle {
  background-color: #810D0D;
  color: white;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  font-size: 1.5rem;
  transform: translateX(-50%);
  border: 2px solid rgba(255, 0, 0, 0.10);
}

.number-position {
  margin-top: -20px;
}

.v-card-border {
  border: 2px solid #810D0D;
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-card {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-card.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>