<template>
  <div class="flex flex-col p-4">
    <p v-if="lights.length == 0">
      No devices currently online... Go connect some!
    </p>
    <li v-for="light in lights" :key="light.id" class="border-gray-400 flex flex-row mb-2">
      <router-link :to="`/lights/${light.id}/show`">
        <light-row :light="light"></light-row>
      </router-link>
    </li>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
