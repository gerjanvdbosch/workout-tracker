import Body from '@/models/Body';
import uuid from 'uuid';

export default {
  state: {
    body: Array<Body>()
  },
  mutations: {
    initialize(state: any) {
      const body = localStorage.getItem('body');

      if (body) {
        Object.assign(state.body, JSON.parse(body));
      }
    },
    saveBody(state: any, body: Body) {
      body.id = uuid();
      body.date = new Date();

      state.body.unshift(body);
    },
    removeBody: function (state: any, id: string) {
      const index = state.body.findIndex((item: Body) => item.id === id);

      if (index !== -1) {
        state.body.splice(index, 1);
      }
    }
  },
  getters: {
    getBody(state: any) {
      return state.body;
    }
  }
}
