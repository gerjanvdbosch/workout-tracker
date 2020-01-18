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
    saveWorkout: function (state, workout: Workout) {
      const index = state.workouts.findIndex(s => s.id == workout.id);

      if (index !== -1) {
        state.workouts[index] = workout;
      } else {
        state.workouts.push(workout);
      }
    },
    removeWorkout: function (state, id: string) {
      const index = state.workouts.findIndex(s => s.id == id);

      if (index !== -1) {
        state.workouts.splice(index, 1);
      }
    }
  },
  getters: {
    getWorkout: (state) => (id: string) => {
      return state.workouts.find(s => s.id == id)
    }
  },
  actions: {
  },
  modules: {
  }
})
