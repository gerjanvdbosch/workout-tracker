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
      const activeWorkout = localStorage.getItem('activeWorkout');
      const workouts = localStorage.getItem('workouts');

      if (activeWorkout) {
        Object.assign(state.activeWorkout, JSON.parse(activeWorkout));
      }

      if (workouts) {
        Object.assign(state.workouts, JSON.parse(workouts));
      }
    },
    setActiveWorkout: function (state: any, workout: Workout) {
      workout.exercises = workout.exercises.map((exercise: Exercise) => {
        return <Exercise>{
          name: exercise.name,
          sets: exercise.sets
        }
      });

      state.activeWorkout = workout;
    },
    finishActiveWorkout: function (state: any) {
      state.workouts.unshift(<Workout>{
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
    getActiveWorkout: (state: any, getters: any) => {
      return getters.fillWorkout(state.activeWorkout);
    },
    getWorkouts: (state: any, getters: any) => {
      return state.workouts.slice(0, 100).map((workout: Workout) => {
        workout = getters.fillWorkout(workout);

        const groups = getters.getGroups(workout, 2);

        workout.name = groups.map((e: any) => e.name).join(' and ');
        workout.code = groups[0].code;
        workout.color = groups[0].color;

        return workout;
      });
    },
    getGroups: () => (workout: Workout, items: number) => {
      const counts = workout.exercises.reduce((result: any, exercise: Exercise) => {
        if (!result[exercise.group]) {
          result[exercise.group] = {
            exercises: 0,
            sets: 0,
            name: exercise.group,
            code: exercise.code,
            color: exercise.color,
          };
        }

        result[exercise.group].exercises++;
        result[exercise.group].sets += exercise.sets.length;

        return result;
      }, {});

      return _.orderBy(counts, ['exercises', 'sets'], ['desc', 'desc']).slice(0, items);
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
