import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import keyframeAnimations from './modules/keyframe_animations.js';
import lights from './modules/lights.js';
import frames from './modules/frames.js';
import geometries from './modules/geometries.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    keyframeAnimations,
    lights,
    frames,
    geometries,
  }
});
