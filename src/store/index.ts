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
    searchExercises: (state: any) => (text: string) => {
      return !text ? state.exercises : state.exercises.filter((exercise: Exercise) => {
        return exercise.name.toLowerCase().match(text.toLowerCase());
      });
    },
    getActiveWorkout: (state: any) => {
      return _.cloneDeep(state.activeWorkout);
    },
    getWorkouts: (state: any) => {
      return _.cloneDeep(state.workouts).reverse().map((item: Workout) => {
        const workout = fillExercises(item, state.exercises);
        const groups = _.countBy(workout.exercises, 'group');

        let counts = Object.keys(groups).map(name => {
          return { name, count: groups[name]};
        });

        counts = _.orderBy(counts, 'count', 'desc').slice(0, 2);

        workout.name = counts.map(e => e.name).join(' and ');

        return workout;
      });
    },
    getWorkout: (state: any) => (id: string) => {
      const workout = state.workouts.find((item: Workout) => item.id === id);

      if (workout) {
        return fillExercises(_.cloneDeep(workout), state.exercises);
      }
    },
    getLogCount: (state: any) => {
      return state.workouts.length;
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
