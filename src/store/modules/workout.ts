import Workout from '@/models/Workout/Workout';
import Exercise from '@/models/Workout/Exercise';
import Set from '@/models/Workout/Set';

export default {
  state: {
    activeWorkout: {
      exercises: Array<Exercise>()
    },
    workouts: Array<Workout>()
  },

  mutations: {
    initialize(state: any) {
      // const workouts = localStorage.getItem('workouts');
      //
      // if (workouts) {
      //   // this.replaceState(Object.assign(state, JSON.parse(workouts)));
      // }
    },
    addWorkoutExercise: function (state: any, exercise: string) {
      state.activeWorkout.exercises.push(<Exercise>{
        name: exercise,
        sets: Array<Set>()
      });
    }
    // startWorkout: function (state: any, workout: Workout) {
    //   state.activeWorkout = workout;
    // },
    // saveWorkout: function (state: any, workout: Workout) {
    //   const index = state.workouts.findIndex((item: Workout) => item.id == workout.id);
    //
    //   if (index !== -1) {
    //     state.workouts[index] = workout;
    //   } else {
    //     state.workouts.push(workout);
    //   }
    // },
    // removeWorkout: function (state: any, id: string) {
    //   const index = state.workouts.findIndex((item: Workout) => item.id == id);
    //
    //   if (index !== -1) {
    //     state.workouts.splice(index, 1);
    //   }
    // }
  },

  getters: {
    getWorkoutExercises: (state: any) => {
      return state.activeWorkout.exercises;
    }
    // getWorkout: (state: any) => (id: string) => {
    //   return state.workouts.find((item: Workout) => item.id == id);
    // }
  },
}
