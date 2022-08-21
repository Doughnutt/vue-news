import Vue from 'vue'
import VueRouter from 'vue-router'

import userLogin from '@/views/Login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: userLogin
  }
]

const router = new VueRouter({
  routes
})

export default router
