import uuid from 'uuid';
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
      const workouts = localStorage.getItem('workouts');

      if (workouts) {
        Object.assign(state.workouts, JSON.parse(workouts))
      }
    },
    addWorkoutExercise: function (state: any, exercise: string) {
      state.activeWorkout.exercises.push(<Exercise>{
        name: exercise,
        sets: Array<Set>()
      });
    },
    finishWorkout: function (state: any) {
      state.workouts.push(<Workout>{
        id: uuid(),
        date: new Date(),
        exercises: state.activeWorkout.exercises
      });

      state.activeWorkout.exercises = [];
    },
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
    },
    getWorkouts: (state: any) => {
      return state.workouts.slice().reverse();
    }
    // getWorkout: (state: any) => (id: string) => {
    //   return state.workouts.find((item: Workout) => item.id == id);
    // }
  }
}
