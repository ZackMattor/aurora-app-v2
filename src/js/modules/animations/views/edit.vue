<template>
  <div class="page-icosahedron">
    <h1 class="text-center text-3xl">{{animation.name}} Animation</h1>

    <component ref="renderer" :pixel-state='pixelState' :selected-pixels='selected_pixels' :is="currentRenderer" />

    <animator-widget @frameData="pixelState = $event" :timeline="animation.timeline" class="fixed w-full bottom-12" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import IcosahedronRenderer from '../components/renderers/icosahedron.vue';
import AnimatorWidget from '../components/animator_widget.vue';

export default {
  mounted() {
    //this.animationInterval = setInterval(this.renderLoop.bind(this), 1000/100);

    // Initialize the pixel state
    //for(let i=0; i<this.numPixels; i++) {
    //  this.pixelState.push({ r: 0, g: 0, b: 0 });
    //}
  },

  beforeDestroy() {
    clearInterval(this.animationInterval);
  },

  data() {
    return {
      pixelState: [],
      selected_pixels: [],
      currentFrame: 0,
      currentRenderer: 'icosahedron-renderer',
    };
  },

  methods: {
    // TODO - figure out how to do easing functions between frames
    //        cutover, linear, etc
    //renderLoop() {
    //  if(this.animation) {
    //    // Initialize the timestamp of the last rendered frame
    //    if(!this.lastFrameAt) { this.lastFrameAt = (+ new Date()); }

    //    // Calculate the time since the last frame to now
    //    let dt = (+ new Date()) - this.lastFrameAt;

    //    let timelineSegment = this.animation.timeline[this.currentFrame];
    //    let frameId = timelineSegment.frameId;
    //    let frame = this.frameById(frameId);

    //    // Set the current pixel state to that of the desired frame
    //    for(let i=0; i<this.numPixels; i++) {
    //      let pixel = frame.data[i];

    //      this.pixelState[i].r = pixel.r;
    //      this.pixelState[i].g = pixel.g;
    //      this.pixelState[i].b = pixel.b;
    //    }

    //    // Detect if it's time to move on to the next frame
    //    if(dt > timelineSegment.duration) {
    //      this.currentFrame++;
    //      this.lastFrameAt = (+ new Date());

    //      // If we've run out of frames move to the next one
    //      if(this.currentFrame === this.frameCount) {
    //        this.currentFrame = 0;
    //      }
    //    }
    //  }
    //}
  },

  computed: {
    ...mapGetters('animations', {
      animationById: 'getById'
    }),

    //...mapGetters('frames', {
    //  frameById: 'getById'
    //}),

    animation() {
      return this.animationById(this.$route.params.id);
    },

    //frameCount() {
    //  return this.animation.timeline.length;
    //},

    //numPixels() {
    //  return this.$refs.renderer.num_pixels;
    //},
  },

  components: {
    'icosahedron-renderer': IcosahedronRenderer,
    'animator-widget': AnimatorWidget
  }
}
</script>
