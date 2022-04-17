<template>
  <span>BOOKCASE</span>
</template>

<script>

export default {
  props: ['pixelState', 'selectedPixels'],

  watch: {
    pixelState: {
      deep: true,

      handler(val) {
      }
    }
  }
}
</script>
