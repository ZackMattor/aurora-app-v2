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
          duration: 1000,
          easing: 'cutover'
        }
      ]
    }, {
      id: 1,
      name: 'Random',
      geometry: 'icosahedron',
      timeline: [
        {
          frameId: 3,
          duration: 1000,
          easing: 'cutover'
        }, {
          frameId: 4,
          duration: 1000,
          easing: 'cutover'
        }, {
          frameId: 5,
          duration: 1000,
          easing: 'cutover'
        }, {
          frameId: 6,
          duration: 1000,
          easing: 'cutover'
        }, {
          frameId: 3,
          duration: 1000,
          easing: 'cutover'
        }, {
          frameId: 4,
          duration: 1000,
          easing: 'cutover'
        }, {
          frameId: 5,
          duration: 750,
          easing: 'cutover'
        }, {
          frameId: 6,
          duration: 500,
          easing: 'cutover'
        },
      ]
    }]
  }),

  getters: {
    getByGeometry: (state) => (geometry) => {
      return state.all.filter(item => item.geometry === geometry);
    },

    getById: (state) => (id) => {
      return state.all.find(item => item.id == id);
    }
  },

  actions: {

  },

  mutations: {

  }
};
