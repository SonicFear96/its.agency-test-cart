<template lang="pug">
  .image-component.cover
    img(:src="imagePath")
</template>

<script>
export default {
  name: 'image-component',
  props: {
    path: {
      type: String,
      default: ""
    }
  },
  computed: {
    imagePath () {
      return `${this.path}`
    }
  }
}
</script>

<style lang="scss" scoped>
.image-component {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  &.cover {
    img {
      height: 100%;
      width: 100%;
      object-position: center center;
      object-fit: cover;
    }
  }
  img {
    width: 100%;
  }
}

</style>
