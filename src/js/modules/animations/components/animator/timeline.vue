<template>
  <div class="border-solid border-2 border-gray-400 flex flex-row flex-nowrap overflow-y-scroll p-4">
    <timeline-frame v-for="timelineFrame in timeline" :timeline-frame="timelineFrame"/>
  </div>
</template>

<script>
import TimelineFrame from './timeline_frame.vue';

export default {
  props: ['timeline'],

  components: {
    'timeline-frame': TimelineFrame
  }
}
</script>
