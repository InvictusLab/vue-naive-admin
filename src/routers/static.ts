import type { RouteRecordRaw } from 'vue-router'

const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/homePage/HomePage.vue'),
    meta: {
      title: 'homePage',
    },
  },
  {
    path: '/workSpace',
    name: 'WorkSpace',
    component: () => import('@/views/workSpace/WorkSpace.vue'),
  },
]

export default staticRoutes
