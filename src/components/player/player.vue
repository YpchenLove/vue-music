<template>
  <div class="player">
    <div class="normal-player">播放器</div>
    <div class="mini-player"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.player
  .normal-player
    position fixed
    left 0
    right 0
    top 0
    bottom 0
</style>