<template>
  <ul class="flex flex-col p-4">
    <li v-for="geometry in geometries" class="border-gray-400 flex flex-row mb-2">
      <div class="select-none border-4 border-solid border-gray-400 rounded-md flex flex-1 items-center p-4">
        <div class="flex flex-col w-full">
          <div class="flex flex-1 items-center">
            <div class="flex flex-col rounded-md w-20 h-20 bg-gray-600 justify-center items-center mr-4 text-5xl"><i :class="geometry.icon"></i></div>

            <div class="flex-1 pl-1 mr-15">
              <div class="font-medium text-xl">{{ geometry.name }}</div>
              <div class="text-gray-600 text-sm">{{ animationsByGeometry(geometry.key).length }} Animations</div>
            </div>
          </div>

          <div class="flex flex-col">
            <router-link v-for="animation in animationsByGeometry(geometry.key)" :to="`/animations/${animation.id}/edit`" class="border-solid border-2 border-gray-400 mt-4 flex flex-1 p-3">{{ animation.name }}</router-link>
            <p class="border-solid border-2 border-gray-400 mt-4 flex flex-1 p-3"><span><i class="fas fa-plus"></i> Add New Animation</span></p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return { };
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
