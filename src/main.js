import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import axios from 'axios'

import './assets/fonts/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios     // 将axios挂载在vue原型链上

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
