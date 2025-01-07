import type { RouteRecordRaw } from 'vue-router'

import { Layout } from '@/layouts'

const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
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
    ],
  },
]

export default staticRoutes
