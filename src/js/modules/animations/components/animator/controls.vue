<template>
  <div class="flex flex-row flex-nowrap overflow-y-scroll border-gray-400 border-solid border-l-2 border-r-2 items-center font-mono">
    <div v-if="!playing" @click="onPlay" class="border-gray-400 border-solid border-r-2 p-2">
      <i class="fas fa-play"></i>
    </div>
    <div v-else @click="onPause" class="border-gray-400 border-solid border-r-2 p-2">
      <i class="fas fa-pause"></i>
    </div>
    <div class="border-gray-400 border-solid border-r-2 p-2">
      <span><i class="fas fa-clock"></i> <duration-renderer :duration="duration" /></span>
    </div>
  </div>
</template>

<script>
import DurationRenderer from './duration_renderer.vue';

export default {
  props: ['duration'],

  data() {
    return {
      playing: false
    };
  },

  methods: {
    onPlay() {
      this.playing = true;
      this.$emit('play');
    },

    onPause() {
      this.playing = false;
      this.$emit('pause');
    }
  },

  components: {
    'duration-renderer': DurationRenderer
  }
}
</script>
