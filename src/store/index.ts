import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import exercises from '@/store/modules/exercises';

export default new Vuex.Store({
  modules: {
    exercises
  }
})
