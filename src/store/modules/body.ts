import Body from '@/models/Body';

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
      body.date = new Date();

      state.body.unshift(body);
    },
    removeBody: function (state: any, index: number) {
      state.body.splice(index, 1);
    }
  },
  getters: {
    getBody(state: any) {
      return state.body;
    }
  }
}
