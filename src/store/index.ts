import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import exercises from '@/store/modules/exercises';
import workouts from '@/store/modules/workouts';

export default new Vuex.Store({
  strict: true,
  modules: {
    exercises,
    workouts
  }
});
