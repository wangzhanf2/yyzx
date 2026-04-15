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

router.beforeEach((to, from, next) => {
  // to：要去的路由
  // from：从哪来
  // next：放行/跳转

  const token = localStorage.getItem('userInfo')

  // 去登录页直接放行
  if (to.path === '/login' || to.path === '/') {
    return next()
  }

  // 没有 token 跳去登录
  if (!token) {
    return next('/')
  }

  // 正常放行
  next()
})

export default router
