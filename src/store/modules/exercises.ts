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
  }
}
