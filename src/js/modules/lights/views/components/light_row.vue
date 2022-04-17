<template>
  <div class="select-none border-4 border-solid border-gray-400 rounded-md flex flex-1 items-center p-4">
    <div class="flex flex-col w-full">
      <div class="flex flex-1 items-center">
        <div class="flex flex-col rounded-md w-20 h-20 bg-gray-600 justify-center items-center mr-4 text-5xl"><i :class="geometryIcon"></i></div>

        <div class="flex-1 pl-1 mr-15">
          <div class="font-medium text-xl">{{ light.id }}</div>
          <div class="text-gray-600 text-sm">{{ animationsByGeometry(light.geometry_name).length }} Keyframe Animations</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import axios from 'axios';

export default {
  props: ['light'],

  computed: {
    geometryIcon() {
      let geo = this.geometryByKey(this.light.geometry_name);
      return geo ? geo.icon : 'fas fa-question';
    },

    ...mapState('keyframeAnimations', {
      animations: state => state.all
    }),

    ...mapState('geometries', {
      geometries: state => state.all
    }),

    ...mapGetters('geometries', {
      geometryByKey: 'getByKey'
    }),

    ...mapGetters('keyframeAnimations', {
      animationsByGeometry: 'getByGeometry'
    })
  }
}
</script>
