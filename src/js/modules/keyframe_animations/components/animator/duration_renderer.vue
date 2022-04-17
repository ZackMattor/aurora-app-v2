<template>
  <span>
    <template v-if="duration !== null">{{minutes}}:{{seconds}}:{{milliseconds}}</template>
    <template v-else>--:--:--</template>
  </span>
</template>

<script>
export default {
  props: ['duration'],

  computed: {
    milliseconds() {
      let durationStr = "000" + this.duration.toString();
      let lng = durationStr.length;

      return durationStr.slice(lng-3, lng);
    },

    seconds() {
      let seconds = Math.floor(this.duration / 1000) % 60;
      let secondsStr = "00" + seconds.toString();
      let lng = secondsStr.length;

      return secondsStr.slice(lng-2, lng);
    },

    minutes() {
      let minutes = Math.floor(this.duration / 60000);
      let minutesStr = "00" + minutes.toString();
      let lng = minutesStr.length;

      return minutesStr.slice(lng-2, lng);
    }
  }
}
</script>
