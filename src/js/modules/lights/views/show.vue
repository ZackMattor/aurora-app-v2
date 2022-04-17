<template>
  <ul class="flex flex-col p-4">
    <template v-if="loading">
      Loading...
    </template>
    <template v-else>
      <h1 class="text-center text-3xl">{{light.id}}</h1>

      <h1>geometry_name: {{light.geometry_name}}</h1>
      <h1>connected_at: {{new Date(light.connected_at).toString()}}</h1>
      <h1>last_telemetry: {{new Date(light.last_telemetry).toString()}}</h1>

      Current Animation: <select v-model="current_animation">
        <option v-for="ani in available_animations" :key="ani.id" :value="ani.id">
          {{ani.id}}
        </option>
      </select>

      <div v-for="(val, key) in animation_data.config" :key="key">
        {{key}} <slider v-if="typeof val === 'number'" v-model="animation_data.config[key]" />
        <span v-else>{{val}}</span>
      </div>
    </template>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';

import Slider from './components/slider.vue';

export default {
  async mounted() {
    console.log(this.$route.params.id);
    await this.$store.dispatch('lights/fetch');
    this.animation_data = (await axios.get(`http://10.0.0.20:8080/api/v1/lights/${this.$route.params.id}/animation`)).data;
    this.available_animations = (await axios.get(`http://10.0.0.20:8080/api/v1/animations`)).data;
    this.current_animation = this.light.animation_name;
    this.loading = false;
  },

  data() {
    return {
      loading: true,
      animation_data: null,
      current_animation: null,
      available_animations: []
    };
  },

  computed: {
    ...mapGetters('lights', {
      findLight: 'find'
    }),

    light() {
      return this.findLight(this.$route.params.id);
    },
  },

  watch: {
    animation_data: {
      async handler(data, old_data) {
        if(old_data == null) {
          return;
        }

        await axios.patch(`http://10.0.0.20:8080/api/v1/lights/${this.$route.params.id}/animation`, data);
        console.log("Updating Amimation Configuration", data);
      },
      deep: true
    },

    async current_animation(data, old_data) {
      if(old_data == null) {
        return;
      }

      await axios.post(`http://10.0.0.20:8080/api/v1/lights/${this.$route.params.id}/animation`, {
        id: data
      });
      this.animation_data = (await axios.get(`http://10.0.0.20:8080/api/v1/lights/${this.$route.params.id}/animation`)).data;
    }
  },

  components: {
    "slider": Slider
  }
}
</script>
