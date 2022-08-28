<template lang="pug">
  .main-page.wrapper
    .main
      .filter
        .filter-wrapper
          ul.filter-wrapper
            li.filter-item(v-for="item in filter" :key="item.id")
              vSwitch(:value="item.active" @changeCheckbox="changeCheckbox(item)")
              span.text-filter.basic-text(v-html="item.title")
      .catalog
        .catalog-heading
          .product-quantity.basic-text
            span {{product.length}} товаров
          .product-filter.basic-text
            span сначала дорогие
        .catalog-list__wrapper
          .catalog-list
            .catalog-list__item(v-for="item in product" :key="item.id")
              vCard(:data='item')
</template>

<script>
import vCard from '@/components/card'
import vSwitch from '@/components/switcher'
export default {
  name: 'main-page',
  components: {
    vCard,
    vSwitch
  },
  data () {
    return {
      filter: [
        {
          id: 1,
          title: 'Новинки',
          alias: 'new',
          active: false,
        },
        {
          id: 2,
          title: 'Есть в наличии',
          alias: 'isStock',
          active: false,
        }
      ],
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
  },
  methods: {
    changeCheckbox (item) {
      item.active = !item.active
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-page {
    .main {
      margin-top: 70px;
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
    .filter {
      width: calc(100% / 12 * 2);
      .filter-wrapper {
        list-style: none;
      }
      .filter-item {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .text-filter {
        margin-left: 10px;
      }
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
        width: calc(20% - 20px);
      }
    }
  }
</style>
