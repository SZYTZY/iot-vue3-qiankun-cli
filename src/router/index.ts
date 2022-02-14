import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/childproject/dashboard',
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ '@/views/dashboard/Index.vue'
      ),
    name: 'Dashboard',
    meta: {
      title: 'dashboard',
      affix: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export function resetRouter() {
  ;(router as any).matcher = (router as any).matcher // reset router
}

export default router
