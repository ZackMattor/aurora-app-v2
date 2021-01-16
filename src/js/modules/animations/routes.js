import AnimationsIndex from './views/index.vue';
import AnimationEdit from './views/edit.vue';

export default [
  {
    path: '/animations',
    component: AnimationsIndex,
  },
  {
    path: '/animations/:id/edit',
    component: AnimationEdit,
    name: 'animation_edit_path'
  },
];
