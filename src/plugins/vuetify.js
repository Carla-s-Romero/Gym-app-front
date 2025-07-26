import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#4CAF50',
        secondary: '#8BC34A',
        accent: '#CDDC39',
      },
    },
  },
});
