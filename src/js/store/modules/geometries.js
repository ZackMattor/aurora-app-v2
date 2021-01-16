export default {
  namespaced: true,

  state: () => ({
    all: [{
      key: 'icosahedron',
      name: 'Icosahedron',
      icon: 'fas fa-dice-d20',
    }, {
      key: 'bookcase_5_20',
      name: 'Bookcase 5x20',
      icon: 'fas fa-bars',
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
