import { createRouter, createWebHistory } from 'vue-router'
import UnOptimizedPage from '../views/UnOptimizedPage.vue'
import CLSOptimizedPage from '../views/CLSOptimizedPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UnOptimizedPage
    },
    {
      path: '/cls-fix',
      name: 'about',
      component: CLSOptimizedPage
    }
  ]
})

export default router
