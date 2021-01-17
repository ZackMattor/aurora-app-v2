<template>
  <div class="">
    <div class="border-solid border-2 border-gray-400 mb-2">
      <controls @play="onPlay" @pause="onPause" />
      <timeline @frameData="$emit('frameData', $event)" :timeline="timeline" />
    </div>
  </div>
</template>

<script>
import timeline from './animator/timeline.vue';
import controls from './animator/controls.vue';
import store from './animator/store.js';
import vuex from 'vuex';

export default {
  // Value is the current pixel state...
  props: ['timeline'],

  mounted() {
    this.store = new Vuex.store(state );
  },

  data() {
    return {
      store: null
    };
  },

  methods: {
    onPlay() { },

    onPause() { }
  },

  components: {
    controls,
    timeline
  }
}
</script>
