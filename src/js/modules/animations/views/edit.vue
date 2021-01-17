<template>
  <div class="page-icosahedron">
    <h1 class="text-center text-3xl">{{animation.name}}</h1>

    <component ref="renderer" :pixel-state='pixelState' :selected-pixels='selectedPixels' :is="currentRenderer" />

    <animator-widget @frameData="pixelState = $event" :timeline="animation.timeline" class="fixed w-full bottom-12" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import IcosahedronRenderer from '../components/renderers/icosahedron.vue';
import AnimatorWidget from '../components/animator_widget.vue';

export default {
  data() {
    return {
      pixelState: [],
      selectedPixels: [],
      currentRenderer: 'icosahedron-renderer',
    };
  },

  computed: {
    ...mapGetters('animations', {
      animationById: 'getById'
    }),

    animation() {
      return this.animationById(this.$route.params.id);
    },
  },

  components: {
    'icosahedron-renderer': IcosahedronRenderer,
    'animator-widget': AnimatorWidget
  }
}
</script>
