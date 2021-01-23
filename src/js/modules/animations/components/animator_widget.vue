<template>
  <div class="">
    <div class="border-solid border-2 border-gray-400 mb-2">
      <controls @play="play"
                @pause="pause"
                @colorPicked="onColorPick"
                :duration="animationTimestamp" />

      <timeline :selectedFrameIndex="selectedFrameIndex"
                :timeline="timeline"
                @selectedFrame="onSelectedFrame" />
    </div>
  </div>
</template>

<script>
import timeline from './animator/timeline.vue';
import controls from './animator/controls.vue';
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  // Value is the current pixel state...
  props: ['timeline', 'selectedPixels'],

  mounted() {
    this.onSelectedFrame(0);
  },

  beforeDestroy() {
    this.pause();
  },

  data() {
    return {
      // The time, in ms, from the start of the timeline to the curser
      animationTimestamp: null,

      // The time that the last frame was rendered
      lastFrameAt: null,

      // The currently selected frame in the timeline
      selectedFrameIndex: null,

      // The handler for the animation interval
      animationInterval: null,
    };
  },

  methods: {
    ...mapMutations('frames', {
      setFrameColor: 'setColor'
    }),
    play() {
      this.animationInterval = setInterval(this.renderLoop.bind(this), 1000/100);
    },

    pause() {
      this.lastFrameAt = null;
      clearInterval(this.animationInterval);
    },

    renderLoop() {
      // Initialize the timestamp of the last rendered frame
      if(!this.lastFrameAt) { this.lastFrameAt = (+ new Date()); }

      // Calculate the time since the last frame to now
      let dt = (+ new Date()) - this.lastFrameAt;

      this.animationTimestamp = this.timestampOfSelectedFrame + dt;

      let timelineSegment = this.timeline[this.selectedFrameIndex];
      let currentFrame = this.frameById(timelineSegment.frameId);

      // Set the current pixel state to that of the desired frame
      for(let i=0; i<this.numPixels; i++) {
        let pixel = currentFrame.data[i];

        this.pixelState[i].r = pixel.r;
        this.pixelState[i].g = pixel.g;
        this.pixelState[i].b = pixel.b;
      }

      // Detect if it's time to move on to the next frame
      if(dt > timelineSegment.duration) {
        this.selectedFrameIndex++;
        this.lastFrameAt = (+ new Date());

        // If we've run out of frames move to the next one
        if(this.selectedFrameIndex === this.frameCount) {
          this.selectedFrameIndex = 0;
        }
      }
    },

    onSelectedFrame(index) {
      this.selectedFrameIndex = index;

      this.animationTimestamp = this.timestampOfSelectedFrame;
    },

    sendCurrentFrame() {
      let timelineFrame = this.timeline[this.selectedFrameIndex];
      let currentFrame = this.frameById(timelineFrame.frameId);

      this.$emit('frameData', currentFrame.data);
    },

    onColorPick(color) {
      let timelineFrame = this.timeline[this.selectedFrameIndex];

      this.selectedPixels.forEach((pixelIndex) => {
        this.$store.commit('frames/setColor', {
          id: timelineFrame.frameId,
          ledId: pixelIndex - 1,
          color: color
        });
      });

      this.sendCurrentFrame();
    }
  },

  computed: {
    ...mapGetters('frames', {
      frameById: 'getById'
    }),

    frameCount() {
      return this.timeline.length;
    },

    timestampOfSelectedFrame() {
      let timestamp = 0;
      let pastFrames = this.timeline.slice(0,this.selectedFrameIndex);

      for(const frame of pastFrames) {
        timestamp += frame.duration;
      }

      return timestamp;
    }
  },

  watch: {
    selectedFrameIndex() {
      this.sendCurrentFrame();
    }
  },

  components: {
    controls,
    timeline
  }
}
</script>
