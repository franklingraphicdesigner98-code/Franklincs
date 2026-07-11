<template>
  <section class="s especialidades" id="servicios">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow reveal">¿Qué hacemos?</span>
        <h2 class="display reveal reveal-1" style="font-size:clamp(2rem, 4vw, 3rem)">
          <span class="white">NUESTRAS</span><br /><span class="gold">ESPECIALIDADES</span>
        </h2>
        <p class="lead reveal reveal-2">
          Integramos branding, diseño, tecnología y fabricación digital para construir marcas con impacto.
        </p>
      </div>

      <div class="spec-grid">
        <router-link
          v-for="(s, i) in services" :key="s.id"
          :to="s.link"
          :class="['glass spec-card reveal spec-card-link', i > 0 && `reveal-${i}`]"
        >
          <div class="card-image">
            <img :src="s.image" :alt="s.alt" />
          </div>
          <div class="card-content">
            <h3>{{ s.titleLine1 }}<br/>{{ s.titleLine2 }}</h3>
            <div class="card-includes">
              <span class="includes-label">Incluye:</span>
              <span class="includes-list">{{ s.includes.join(' · ') }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 1, link: '/identidad-marca', image: '/img/Portada_identidad.png', alt: 'Identidad de Marca',
    titleLine1: 'IDENTIDAD', titleLine2: 'DE MARCA',
    includes: ['Logotipo', 'Papelería corporativa', 'Menús y cartas', 'Señalética y ambientación de locales']
  },
  {
    id: 2, link: '/diseno-grafico', image: '/img/Portada-diseño.jpg', alt: 'Diseño Gráfico',
    titleLine1: 'DISEÑO', titleLine2: 'GRÁFICO',
    includes: ['Flyers y volantes', 'Piezas para redes sociales', 'Publicidad impresa', 'Piezas digitales']
  },
  {
    id: 3, link: '/diseno-empaques', image: '/img/Project 2.jpg', alt: 'Diseño de Empaques',
    titleLine1: 'DISEÑO DE', titleLine2: 'EMPAQUES',
    includes: ['Cajas y etiquetas', 'Bolsas y empaques', 'Línea de producto']
  },
  {
    id: 4, link: '/impresion-3d', image: '/img/Impresion 3d.jpg', alt: 'Diseño e Impresión 3D',
    titleLine1: 'DISEÑO E', titleLine2: 'IMPRESIÓN 3D',
    includes: ['Modelado 3D', 'Prototipos', 'Merchandising y piezas']
  },
  {
    id: 5, link: '/desarrollo-software', image: '/img/portada_Paginas web.jpg', alt: 'Páginas Web y Sistemas',
    titleLine1: 'PÁGINAS WEB', titleLine2: 'Y SISTEMAS',
    includes: ['Sitios web', 'Tiendas online', 'Sistemas a medida', 'Mantenimiento']
  }
];
</script>

<style scoped>
.especialidades { padding: 4rem 0 }

.especialidades .section-head { margin-bottom: 2.5rem }

.spec-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.spec-card {
  padding: 0;
  position: relative;
  overflow: hidden;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  transition: all 0.35s ease;
  border: 1px solid rgba(230,179,74,.2);
  border-radius: 24px;
  background: rgba(8,8,8,.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.spec-card-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.spec-card:hover {
  transform: translateY(-10px);
  border-color: rgba(230,179,74,.45);
  background: rgba(8,8,8,.65);
  box-shadow: 0 25px 60px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.06);
}

.spec-card::before {
  content: "";
  position: absolute;
  right: -100px;
  top: -100px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(230,179,74,.15), transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
}

.spec-card:hover::before {
  opacity: 1;
}

.spec-card > * {
  position: relative;
  z-index: 1;
}

.card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,.25);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.4s ease;
}

.spec-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem 2rem 2.2rem;
}

.spec-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #fff;
  margin: 0 0 0.8rem;
  line-height: 1.3;
  text-transform: uppercase;
}

.card-content p {
  font-size: 0.95rem;
  color: rgba(255,255,255,.8);
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
}

.card-includes {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding-top: 0.9rem;
  margin-top: 0.2rem;
  border-top: 1px solid rgba(230,179,74,.15);
}

.includes-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold);
}

.includes-list {
  font-size: 0.82rem;
  color: rgba(255,255,255,.6);
  line-height: 1.55;
}

.card-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid rgba(230,179,74,.3);
  color: var(--gold);
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
}

.card-link:hover {
  border-color: var(--gold);
  background: rgba(230,179,74,.1);
  transform: translateX(4px);
}

.card-link svg {
  stroke: currentColor;
  stroke-width: 2.5;
}

/* Grid layout: 3 columns top, 2 bottom center */
.spec-card:nth-child(4) {
  grid-column: 1 / 2;
}

.spec-card:nth-child(5) {
  grid-column: 2 / 3;
}

@media (max-width: 1100px) {
  .spec-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .spec-card:nth-child(4) {
    grid-column: auto;
  }

  .spec-card:nth-child(5) {
    grid-column: auto;
  }
}

@media (max-width: 720px) {
  .especialidades { padding: 3rem 0 }

  .especialidades .section-head { margin-bottom: 2rem }

  .spec-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .spec-card {
    min-height: 380px;
    grid-template-rows: 1fr 1fr;
  }

  .card-content {
    padding: 1.8rem;
  }

  .spec-card h3 {
    font-size: 1.1rem;
    margin-bottom: 0.7rem;
  }

  .card-content p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .includes-list {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .spec-card {
    min-height: 360px;
    grid-template-rows: 1fr 1fr;
  }

  .card-content {
    padding: 1.5rem;
  }

  .spec-card h3 {
    font-size: 1rem;
    margin-bottom: 0.6rem;
  }

  .card-content p {
    font-size: 0.88rem;
    margin-bottom: 0.8rem;
  }

  .card-includes {
    padding-top: 0.7rem;
    margin-top: 0.15rem;
  }
}
</style>
