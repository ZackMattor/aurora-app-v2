import AnimationsIndex from './views/index.vue';
import AnimationEdit from './views/edit.vue';

export default [
  {
    path: '/keyframe_animations',
    component: AnimationsIndex,
  },
  {
    path: '/keyframe_animations/:id/edit',
    component: AnimationEdit,
    name: 'keyframe_animation_edit_path'
  },
];
