<template>
  <div class="">
    <div class="border-solid border-2 border-gray-400 mb-2">
      <controls />
      <timeline :timeline="timeline" />
    </div>
  </div>
</template>

<script>
import timeline from './animator/timeline.vue';
import controls from './animator/controls.vue';

export default {
  props: ['timeline'],

  components: {
    controls,
    timeline
  }
}
</script>
