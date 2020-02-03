import Vue from 'vue';
import Vuetify from 'vuetify';
import VueMoment from 'vue-moment';

import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import '@/plugins/vuetify.css';

Vue.use(Vuetify);
Vue.use(VueMoment);

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  }
});
