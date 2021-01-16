export default {
  namespaced: true,

  state: () => ({
    all: [{
      key: 'icosahedron',
      name: 'Icosahedron',
    }, {
      key: 'bookcase_5_20',
      name: 'Bookcase 5x20',
    }]
  }),

  getters: {
    getByKey: (state) => (key) => {
      return state.all.find(geometry => geometry.key === key);
    }
  },

  actions: {

  },

  mutations: {

  }
};
