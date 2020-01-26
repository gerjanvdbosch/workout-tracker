import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import exercise from '@/store/modules/exercise';
import workout from '@/store/modules/workout';

export default new Vuex.Store({
  modules: {
    exercise,
    workout
  }
})
