<template>
  <input type="range" :value="mappedValue" min="0" max="100" @input="handleInput" />
</template>

<script>
export default {
  props: ['value'],

  //model: {
  //  prop: "value",
  //  event: 
  //},

  methods: {
    handleInput(e) {
      let val = parseInt(e.target.value) / 100;
      console.log(val);
      this.$emit('input', val);
    }
  },

  computed: {
    mappedValue() {
      return this.value * 100;
    }
  }
};
</script>
