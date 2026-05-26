import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/diseno-grafico',
      name: 'diseno-grafico',
      component: () => import('../views/PortfolioDiseno.vue')
    },
    {
      path: '/comunicacion-corporativa',
      name: 'comunicacion-corporativa',
      component: () => import('../views/PortfolioComunicacion.vue')
    },
    {
      path: '/consultoria-digital',
      name: 'consultoria-digital',
      component: () => import('../views/PortfolioConsultoria.vue')
    },
    {
      path: '/desarrollo-software',
      name: 'desarrollo-software',
      component: () => import('../views/PortfolioDesarrollo.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0, behavior: 'smooth' }
  }
})

export default router