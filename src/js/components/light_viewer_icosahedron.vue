<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import { Game } from '../game.js';

export default {
  mounted() {
    this.game = new Game(this.$refs.canvas);

    this.game.loadScene().then(() => {
      this.game.start();
    });
  },

  beforeDestroy() {
    this.game.destroy();
  },

  data() {
    return { };
  }
}
</script>
