<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import { Game } from '../game.js';

export default {
  mounted() {
    this.pixel_state = [];

    for(let i=0; i<20; i++) {
      this.pixel_state.push({r: 1, g: 1, b: 1});
    }

    this.game = new Game(this.$refs.canvas);

    this.game.loadScene().then(() => {
      this.game.start();
    });

    setInterval(() => {
      this.pixel_state[0].r--;
    }, 2000);
  },

  beforeDestroy() {
    this.game.destroy();
  },

  watch: {
    pixel_state: {
      deep: true,

      handler(val) {
        this.game.setPixelState(this.pixel_state);
      }
    }
  },

  data() {
    return {
      pixel_state: [],
      selected_pixels: []
    };
  }
}
</script>
