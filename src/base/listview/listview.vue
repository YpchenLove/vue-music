<template>
  <scroll class="listview" ref="listview" :data="data">
    <ul>
      <li v-for="group in data" class="list-group" ref="listGroup" :key="group.title">
        <h2 class="list-group-title">{{ group.title }}</h2>
        <ul>
          <li v-for="(item, index) in group.items" :key="index" class="list-group-item">
            <img class="avatar" v-lazy="item.avatar" />
            <span class="name">{{ item.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut" @touchstart="onShortcutTouchStart">
      <ul>
        <li
          class="item"
          v-for="(item, index) in shortcutList"
          :key="index"
          :data-index="index"
        >{{ item }}</li>
      </ul>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import { getData } from 'common/js/dom.js'
export default {
  components: {
    Scroll
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    shortcutList() {
      return this.data.map(group => {
        return group.title.substr(0, 1)
      })
    }
  },
  methods: {
    onShortcutTouchStart(e) {
      let anchorIndex = getData(e.target, 'index')
      console.log(anchorIndex)
      this.$refs.listview.scrollToElement(this.$refs.listGroup[anchorIndex], 0)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

.listview
  position relative
  height 100%
  width 100%
  overflow hidden
  background $color-background

  .list-group
    padding-bottom 30px

    &-title
      height 30px
      line-height 30px
      padding-left 20px
      font-size $font-size-small
      color $color-text-l
      background $color-highlight-background

    &-item
      display flex
      align-items center
      padding 20px 0 0 30px

      .avatar
        height 50px
        width 50px
        border-radius 50%

      .name
        margin-left 20px
        color $color-text-l
        font-size $font-size-medium

  .list-shortcut
    position fixed
    z-index 30
    right 5px
    top 50%
    transform translateY(-50%)
    width 20px
    padding 20px 0
    border-radius 10px
    text-align center
    background $color-background-d
    font-family Helvetica

    .item
      padding 3px
      line-height 1
      color $color-text-l
      font-size $font-size-small

      &.current
        color $color-theme
</style>