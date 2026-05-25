import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PortfolioDiseno from '../views/PortfolioDiseno.vue'
import PortfolioComunicacion from '../views/PortfolioComunicacion.vue'
import PortfolioConsultoria from '../views/PortfolioConsultoria.vue'
import PortfolioDesarrollo from '../views/PortfolioDesarrollo.vue' // ✅ nombre único

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
      component: PortfolioDiseno
    },
    {
      path: '/comunicacion-corporativa',
      name: 'comunicacion-corporativa',
      component: PortfolioComunicacion
    },
    {
      path: '/consultoria-digital',
      name: 'consultoria-digital',
      component: PortfolioConsultoria
    },
    {
      path: '/desarrollo-software',       // ✅ ruta nueva
      name: 'desarrollo-software',
      component: PortfolioDesarrollo
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router