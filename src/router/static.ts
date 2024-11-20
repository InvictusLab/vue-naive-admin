import type { RouteRecordRaw } from 'vue-router'

const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage/HomePage.vue'),
    meta: {
      title: 'HomePage',
    },
  },
  {
    path: '/WorkSpace',
    name: 'WorkSpace',
    component: () => import('@/views/WorkSpace/WorkSpace.vue'),
  },
]

export default staticRoutes
