import Vue from 'vue';
import VueRouter from 'vue-router';

// Modules
import KeyframeAnimationRoutes from './modules/keyframe_animations/routes.js';
import LightsRoutes from './modules/lights/routes.js';
import SettingsRoutes from './modules/settings/routes.js';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/keyframe_animations' },

    ...KeyframeAnimationRoutes,
    ...LightsRoutes,
    ...SettingsRoutes,
  ]
});
