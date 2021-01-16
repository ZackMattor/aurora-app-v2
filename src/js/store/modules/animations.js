export default {
  namespaced: true,

  state: () => ({
    all: [{
      id: 0,
      name: 'Snowfall',
      geometry: 'icosahedron',
      timeline: [
        {
          frameId: 0,
          duration: 500,
          easing: 'cutover'
        },
        {
          frameId: 1,
          duration: 500,
          easing: 'cutover'
        }
      ]
    }]
  }),

  getters: {
    getByGeometry: (state) => (geometry) => {
      return state.all.filter(item => item.geometry === geometry);
    }
  },

  actions: {

  },

  mutations: {

  }
};
