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
            title: '抢单',
            type: 'app'
          },
          component: () => import(/* webpackChunkName: "about" */ './views/grab-single.vue')
        },
        {
          path: 'recipt-single',
          name: 'recipt-single',
          meta: {
            title: '抢收款单',
            type: 'app'
          },
          component: () => import(/* webpackChunkName: "about" */ './views/recipt-single.vue')
        },
        {
          path: 'gathering-single',
          name: 'gathering-single',
          meta: {
            title: '抢付款单',
            type: 'app'
          },
          component: () => import(/* webpackChunkName: "about" */ './views/gathering-single.vue')
        },
        {
          path: 'mine',
          name: 'mine',
          meta: {
            title: '个人中心'
          },
          component: () => import(/* webpackChunkName: "about" */ './views/mine.vue')
        }
      ]
    },
    {
      path: '/account',
      name: 'account',
      component: () => import(/* webpackChunkName: "about" */ './components/PublicUserInfo.vue'),
      children: [
        {
          path: 'user-info',
          name: 'user-info',
          meta: {
            title: '个人信息'
          },
          component: () => import(/* webpackChunkName: "about" */ './views/userInfo.vue')
        },
        {
          path: 'card-info',
          name: 'cardInfo',
          meta: {
            title: '银行卡信息'
          },
          component: () => import(/* webpackChunkName: "about" */ './views/cardInfo.vue')
        },
        {
          path: 'withdraw-deposit',
          name: 'withdraw-deposit',
          meta: {
            title: '提现'
          },
          component: () => import(/* webpackChunkName: "about" */ './views/withdrawDeposit.vue')
        },
        {
          path: 'grab-single-log',
          name: 'grab-single-log',
          meta: {
            title: '抢单记录'
          },
          component: () => import(/* webpackChunkName: "about" */ './views/grabSingleLog.vue')
        },
        {
          path: 'charge-log',
          name: 'charge-log',
          meta: {
            title: '充值记录'
          },
          component: () => import(/* webpackChunkName: "about" */ './views/chargeLog.vue')
        },
        {
          path: 'withdraw-weposit-log',
          name: 'withdraw-weposit-log',
          meta: {
            title: '提现记录'
          },
          component: () => import(/* webpackChunkName: "about" */ './views/withdrawDepositLog.vue')
        }
      ]
    }
  ]
})
