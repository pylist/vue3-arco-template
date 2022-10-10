import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

import Layout from "@/layout/Layout.vue"

const routes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/dashboard/workplace',
        component: () => import('@/views/Home/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router