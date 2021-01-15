import AnimationBuilder from './pages/animation_builder.vue';
import Animations from './pages/animations.vue';
import Lights from './pages/lights.vue';
import Settings from './pages/settings.vue';

export const routes = [
  { path: '/', component: Animations },
  { path: '/lights', component: Lights },
  { path: '/settings', component: Settings },
  { path: '/animation_builder', component: AnimationBuilder },
];
