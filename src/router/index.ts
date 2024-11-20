import { createRouter, createWebHistory } from 'vue-router'

import staticRoutes from '@/router/static'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL ?? '/'),
  routes: [...staticRoutes],
})

export default router
