<template>
  <div class="page-icosahedron">
    <router-link to="/">Back...</router-link>
    <h1 class="text-center text-3xl">{{animation.name}} Animation</h1>

    <component ref="renderer" :pixel-state='pixel_state' :selected-pixels='selected_pixels' :is="currentRenderer" />

    <animator-widget :timeline="animation.timeline" />
    <div class="text-center">
      <p>there are {{frameCount}} frames...</p>
      <p>We are on frame {{currentFrame}}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import IcosahedronRenderer from '../components/renderers/icosahedron.vue';
import AnimatorWidget from '../components/animator_widget.vue';

export default {
  mounted() {
    this.animationInterval = setInterval(this.renderLoop.bind(this), 1000/100);

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
      currentRenderer: 'icosahedron-renderer',
      lastFrameAt: null,
    };
  },

  methods: {
    // TODO - figure out how to do easing functions between frames
    //        cutover, linear, etc
    renderLoop() {
      if(this.animation) {
        // Initialize the timestamp of the last rendered frame
        if(!this.lastFrameAt) { this.lastFrameAt = (+ new Date()); }

        // Calculate the time since the last frame to now
        let dt = (+ new Date()) - this.lastFrameAt;

        let timelineSegment = this.animation.timeline[this.currentFrame];
        let frameId = timelineSegment.frameId;
        let frame = this.frameById(frameId);

        // Set the current pixel state to that of the desired frame
        for(let i=0; i<this.numPixels; i++) {
          let pixel = frame.data[i];

          this.pixel_state[i].r = pixel.r;
          this.pixel_state[i].g = pixel.g;
          this.pixel_state[i].b = pixel.b;
        }

        // Detect if it's time to move on to the next frame
        if(dt > timelineSegment.duration) {
          this.currentFrame++;
          this.lastFrameAt = (+ new Date());

          // If we've run out of frames move to the next one
          if(this.currentFrame === this.frameCount) {
            this.currentFrame = 0;
          }
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
    },
  },

  components: {
    'icosahedron-renderer': IcosahedronRenderer,
    'animator-widget': AnimatorWidget
  }
}
</script>
