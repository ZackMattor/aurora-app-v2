<template>
  <div class="border-solid border-2 border-gray-400 flex flex-row flex-nowrap overflow-y-scroll p-4">
    <timeline-frame
      v-for="( timelineFrame, index ) in timeline"
      :is-selected="selectedFrameIndex === index"
      @selected="timelineFrameSelected(index)"
      :timeline-frame="timelineFrame" />
  </div>
</template>

<script>
import TimelineFrame from './timeline_frame.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  props: ['timeline'],

  mounted() {
    this.selectedFrameIndex = 0;
  },

  data() {
    return {
      selectedFrameIndex: null,

      // Animation Vars
      currentTime: null,
      lastFrameAt: null,
    }
  },

  methods: {
    timelineFrameSelected(index) {
      this.selectedFrameIndex = index;

      this.$emit('frameData', this.frameById(index).data);
    }
  },

  computed: {
    ...mapGetters('frames', {
      frameById: 'getById'
    }),

    currentFrame() {
      return this.timeline[this.selectedFrameIndex];
    }
  },

  components: {
    'timeline-frame': TimelineFrame
  }
}
</script>
