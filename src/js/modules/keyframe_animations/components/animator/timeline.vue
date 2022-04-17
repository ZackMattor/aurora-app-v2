<template>
  <div class="border-solid border-2 border-gray-400 flex flex-row flex-nowrap overflow-y-scroll p-4">
    <timeline-frame
      v-for="( timelineFrame, index ) in timeline"
      :key="timelineFrame.frameId"
      :is-selected="selectedFrameIndex === index"
      @selected="timelineFrameSelected(index)"
      :timeline-frame="timelineFrame" />
  </div>
</template>

<script>
import TimelineFrame from './timeline_frame.vue';

export default {
  props: ['timeline', 'selectedFrameIndex'],

  data() {
    return {
      // Animation Vars
      currentTime: null,
      lastFrameAt: null,
    }
  },

  methods: {
    timelineFrameSelected(index) {
      this.$emit('selectedFrame', index);
    }
  },

  components: {
    'timeline-frame': TimelineFrame
  }
}
</script>
