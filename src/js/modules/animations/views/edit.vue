<template>
  <div class="page-icosahedron">
    <h1 class="text-center text-3xl">{{animation.name}}</h1>

    <component ref="renderer"
               :is="currentRenderer"
               :pixel-state='pixelState'
               :selected-pixels='selectedPixels'
               @faceClick='onFaceClick' />

    <animator-widget @frameData="pixelState = $event"
                     :timeline="animation.timeline"
                     :selected-pixels='selectedPixels'
                     class="fixed w-full bottom-12" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
import IcosahedronRenderer from '../components/renderers/icosahedron.vue';
import AnimatorWidget from '../components/animator_widget.vue';

export default {
  async mounted() {
    let lights = await axios.get('http://10.0.0.20:8080/api/lights');

    this.icosahedron_light = lights?.data?.find(l => l.geometry_name === 'icosahedron');

    if(this.icosahedron_light) {
      console.log(this.icosahedron_light);
      axios.post(`http://10.0.0.20:8080/api/lights/${this.icosahedron_light.id}/animation`, {
          id: 'PassthroughState'
        }, {
          headers: { 'Content-Type': 'application/json' }
        });
    }
  },

  async unmounted() {
    console.log('BYE');
    if(this.icosahedron_light) {
      axios.post(`http://10.0.0.20:8080/api/lights/${this.icosahedron_light.id}/animation`, {
          id: 'HueWalker'
        }, {
          headers: { 'Content-Type': 'application/json' }
        });
    }
  },

  data() {
    return {
      pixelState: [],
      selectedPixels: [],
      currentRenderer: 'icosahedron-renderer',
      icosahedron_light: null,
    };
  },

  methods: {
    onFaceClick(id) {
      // If the face is not selected, select it
      if(this.selectedPixels.indexOf(id) === -1) {
        this.selectedPixels.push(id);

      // If the face is already selected, deselect it
      } else {
        this.selectedPixels = this.selectedPixels.filter((p) => p !== id);
      }
    }
  },

  computed: {
    ...mapGetters('animations', {
      animationById: 'getById'
    }),

    animation() {
      return this.animationById(this.$route.params.id);
    },
  },

  components: {
    'icosahedron-renderer': IcosahedronRenderer,
    'animator-widget': AnimatorWidget
  }
}
</script>
