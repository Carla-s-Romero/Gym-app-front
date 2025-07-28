<template lang="pug">
footer.footer-container
  .scroll-to-top(@click="scrollToTop")
    v-icon(color="white") mdi-chevron-up
  
  v-container.py-8
    v-row
      v-col(cols="12" sm="4")
        .text-h6.font-weight-bold.white--text EMPRESA
        v-list.footer-list.pa-0(flat dark)
          v-list-item(link @click="handleLinkClick('Sobre nós')")
            v-list-item-content
              v-list-item-title.white--text(:class="{ 'red--text': isVisited('Sobre nós') }") Sobre nós
          v-list-item(link @click="handleLinkClick('Cookies Policy')")
            v-list-item-content
              v-list-item-title.white--text(:class="{ 'red--text': isVisited('Cookies Policy') }") Cookies Policy
          v-list-item(link @click="handleLinkClick('Termos e Privacidade')")
            v-list-item-content
              v-list-item-title.white--text(:class="{ 'red--text': isVisited('Termos e Privacidade') }") Termos e Privacidade
      
      v-col(cols="12" sm="4")
        .text-h6.font-weight-bold.white--text Suporte
        v-list.footer-list.pa-0(flat dark)
          v-list-item(link @click="handleLinkClick('FAQ')")
            v-list-item-content
              v-list-item-title.white--text(:class="{ 'red--text': isVisited('FAQ') }") FAQ
          v-list-item(link @click="handleLinkClick('Relatar Problemas')")
            v-list-item-content
              v-list-item-title.white--text(:class="{ 'red--text': isVisited('Relatar Problemas') }") Relatar Problemas
      
      v-col(cols="12" sm="4")
        .text-h6.font-weight-bold.white--text.mb-2 Quer receber mais dicas de treino e bem-estar?
        form.newsletter-form(@submit.prevent="submitEmail")
          .d-flex.align-center
            v-text-field(
              v-model="email"
              placeholder="Digite seu e-mail"
              outlined
              dense
              dark
              background-color="rgba(255,255,255,0.1)"
              hide-details="auto"
              :rules="emailRules"
              ref="emailField"
            )
            v-btn(color="error" small class="ml-2" height="40" type="submit" :loading="loading")
              v-icon mdi-chevron-right
          .mt-2.success--text.text-caption(v-if="submitSuccess") Email cadastrado com sucesso!
    
    v-divider.my-6.white--text
    
    .text-center.white--text.body-2 Site desenvolvido por Glauco 2025
</template>

<script>
export default {
  name: 'FooterApp',
  data: () => ({
    visitedLinks: {},
    email: '',
    loading: false,
    submitSuccess: false,
    emailRules: [
      v => !!v || 'Email é obrigatório',
      v => /.+@.+\..+/.test(v) || 'Email precisa ser válido'
    ]
  }),
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    handleLinkClick(linkText) {
      // Marca o link como visitado
      this.$set(this.visitedLinks, linkText, true);
    },
    isVisited(linkText) {
      return this.visitedLinks[linkText] || false;
    },
    submitEmail() {
      if (this.$refs.emailField.validate()) {
        this.loading = true
        
        // Em um ambiente real, você faria uma chamada API para um backend
        // Exemplo com axios:
        // axios.post('/api/subscribe', { email: this.email })
        //   .then(() => {
        //     this.loading = false
        //     this.submitSuccess = true
        //     this.email = ''
        //     this.$refs.emailField.resetValidation()
        //   })
        //   .catch(error => {
        //     console.error('Erro ao cadastrar email:', error)
        //     this.loading = false
        //     // Tratar erro aqui
        //   })

        // Simulação para demonstração
        setTimeout(() => {
          console.log('Email cadastrado:', this.email)
          this.loading = false
          this.submitSuccess = true
          
          // Reset do campo e da validação
          this.email = ''
          this.$refs.emailField.resetValidation()
          
          // Reset da mensagem de sucesso após alguns segundos
          setTimeout(() => {
            this.submitSuccess = false
          }, 3000)
        }, 1500)
      }
    }
  }
}
</script>

<style scoped>
.footer-container {
  background-color: #121212;
  position: relative;
  padding-top: 2rem;
  padding-bottom: 1rem;
  width: 100%;
  margin-top: 10rem;
}

.scroll-to-top {
  position: absolute;
  top: -25px;
  right: 6%;
  background-color: #121212;
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  border: 10px solid #ffffff;
}

.scroll-to-top:hover {
  transform: translateY(-5px);
}

.footer-list {
  background-color: transparent !important;
}

.footer-list >>> .v-list-item {
  min-height: 35px !important;
  padding: 0 !important;
}

.footer-list >>> .v-list-item:hover .v-list-item__title {
  color: #810D0D !important;
  transition: color 0.2s ease;
}

.footer-list >>> .v-list-item--active .v-list-item__title {
  color: #810D0D !important;
}
</style>