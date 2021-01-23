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
    <div v-for="color in colors" @click="$emit('colorPicked', color)" :style="colorStyle(color)" class="border-gray-400 border-solid border-r-2 p-2">
    </div>
  </div>
</template>

<script>
import DurationRenderer from './duration_renderer.vue';

export default {
  props: ['duration'],

  data() {
    return {
      playing: false,
      colors: [
        { r:1, g:1, b:1 },
        { r:1, g:0, b:0 },
        { r:0, g:1, b:0 },
        { r:0, g:0, b:1 },
      ]
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
    },

    colorStyle(color) {
      return `width: 40px; height: 40px; background-color: rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}, 1);`;
    }
  },

  components: {
    'duration-renderer': DurationRenderer
  }
}
</script>
