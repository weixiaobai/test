import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import test from '@/components/test'
import table from '@/components/table'
import header from '@/components/common/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },{
      path: '/v-model',
      name: 'v-model',
      component: () => import('@/components/v-model/v-model.vue')
    },{
      path: '/jsx',
      name: 'jsx',
      component: () => import('@/components/jsx/jsx.vue')
    }
  ]
})
