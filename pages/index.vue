<template lang="pug">
  .main-page.wrapper
    .main
      .catalog
        .catalog-heading
          .product-quantity.basic-text
            span 420 товаров
          .product-filter.basic-text
            span сначала дорогие
        .catalog-list__wrapper
          .catalog-list
            .catalog-list__item(v-for="item in product" :key="item.id")
              vCard(:data='item')
</template>

<script>
import vCard from '@/components/card'
export default {
  name: 'main-page',
  components: {
    vCard
  },
  data () {
    return {
      product: [
        {
          id: 1,
          title: 'Краска Wallquest, Brownsone MS90102',
          active: true,
          price: 4800,
          image: '/img/product/product-1.png'
        },
        {
          id: 2,
          title: 'Краска Wallquest, Brownsone MS90102',
          active: true,
          price: 5000,
          image: '/img/product/product-1.png'
        },
        {
          id: 3,
          title: 'Краска Wallquest, Brownsone MS90102',
          active: true,
          price: 5200,
          image: '/img/product/product-1.png'
        },
        {
          id: 4,
          title: 'Краска Wallquest, Brownsone MS90102',
          active: true,
          price: 5400,
          image: '/img/product/product-1.png'
        },
        {
          id: 5,
          title: 'Краска Wallquest, Brownsone MS90102',
          active: true,
          price: 5600,
          image: '/img/product/product-1.png'
        },
        {
          id: 6,
          title: 'Краска Wallquest, Brownsone MS90102',
          active: true,
          price: 5700,
          image: '/img/product/product-1.png'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-page {
    .catalog {
      margin-top: 70px;
    }
    .catalog-heading {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .catalog-list__wrapper {
      margin-top: 45px;
    }
    .catalog-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-left: -20px;
      margin-bottom: -20px;
      .catalog-list__item {
        margin-bottom: 16px;
        margin-left: 20px;
        width: calc(20% - 24px);
      }
    }
  }
</style>
