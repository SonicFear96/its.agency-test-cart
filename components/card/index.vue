<template lang="pug">
  .card-component
    .image
      vImg(:path="data.image")
    .title(v-html="data.title")
    .card-bottom
      .price
        span {{data.price}} ₽
      .add-product__wrapper
        button.add-product
          span +
</template>

<script>
import vImg from '@/components/image-component'
export default {
  components: {
    vImg
  },
 props: {
  data: {
    type: Object,
    default: () => {}
  }
 }
}
</script>

<style lang="scss" scoped>
 .card-component {
  border-bottom: 1px solid rgba($black, 0.1);
  .image {
    position: relative;
    padding-top: 97%;
    overflow: hidden;
  }
  .title {
    margin-top: 16px;
    font-family: $default-font;
    color: $basic-black;
    max-width: 70%;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 112%;
    letter-spacing: 0.02em;
  }
  .card-bottom {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  .price {
    font-family: $default-font;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
  }
  .add-product__wrapper {
    opacity: 0;
    transition: opacity 0.8s ease;
    &:hover {
      opacity: 1;
    }
    button {
      cursor: pointer;
      width: 80px;
      height: 32px;
      border: none;
      border-radius: 8px;
      background-color: $basic-green;
    }
    span {
      font-family: $default-font;
      font-weight: 600;
    }
  }
 }
</style>
