<template>
  <div class="">
    <div class="border-solid border-2 border-gray-400 mb-2">
      <controls @play="onPlay" @pause="onPause" />
      <timeline :selectedFrameIndex="selectedFrameIndex" @selectedFrame="onSelectedFrame" :timeline="timeline" />
    </div>
  </div>
</template>

<script>
import timeline from './animator/timeline.vue';
import controls from './animator/controls.vue';
import { mapState, mapGetters } from 'vuex';
//import store from './animator/store.js';
//import vuex from 'vuex';

export default {
  // Value is the current pixel state...
  props: ['timeline'],

  mounted() {
    // IDEA: should we have a more central store per animator widget?
    //this.store = new Vuex.store(state );
    this.onSelectedFrame(0);
  },

  data() {
    return {
      //store: null,
      currentTime: null,
      selectedFrameIndex: null
    };
  },

  methods: {
    onPlay() {
      
    },

    onPause() {
      
    },

    onSelectedFrame(index) {
      this.selectedFrameIndex = index;
      
      let frameData = this.frameById(index).data;
      this.$emit('frameData', frameData);
    }
  },

  computed: {
    ...mapGetters('frames', {
      frameById: 'getById'
    }),
  },

  components: {
    controls,
    timeline
  }
}
</script>
