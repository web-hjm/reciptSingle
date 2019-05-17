import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/home/grab-single',
      component: () => import(/* webpackChunkName: "about" */ './views/home.vue'),
      children: [
        {
          path: 'grab-single',
          name: 'grab-single',
          meta: {
            title: '抢单'
          },
          component: () => import(/* webpackChunkName: "about" */ './views/grab-single.vue')
        },
        {
          path: 'recipt-single',
          name: 'recipt-single',
          meta: {
            title: '抢收款单'
          },
          component: () => import(/* webpackChunkName: "about" */ './views/recipt-single.vue')
        }
      ]
    },
    // {
    //   path: '/grab-single',
    //   name: 'grab-single',
    //   component: () => import(/* webpackChunkName: "about" */ './views/grab-single.vue')
    // },
    // {
    //   path: '/recipt-single',
    //   name: 'recipt-single',
    //   component: () => import(/* webpackChunkName: "about" */ './views/recipt-single.vue')
    // }
  ]
})
