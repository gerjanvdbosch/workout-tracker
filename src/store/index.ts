import Vue from 'vue'
import Vuex from 'vuex'
import Workout from '@/models/Workout';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    workouts: Array<Workout>()
  },
  mutations: {
    initialize(state) {
      const workouts = localStorage.getItem('workouts');

      if (workouts) {
        this.replaceState(Object.assign(state, JSON.parse(workouts)));
      }
    },
    save: function (state, workout: Workout) {
      const found = state.workouts.find(s => s.id == workout.id);

      if (found) {
        const index = state.workouts.indexOf(found);
        state.workouts[index] = workout;
      } else {
        state.workouts.push(workout);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
