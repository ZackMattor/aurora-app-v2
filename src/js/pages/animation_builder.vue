<template>
  <div class="page-icosahedron">
    <router-link to="/">Back...</router-link>

    <component ref="renderer" :pixel-state='pixel_state' :selected-pixels='selected_pixels' :is="currentRenderer" />
  </div>
</template>

<script>
import IcosahedronRenderer from '../components/renderers/icosahedron.vue';

export default {
  mounted() {
    const num_pixels = this.$refs.renderer.num_pixels;

    for(let i=0; i<num_pixels; i++) {
      this.pixel_state.push({r:Math.random(),g:Math.random(),b:Math.random()});
    }

    setInterval(() => {
      for(let i=0; i<num_pixels; i++) {
        this.pixel_state[i].r = Math.random();
        this.pixel_state[i].g = Math.random();
        this.pixel_state[i].b = Math.random();
      }
    }, 1000);
  },

  data() {
    return {
      pixel_state: [],
      selected_pixels: [],
      currentRenderer: 'icosahedron-renderer'
    };
  },

  components: {
    'icosahedron-renderer': IcosahedronRenderer
  }
}
</script>
