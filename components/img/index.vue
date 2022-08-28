<template lang="pug">
  .image-component.cover(v-if="path")
    img(:src="`${imagePath}`")
</template>

<script>
export default {
  name: 'image-component',
  props: {
    path: {
      type: String,
      default: () => {}
    },
  },
  computed: {
    imagePath () {
      return `${process.env.NUXT_ENV_MEDIA_BASE_URL}${this.path}`
    }
  }
}
</script>

<style lang="scss" scoped>
.image-component {
  position: relative;
  height: 100%;
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
