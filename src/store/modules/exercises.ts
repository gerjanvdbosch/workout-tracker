import _ from 'lodash';
import json from '@/store/api/exercises.json'
import Exercise from '@/models/Exercise';

export default {
  state: {
    exercises: Array<Exercise>()
  },

  mutations: {
    initialize(state: any) {
      json.forEach((exercise) => {
        const group = exercise.group;

        exercise.exercises.forEach((item) => {
          state.exercises.push({
            name: item.name,
            code: group.code,
            group: group.name,
            color: group.color,
          });
        })
      });

      state.exercises = _.orderBy(state.exercises, 'name');
    }
  },

  getters: {
    searchExercises: (state: any) => (text: string) => {
      return !text ? state.exercises : state.exercises.filter((exercise: Exercise) => {
        return exercise.name.toLowerCase().match(text.toLowerCase());
      });
    }
  }
}
