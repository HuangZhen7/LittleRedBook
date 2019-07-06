import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/pages/home'
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
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/home/find',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/find',
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
  ]
})
