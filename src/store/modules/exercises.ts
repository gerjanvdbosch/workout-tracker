import json from '@/store/api/exercises.json'
import Exercise from '@/models/Exercise';

export default {
  state: {
    items: Array<Exercise>()
  },

  mutations: {
    initialize(state: any) {
      json.forEach((exercise) => {
        const group = exercise.group;

        exercise.items.forEach((item) => {
          state.items.push({
            name: item.name,
            code: group.code,
            group: group.name,
            color: group.color,
          })
        })
      })
    }
  },

  getters: {
    filteredExercises: (state: any) => (text: string) => {
      return !text ? state.items : state.items.filter((exercise: Exercise) => {
        return exercise.name.toLowerCase().match(text.toLowerCase());
      })
    }
  }
}
