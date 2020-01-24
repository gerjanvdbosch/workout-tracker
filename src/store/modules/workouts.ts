import Workout from '@/models/Workout/Workout';

export default {
  state: {
    items: Array<Workout>()
  },

  mutations: {
    initialize(state: any) {
      const items = localStorage.getItem('workouts');

      if (items) {
        // this.replaceState(Object.assign(state, JSON.parse(items)));
      }
    },
    saveWorkout: function (state: any, workout: Workout) {
      const index = state.items.findIndex((item: Workout) => item.id == workout.id);

      if (index !== -1) {
        state.items[index] = workout;
      } else {
        state.items.push(workout);
      }
    },
    removeWorkout: function (state: any, id: string) {
      const index = state.items.findIndex((item: Workout) => item.id == id);

      if (index !== -1) {
        state.items.splice(index, 1);
      }
    }
  },

  getters: {
    getWorkout: (state: any) => (id: string) => {
      return state.items.find((item: Workout) => item.id == id);
    }
  },
}
