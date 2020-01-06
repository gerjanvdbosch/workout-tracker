import Vue from 'vue';
import Vuetify from 'vuetify';
import VueMoment from 'vue-moment';

import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);
Vue.use(VueMoment);

export default new Vuetify({
  icons: {
    iconfont: 'md',
  },
});
