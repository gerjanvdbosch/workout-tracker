import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);
Vue.use(require('vue-moment'));

export default new Vuetify({
  icons: {
    iconfont: 'md',
  },
});
