export default {
  namespaced: true,

  state: () => ({
    all: [{
      id: 0,
      geometry: 'icosahedron',
      data: [{ r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }],
    }, {
      id: 1,
      geometry: 'icosahedron',
      data: [{ r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }],
    }]
  }),

  getters: {
    getById: (state) => (id) => {
      return state.all.find(item => item.id == id);
    }
  },

  actions: {

  },

  mutations: {

  }
};
