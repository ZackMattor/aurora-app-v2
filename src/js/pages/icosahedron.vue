<template>
  <div class="page-icosahedron">
    <router-link to="/">Back...</router-link>

    <light-viewer-icosahedron />
  </div>
</template>

<script>
import LightViewerIcosahedron from '../components/light_viewer_icosahedron.vue';

export default {
  data() {
    return { };
  },

  components: {
    'light-viewer-icosahedron': LightViewerIcosahedron
  }
}
</script>
