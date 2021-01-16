import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import animations from './modules/animations.js';
import lights from './modules/lights.js';
import frames from './modules/frames.js';
import geometries from './modules/geometries.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    animations,
    lights,
    frames,
    geometries,
  }
});
