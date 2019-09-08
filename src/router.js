import Vue from 'vue'
import Router from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }, {
      path: '/skills',
      name: 'skills',
      component: () => import('./views/Skills.vue')
    }, {
      path: '/kakeibo',
      name: 'kakeibo',
      component: () => import('./views/Kakeibo.vue')
    },
  ],
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  }
})
