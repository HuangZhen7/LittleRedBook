import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/fonts/iconfont.css'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$http = axios     // 将axios挂载在vue原型链上

router.beforeEach((to, from, next) => {
  store.state.token = localStorage.getItem('token');//获取本地存储的token
  console.log(to.meta.type)
  if (to.meta.type === 'login') {  // 判断该路由是否需要登录权限
    if (store.state.token !== null) {  // 通过vuex state获取当前的token是否存
      console.log(store.state.token)      
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
