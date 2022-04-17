import axios from 'axios';

export default {
  namespaced: true,

  state: () => ({
    all: []
  }),

  getters: {
    all(state) {
      return state.all;
    },

    find: (state) => (id) => {
      return state.all.find((l) => ( l.id === id ));
    },
  },

  actions: {
    async fetch({ commit }) {
      let lights = (await axios.get('http://10.0.0.20:8080/api/v1/lights')).data;

      commit('setLights', lights);
    }
  },

  mutations: {
    setLights(state, lights) {
      state.all = lights;
    }
  }
};
