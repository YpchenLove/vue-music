import Vue from 'vue'
import Router from 'vue-router'

// page
import Recommend from '@/views/recommend/recommend'
import Singer from '@/views/singer/singer'
import SingerDetail from '@/views/singer-detail/singer-detail'
import Search from '@/views/search/search'
import Rank from '@/views/rank/rank.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
      // component: () => import(/* webpackChunkName: "rank" */ '../views/rank/rank.vue')
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
