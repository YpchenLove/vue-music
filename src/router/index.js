import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/views/recommend/recommend'
import Singer from '@/views/singer/singer'
import Search from '@/views/search/search'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      component: Singer
    },
    {
      path: '/rank',
      name: 'Rank',
      component: () => import(/* webpackChunkName: "rank" */ '../views/rank/rank.vue')
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
