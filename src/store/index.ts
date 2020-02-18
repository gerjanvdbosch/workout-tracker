import _ from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';
import json from '@/store/api/exercises.json';
import Exercise from '@/models/Exercise';
import Workout from '@/models/Workout';
import uuid from 'uuid';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    exercises: Array<Exercise>(),
    workouts: Array<Workout>(),
    activeWorkout: {
      exercises: Array<Exercise>()
    }
  },
  mutations: {
    initialize(state: any) {
      const workouts = localStorage.getItem('workouts');

      if (workouts) {
        Object.assign(state.workouts, JSON.parse(workouts))
      }

      json.forEach((exercise) => {
        const group = exercise.group;

        exercise.exercises.forEach((item) => {
          state.exercises.push({
            name: item.name,
            type: item.type,
            code: group.code,
            group: group.name,
            color: group.color,
          });
        })
      });

      state.exercises = _.orderBy(state.exercises, 'name');
    },
    setActiveWorkout: function (state: any, workout: Workout) {
      state.activeWorkout = workout;
    },
    finishActiveWorkout: function (state: any) {
      state.workouts.push(<Workout>{
        id: uuid(),
        date: new Date(),
        exercises: state.activeWorkout.exercises
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
    searchExercises: (state: any) => (text: string) => {
      return !text ? state.exercises : state.exercises.filter((exercise: Exercise) => {
        return exercise.name.toLowerCase().match(text.toLowerCase());
      });
    },
    getExercise: (state: any) => (name: string) => {
      return state.exercises.find((item: Exercise) => item.name === name);
    },
    getActiveWorkout: (state: any) => {
      return fillExercises(_.cloneDeep(state.activeWorkout), state.exercises);
    },
    getWorkouts: (state: any) => {
      return state.workouts.slice().reverse();
    },
    getWorkout: (state: any) => (id: string) => {
      return fillExercises(state.workouts.find((item: Workout) => item.id === id), state.exercises);
    }
  }
});

function fillExercises(workout: Workout, exercises: Array<Exercise>) {
  for (let i = 0; i < workout.exercises.length; i++) {
    const exercise = exercises.find((item: Exercise) => item.name === workout.exercises[i].name);

    if (exercise) {
      Object.assign(workout.exercises[i], exercise);
    }
  }

  return workout;
}
