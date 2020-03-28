import Vue from 'vue'
import Router from 'vue-router'
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
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/frame-data',
      name: 'frame-data',
      component: () => import(/* webpackChunkName: "framedata" */ './views/FrameData.vue')
    },
    {
      path: '/frame-data/:character',
      name: 'character-frame-data',
      component: () => import(/* webpackChunkName: "framedata" */ './views/FrameData.vue')
    }
  ]
})
