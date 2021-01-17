<template>
  <div class="space-x-0 flex flex-row items-center">
    <div @click="timelineFrameSelected" :class="isSelected ? 'border-yellow-400' : 'border-gray-400'" class="w-8 h-24 border-solid border-8"></div>
    <div :style="width" class="h-0 border-solid border-2 border-gray-400"></div>
  </div>
</template>

<script>
export default {
  props: ['timelineFrame', 'isSelected'],

  methods: {
    timelineFrameSelected() {
      this.$emit('selected');
    }
  },

  computed: {
    width() {
      return `width: ${this.timelineFrame.duration/5}px;`;
    }
  },

  components: { },
}
</script>
