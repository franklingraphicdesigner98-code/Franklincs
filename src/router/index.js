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
      path: '/identidad-marca',
      name: 'identidad-marca',
      component: () => import('../views/IdentidadMarca.vue')
    },
    {
      path: '/diseno-grafico',
      name: 'diseno-grafico',
      component: () => import('../views/PortfolioDiseno.vue')
    },
    {
      path: '/diseno-empaques',
      name: 'diseno-empaques',
      component: () => import('../views/DisenoEmpaques.vue')
    },
    {
      path: '/impresion-3d',
      name: 'impresion-3d',
      component: () => import('../views/Impresion3D.vue')
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

// Safety net: some views lock body scroll while a modal is open
// (document.body.style.overflow = 'hidden'). If the user navigates away
// without closing the modal (e.g. clicking the fixed "Volver" button,
// which sits above the modal overlay), that lock would otherwise persist
// forever and freeze scrolling on every page after.
router.afterEach(() => {
  document.body.style.overflow = ''
})

export default router