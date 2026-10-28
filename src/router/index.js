import Home from '../views/Home.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Franklin Peña — Concept Studio | Branding, diseño y desarrollo a medida',
      description: 'Diseño, tecnología y sistemas que hacen que tu marca trabaje por ti — en todos los canales. Branding, diseño gráfico, empaques, impresión 3D, desarrollo web e IA — desde Colombia, en remoto para clientes de todo el mundo.'
    }
  },
  {
    // Muestra los casos de estudio de identidad de marca (PortfolioDiseno.vue):
    // Montessia, CoRay Dev, Los Socios, etc.
    path: '/identidad-marca',
    name: 'identidad-marca',
    component: () => import('../views/PortfolioDiseno.vue'),
    meta: {
      title: 'Identidad de Marca | Franklin Peña Concept Studio',
      description: 'Identidades visuales únicas que comunican la esencia de cada marca, desde el concepto inicial hasta la implementación final.'
    }
  },
  {
    // Muestra las piezas de diseño gráfico (IdentidadMarca.vue):
    // redes sociales, menús, papelería, señalética, gran formato, etc.
    path: '/diseno-grafico',
    name: 'diseno-grafico',
    component: () => import('../views/IdentidadMarca.vue'),
    meta: {
      title: 'Diseño Gráfico | Franklin Peña Concept Studio',
      description: 'Piezas para redes sociales, menús, papelería, señalética y material impreso que comunican con intención y hacen que tu negocio se vea profesional.'
    }
  },
  {
    path: '/diseno-empaques',
    name: 'diseno-empaques',
    component: () => import('../views/DisenoEmpaques.vue'),
    meta: {
      title: 'Diseño de Empaques | Franklin Peña Concept Studio',
      description: 'Packaging que protege, comunica y vende — desde la estructura y el troquel hasta el acabado gráfico final.'
    }
  },
  {
    path: '/impresion-3d',
    name: 'impresion-3d',
    component: () => import('../views/Impresion3D.vue'),
    meta: {
      title: 'Diseño e Impresión 3D | Franklin Peña Concept Studio',
      description: 'Modelamos, prototipamos e imprimimos piezas a medida — desde validaciones rápidas de diseño hasta producción de series cortas.'
    }
  },
  {
    path: '/comunicacion-corporativa',
    name: 'comunicacion-corporativa',
    component: () => import('../views/PortfolioComunicacion.vue'),
    meta: {
      title: 'Comunicación Corporativa y Marketing Digital | Franklin Peña Concept Studio',
      description: 'Estrategias de comunicación efectivas que fortalecen tu presencia corporativa y conectan con tu audiencia.'
    }
  },
  {
    path: '/consultoria-digital',
    name: 'consultoria-digital',
    component: () => import('../views/PortfolioConsultoria.vue'),
    meta: {
      title: 'Consultoría Digital | Franklin Peña Concept Studio',
      description: 'Estrategias digitales que transforman negocios y optimizan procesos, con decisiones basadas en datos.'
    }
  },
  {
    path: '/ia-creativa',
    name: 'ia-creativa',
    component: () => import('../views/IaCreativa.vue'),
    meta: {
      title: 'Dirección de IA para tu marca | Franklin Peña Concept Studio',
      description: 'La IA no reemplaza tu marca: bien dirigida, la hace trabajar más rápido y verse más profesional. Diseño y contenido, redes, atención al cliente, procesos, agentes automatizados, datos y capacitación — en remoto.'
    }
  },
  {
    path: '/desarrollo-software',
    name: 'desarrollo-software',
    component: () => import('../views/PortfolioDesarrollo.vue'),
    meta: {
      title: 'Desarrollo de Software a Medida | Franklin Peña Concept Studio',
      description: 'Productos digitales a medida, desde sitios web hasta plataformas completas — código limpio y resultados que impulsan tu negocio.'
    }
  }
]

export function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) return savedPosition
  // Enlaces a una sección (p. ej. "/#contacto" desde el menú móvil): esperar a que
  // la página se pinte y bajar hasta ella, dejando espacio para la barra flotante.
  if (to.hash) {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ el: to.hash, top: 96, behavior: 'smooth' }), from.path === to.path ? 0 : 350)
    })
  }
  return { top: 0, behavior: 'smooth' }
}
