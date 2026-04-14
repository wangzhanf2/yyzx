import { createRouter, createWebHashHistory } from 'vue-router'
import UserLogin from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'UserLogin',
    component: UserLogin
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
