<template lang="pug">
  header.header-component
    logoMain
    .header-menu-nav
      iconSearch
      iconProfile
      iconFavourite
</template>

<script>
import logoMain from '@/components/icons/logo'
import iconSearch from '@/components/icons/search'
import iconProfile from '@/components/icons/profile'
import iconFavourite from '@/components/icons/favourite'

export default {
  name: 'header-component',
  components: {
    logoMain,
    iconSearch,
    iconProfile,
    iconFavourite
  }
}
</script>

<style lang="scss" scoped>
  .header-component {
    height: 104px;
  }
</style>
