<template lang="pug">
  header.header-component.wrapper
    .header-left
      nuxt-link.logo(to="/")
        logoMain
      navList
    .header-right
      .header-phone
        a.phone(href="tel:+74952217769") +7 (495) 221-77-69
        span.phone-text Заказать звонок
      .header-nav
        a.search(href="#")
          iconSearch
        nuxt-link.profile(to="/")
          iconProfile
        nuxt-link.favourite(to="/")
          iconFavourite
        button.button-cart
          span 0
</template>

<script>
import logoMain from '@/components/icons/logo'
import iconSearch from '@/components/icons/search'
import iconProfile from '@/components/icons/profile'
import iconFavourite from '@/components/icons/favourite'
import navList from '@/components/nav-list/'

export default {
  name: 'header-component',
  components: {
    logoMain,
    iconSearch,
    iconProfile,
    iconFavourite,
    navList
  }
}
</script>

<style lang="scss" scoped>
  .header-component {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 104px;
    background-color: gray;
    .header-left {
      display: flex;
      flex-direction: row;
      align-items: center;
      .nav-list-component {
        // margin-left: 27%;
      }
    }
    .header-right {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: auto;
    }
    .header-phone {
      display: flex;
      flex-direction: column;
      // margin-right: 36%;
      white-space: nowrap;
      .phone {
        font-family: $default-font;
        color: $basic-black;
        font-weight: 500;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: -0.02em;
        transition: opacity 0.5s ease;
        &:hover {
          opacity: 0.5;
        }
      }
      .phone-text {
        font-family: $default-font;
        color: $basic-black;
        opacity: 0.3;
        font-weight: 400;
        font-size: 14px;
        line-height: 100%;
      }
    }
    .header-nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 30px;
      a, .button-cart {
        height: 24px;
      }
      .button-cart {
        width: 24px;
        height: 24px;
        border: none;
        border-radius: 50%;
        background-color: $basic-green;
        &.span {
          background-color: $basic-black;
          font-weight: 500;
          font-size: 12px;
          line-height: 15px;
          letter-spacing: 0.06em;
          text-align: center;
        }
      }
    }
  }
</style>
