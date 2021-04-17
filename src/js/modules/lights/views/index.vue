<template>
  <ul class="flex flex-col p-4">
    <li v-for="light in lights" class="border-gray-400 flex flex-row mb-2">
      <light-row :light="light"></light-row>
    </li>
  </ul>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import LightRow from './components/light_row.vue';

export default {
  async mounted() {
    this.$store.dispatch('lights/fetch');
  },

  computed: {
    ...mapGetters('lights', {
      lights: 'all'
    })
  },

  components: {
    "light-row": LightRow
  }
}
</script>
