<template lang="pug">
  .switcher-component
    label.switch
      input(type="checkbox" @click="toggleCheckbox" :checked="value")
      .slider.round
</template>

<script>

export default {
  name:'checkbox-switcher-component',
  props: {
    value: Boolean
  },
  methods: {
    toggleCheckbox () {
      this.$emit('changeCheckbox')
    }
  }
}
</script>

<style lang="scss" scoped>
.switcher-component {
  .switch {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 22px;
  }

  .switch input {
    display: none;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $basic-grey;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    width: 8px;
    height: 8px;
    left: 6px;
    bottom: 7px;
    background-color: $basic-black;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: $basic-green;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(15px);
    -ms-transform: translateX(15px);
    transform: translateX(15px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}
</style>
