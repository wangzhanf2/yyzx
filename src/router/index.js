import { createRouter, createWebHashHistory } from 'vue-router'
import UserLogin from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/layout',
    name: 'FullLayout',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: 'user',
        name: 'UserManager',
        component: () => import('../views/User.vue')
      },
      {
        path: 'bed',
        name: 'BedManager',
        component: () => import('../views/Bed.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
