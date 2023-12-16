import { createRouter, createWebHistory } from 'vue-router'
import UnOptimizedPage from '../views/UnOptimizedPage.vue'
import CLSOptimizedPage from '../views/CLSOptimizedPage.vue'
import LCPOptimizedPage from '../views/LCPOptimizedPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'unoptimized',
      component: UnOptimizedPage
    },
    {
      path: '/cls-fix',
      name: 'cls',
      component: CLSOptimizedPage
    },
    {
      path: '/lcp-fix',
      name: 'lcp',
      component: LCPOptimizedPage
    }
  ]
})

export default router
