<template>
  <div class="flex flex-row flex-nowrap overflow-y-scroll border-gray-400 border-solid border-l-2 border-r-2 ">
    <div v-if="!playing" @click="onPlay" class="border-gray-400 border-solid border-r-2 p-2">
      <i class="fas fa-play"></i>
    </div>
    <div v-else @click="onPause" class="border-gray-400 border-solid border-r-2 p-2">
      <i class="fas fa-pause"></i>
    </div>
  </div>
</template>

<script>
export default {
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

  components: { }
}
</script>
