import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

store.subscribe((mutation, state) => {
  localStorage.setItem('workouts', JSON.stringify(state));
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  beforeCreate() {
    this.$store.commit('initialize');
  }
}).$mount('#app')

