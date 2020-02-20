import _ from 'lodash';
import uuid from 'uuid';
import Workout from '@/models/Workout';
import Exercise from '@/models/Exercise';

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
    setActiveWorkout: function (state: any, workout: Workout) {
      state.activeWorkout = workout;
    },
    finishActiveWorkout: function (state: any) {
      state.workouts.unshift(<Workout>{
        id: uuid(),
        date: new Date(),
        exercises: state.activeWorkout.exercises.map((exercise: Exercise) => {
          return <Exercise>{
            name: exercise.name,
            sets: exercise.sets
          }
        })
      });

      state.activeWorkout.exercises = [];
    },
    cancelActiveWorkout: function (state: any) {
      state.activeWorkout.exercises = [];
    },
    removeWorkout: function (state: any, id: string) {
      const index = state.workouts.findIndex((item: Workout) => item.id === id);

      if (index !== -1) {
        state.workouts.splice(index, 1);
      }
    }
  },
  getters: {
    getActiveWorkout: (state: any) => {
      return _.cloneDeep(state.activeWorkout);
    },
    getWorkouts: (state: any, getters: any) => {
      return state.workouts.map((workout: Workout) => {
        workout = getters.fillWorkout(workout);
        workout.name = getters.getGroups(workout);

        return workout;
      });
    },
    getGroups: () => (workout: Workout) => {
      const groups = _.countBy(workout.exercises, 'group');
      let counts = Object.keys(groups).map(name => {
        return { name, count: groups[name]};
      });

      return _.orderBy(counts, 'count', 'desc').slice(0, 2).map(e => e.name).join(' and ');
    },
    getWorkout: (state: any, getters: any) => (id: string) => {
      const workout = state.workouts.find((item: Workout) => item.id === id);

      if (workout) {
        return getters.fillWorkout(workout);
      }
    },
    fillWorkout: (state: any, getters: any) => (workout: Workout) => {
      workout = _.cloneDeep(workout);

      for (let i = 0; i < workout.exercises.length; i++) {
        const exercise = getters.getExercise(workout.exercises[i].name);

        if (exercise) {
          Object.assign(workout.exercises[i], exercise);
        }
      }

      return workout;
    },
    getLogCount: (state: any) => {
      return state.workouts.length;
    }
  }
}
