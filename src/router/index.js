import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// @可以代替 ..
// 引入需要配置路由的組件
// 引入一級路由
import Index from '@/components/index'
import Detail from '@/components/detail'
import Play from '@/components/play'

// 引入二級路由
import Reco from '@/components/pages/reco'
import Rank from '@/components/pages/rank'
import Search from '@/components/pages/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: 'reco',
          component: Reco
        },
        {
          path: 'rank',
          component: Rank
        },
        {
          path: 'search',
          component: Search
        }
      ]
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/play',
      component: Play
    },
    {
      path: '*',
      redirect: '/index/reco'
    }
  ]
})
