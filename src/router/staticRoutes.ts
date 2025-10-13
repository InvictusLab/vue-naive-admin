import type { RouteRecordRaw } from 'vue-router'

import { BasicLayoutIndex } from '@/layouts'

const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: BasicLayoutIndex,
    redirect: '/home',
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
        meta: { title: 'Home' },
      },
    ],
  },
]

export default staticRoutes
