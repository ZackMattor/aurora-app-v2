<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import { Game } from '../../../../game.js';

export default {
  props: ['pixelState', 'selectedPixels'],

  mounted() {
    this.num_pixels = 20;

    this.game = new Game(this.$refs.canvas);

    this.game.loadScene().then(() => {
      this.game.start();
      this.game.setPixelState(this.pixelState);
    });
  },

  beforeDestroy() {
    this.game.destroy();
  },

  watch: {
    pixelState: {
      deep: true,

      handler(val) {
        this.game.setPixelState(this.pixelState);
      }
    }
  }
}
</script>
