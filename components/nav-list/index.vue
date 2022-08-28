<template lang="pug">
  .nav-list-component
    ul.nav-list
      li.nav-item(v-for="item in navList" :key="item.id")
        nuxtLink.nav-item__link(to="/" v-html="item.title")
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          id: 1,
          title: 'Продукты'
        },
        {
          id: 2,
          title: 'Цвета'
        },
        {
          id: 3,
          title: 'Вдохновение'
        },
        {
          id: 4,
          title: 'Советы',
        },
        {
          id: 5,
          title: 'Найти Магазин'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-list-component {

  .nav-list {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 24px;
  }

  .nav-item__link {
    font-family: $default-font;
    color: $basic-black;
    font-size: 14px;
    line-height: 100%;
    text-transform: uppercase;
    white-space: nowrap;
    transition: opacity 0.5s ease;
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
