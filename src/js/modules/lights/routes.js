import LightsIndex from './views/index.vue';
import LightsShow from './views/show.vue';

export default [
  {
    path: '/lights',
    component: LightsIndex,
  },
  {
    path: '/lights/:id/show',
    component: LightsShow,
  },
];
