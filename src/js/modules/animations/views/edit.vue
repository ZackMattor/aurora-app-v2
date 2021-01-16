<template>
  <div class="page-icosahedron">
    <router-link to="/">Back...</router-link>
    <h1 class="text-center text-3xl">{{animation.name}} Animation</h1>

    <component ref="renderer" :pixel-state='pixel_state' :selected-pixels='selected_pixels' :is="currentRenderer" />

    <div class="text-center">
      <p>there are {{frameCount}} frames...</p>
      <p>We are on frame {{currentFrame}}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import IcosahedronRenderer from '../components/renderers/icosahedron.vue';

export default {
  mounted() {
    this.animationInterval = setInterval(this.renderLoop.bind(this), 1000);

    // Initialize the pixel state
    for(let i=0; i<this.numPixels; i++) {
      this.pixel_state.push({r:Math.random(),g:Math.random(),b:Math.random()});
    }
  },

  beforeDestroy() {
    clearInterval(this.animationInterval);
  },

  data() {
    return {
      pixel_state: [],
      selected_pixels: [],
      currentFrame: 0,
      currentRenderer: 'icosahedron-renderer'
    };
  },

  methods: {
    renderLoop() {
      if(this.animation) {
        let frameId = this.animation.timeline[this.currentFrame].frameId;
        let frameData = this.frameById(frameId).data;
        console.log(frameData[0]);

        for(let i=0; i<this.numPixels; i++) {
          let pixel = frameData[i];

          this.pixel_state[i].r = pixel.r;
          this.pixel_state[i].g = pixel.g;
          this.pixel_state[i].b = pixel.b;
        }

        this.currentFrame++;

        if(this.currentFrame === this.frameCount) {
          this.currentFrame = 0;
        }
      }
    }
  },

  computed: {
    ...mapGetters('animations', {
      animationById: 'getById'
    }),

    ...mapGetters('frames', {
      frameById: 'getById'
    }),

    animation() {
      return this.animationById(this.$route.params.id);
    },

    frameCount() {
      return this.animation.timeline.length;
    },

    numPixels() {
      return this.$refs.renderer.num_pixels;
    }
  },

  components: {
    'icosahedron-renderer': IcosahedronRenderer
  }
}
</script>
