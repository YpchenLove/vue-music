<template>
  <div id="app">
    <m-header />
    <tab />
    <router-view/>
  </div>
</template>

<script>
import MHeader from '@/components/m-header/m-header'
import Tab from '@/components/tab/tab'

export default {
  components: {
    MHeader,
    Tab
  }

}
</script>

<style scoped lang="stylus">
@import "./common/stylus/variable"

#app
  color: $color-theme

</style>
