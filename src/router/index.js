import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/pages/Login'
import Home from '@/components/pages/home'
import News from '@/components/pages/news'
import User from '@/components/pages/user'
import follow from '@/components/follow'
import find from '@/components/find'
import nearby from '@/components/nearby'
import Store from '@/components/pages/store'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   redirect: to => {
    //     setTimeout(() => {return '/home'},3000)
    //   }
    // },
    {
      path: '/login',//登录页
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        type: 'login'
        // requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      // redirect: '/home/find',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // redirect: '/home/find',
      children: [
        {
          path: 'find',
          name: 'find',
          component: find
        },
        {
          path: 'follow',
          name: 'follow',
          component: follow
        },
        {
          path: 'nearby',
          name: 'nearby',
          component: nearby
        },
      ]
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
  ]
})
