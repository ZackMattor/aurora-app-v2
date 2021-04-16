<template>
  <ul class="flex flex-col p-4">
    <li v-for="light in lights" class="border-gray-400 flex flex-row mb-2">
      <div class="select-none border-4 border-solid border-gray-400 rounded-md flex flex-1 items-center p-4">
        <div class="flex flex-col w-full">
          <div class="flex flex-1 items-center">
            <div class="flex flex-col rounded-md w-20 h-20 bg-gray-600 justify-center items-center mr-4 text-5xl"><i :class="geometryByKey(light.geometry_name).icon"></i></div>

            <div class="flex-1 pl-1 mr-15">
              <div class="font-medium text-xl">{{ light.id }}</div>
              <div class="text-gray-600 text-sm">{{ animationsByGeometry(light.geometry_name).length }} Animations</div>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import axios from 'axios';

export default {
  async mounted() {
    console.log('Fetching lights...')
    this.lights = (await axios.get('http://10.0.0.20:8080/api/lights')).data;
    console.log(this.lights);
  },

  data() {
    return { lights: [] };
  },

  computed: {
    ...mapState('animations', {
      animations: state => state.all
    }),

    ...mapState('geometries', {
      geometries: state => state.all
    }),

    ...mapGetters('geometries', {
      geometryByKey: 'getByKey'
    }),

    ...mapGetters('animations', {
      animationsByGeometry: 'getByGeometry'
    })
  }
}
</script>
