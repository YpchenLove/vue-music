<template>
  <transition name="slide" appear>
    <music-list :title="title" :bgImage="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script>
import MusicList from 'components/music-list/music-list'
import { mapGetters } from 'vuex'
import { getSingerDetail } from 'api/singer'
import { createSong, isValidMusic, processSongsUrl } from 'common/js/song'
import { ERR_OK } from 'api/config'

export default {
  components: {
    MusicList
  },
  computed: {
    title() {
      return this.singer.name
    },
    bgImage() {
      return `https://y.gtimg.cn/music/photo_new/T001R500x500M000${
        this.singer.id
      }.jpg`
    },
    ...mapGetters(['singer'])
  },
  created() {
    this._getDetail()
  },
  data() {
    return {
      songs: []
    }
  },
  methods: {
    async _getDetail() {
      if (!this.singer.id) {
        this.$router.push('/singer')
      }
      const res = await getSingerDetail(this.singer.id)
      if (res.code === ERR_OK) {
        processSongsUrl(this._normalizeSongs(res.data.list)).then(songs => {
          this.songs = songs
        })
      }
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach(item => {
        let { musicData } = item
        if (isValidMusic(musicData)) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

.singer-detail
  position fixed
  z-index 100
  height 100%
  top 0
  left 0
  right 0
  border-top 0
  background $color-background

.slide-enter-active, .slide-leave-active
  transition all 0.3s

.slide-enter, .slide-leave-to
  transform translate3d(100%, 0, 0)
</style>