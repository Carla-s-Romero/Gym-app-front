<template lang="pug">
.academy-map
  .map-container
    iframe.map-iframe(
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31589.085557042585!2d-35.749554233502614!3d-8.239338748168633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sacademias!5e0!3m2!1spt-BR!2sbr!4v1753658619439!5m2!1spt-BR!2sbr" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
    )
  .text-container(style="background-color:#121212")
    .text-content
      .text-h4.font-weight-black.white--text Academias em Bezerros
      .white--text.mt-4
        | Bezerros oferece ótimas academias para quem busca saúde, bem-estar e performance.
        | Encontre a ideal para o seu estilo de treino!
</template>

<script>
export default {
  name: 'AcademyMap',
}
</script>

<style scoped>
.academy-map {
  position: relative;
}

.map-container {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
  margin-bottom: -300px;
}

.map-iframe {
  width: 90%;
  max-width: 900px;
  height: 550px;
  border-radius: 10px;
  border: 6px solid rgba(216, 54, 54, 0.5);
}

.text-container {
  position: relative;
  z-index: 1;
  height: 550px;
  padding-top: 120px;
  padding-bottom: 30px;
  box-shadow: 0 1rem 1rem rgba(58, 56, 56, 0.295);
  border-radius: 4px;
}

.text-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16rem 8rem;
}

@media (max-width: 600px) {
  .map-iframe {
    width: 95%;
    height: 300px;
  }
  
  .map-container {
    margin-bottom: -60px;
  }
  
  .text-container {
    padding-top: 80px;
  }
}
</style>
