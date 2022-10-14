import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/Layout.vue'
import { useUserStore } from '@/store'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/dashboard/workplace',
        component: () => import('@/views/Home/index.vue')
      },
      {
        path: '/dashboard/monitor',
        component: () => import('@/views/Home/index.vue')
      }
    ]
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/Login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const isAuthenticated = () => {
  const userStore = useUserStore()
  if (userStore.getToken()) {
    return true
  }
  return false
}

router.beforeEach(async (to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated()) next({ name: 'Login' })
  else next()
})

export default router
