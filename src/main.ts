import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './reuqest'
import util from '@/util'
import { Row, Col, Field, Tabbar, TabbarItem} from 'vant';
import 'vant/lib/index.css'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies).use(Row).use(Col).use(Field).use(Tabbar).use(TabbarItem);
Vue.config.productionTip = false
Vue.prototype.util = util
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
