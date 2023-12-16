import { createRouter, createWebHistory } from 'vue-router'
import UnOptimizedPage from '../views/UnOptimizedPage.vue'
import CLSOptimizedPage from '../views/CLSOptimizedPage.vue'
import LCPWebpOptimizedPage from '../views/LCPWebpOptimizedPage.vue'
import LCPResponsiveImageOptimizedPage from '../views/LCPResponsiveImageOptimizedPage.vue'
import LCPLazyImageOptimizedPage from '../views/LCPLazyImageOptimizedPage.vue'
import FIDUnOptimizedPage from '../views/FIDUnOptimized.vue'

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
      path: '/lcp-fix-webp',
      name: 'lcp-webp',
      component: LCPWebpOptimizedPage
    },
    {
      path: '/lcp-fix-responsive-images',
      name: 'lcp-responsive-img',
      component: LCPResponsiveImageOptimizedPage
    },
    {
      path: '/lcp-fix-lazy-images',
      name: 'lcp-lazy-img',
      component: LCPLazyImageOptimizedPage
    },
    {
      path: '/fid-unoptimized',
      name: 'fid-unoptimized',
      component: FIDUnOptimizedPage
    }
  ]
})

export default router
