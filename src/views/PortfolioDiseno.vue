<template>
  <!-- Backdrop -->
  <AppBackdrop />

  <!-- Back button -->
  <router-link to="/" class="back-btn" @click="closeModal">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
    Volver
  </router-link>

  <!-- Nav -->
  <nav :class="['nav', { hidden: navHidden }]">
    <div class="inner">
      <a href="/" class="brand">
        <span class="dot"></span>
        <span class="b1">Franklin</span>
        <span class="b2"> Studio</span>
      </a>
    </div>
  </nav>

  <!-- Hero -->
  <header class="hero">
    <div class="inner">
      <div>
        <span class="eyebrow">Portafolio · Diseño</span>
        <h1 class="display hero-display">
          <span class="line">
            <span class="white">Diseño </span><span class="gold typed-word">{{ typedText }}<span class="cursor"></span></span>
          </span>
        </h1>
        <p class="lead">
          Creamos identidades visuales únicas que comunican la esencia de cada marca.
          Desde el concepto inicial hasta la implementación final, cada proyecto es una
          historia visual cuidadosamente elaborada.
        </p>
      </div>
      <div class="hero-meta">
        <div class="glass hero-meta-item">
          <div>
            <small>Proyectos entregados</small>
            <strong>200+</strong>
          </div>
          <div class="accent-bar"></div>
        </div>
        <div class="glass hero-meta-item">
          <div>
            <small>Categorías</small>
            <strong>Digital · Impresión · Packaging · Branding</strong>
          </div>
          <div class="accent-bar"></div>
        </div>
        <div class="glass hero-meta-item">
          <div>
            <small>Años de experiencia</small>
            <strong>Desde 2022</strong>
          </div>
          <div class="accent-bar"></div>
        </div>
      </div>
    </div>
  </header>

  <!-- Projects Grid -->
  <section class="projects-section">
    <div class="container">
      <div class="projects-grid">
        <article
          v-for="p in allProjects" :key="p.id"
          :class="['project reveal', p.span]"
          @click="openModal(p)"
        >
          <div class="img-wrap">
            <img :src="p.image" :alt="p.title" loading="lazy" />
            <div class="year-badge">'{{ p.year.slice(-2) }}</div>
            <div class="tags">
              <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
            </div>
          </div>
          <div class="body">
            <div class="cat-row">
              <span class="cat">{{ p.category }}</span>
              <span class="client-sm">{{ p.client }}</span>
            </div>
            <h3>{{ p.title }}</h3>
            <p class="client">{{ p.subtitle }}</p>
            <p class="desc">{{ p.description }}</p>
            <span class="view">Ver proyecto
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </div>
        </article>
      </div>

      <!-- Stats -->
      <div class="stats-wrap">
        <div class="glass-gold stats reveal">
          <div class="stat"><div class="num">+50</div><div class="lbl">Proyectos</div></div>
          <div class="stat"><div class="num">+30</div><div class="lbl">Clientes</div></div>
          <div class="stat"><div class="num">5+</div><div class="lbl">Años</div></div>
          <div class="stat"><div class="num">100%</div><div class="lbl">Satisfacción</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="container">
      <div class="glass-gold cta-card reveal">
        <span class="eyebrow" style="margin-bottom:1.4rem">Hablemos</span>
        <h2 class="display h-cta">
          <span class="white">¿Listo para crear</span> <span class="gold">algo increíble?</span>
        </h2>
        <p class="lead">
          Trabajemos juntos para desarrollar la identidad visual que tu marca merece — desde el concepto hasta la implementación final.
        </p>
        <div class="cta-btns">
          <a href="https://api.whatsapp.com/send/?phone=%2B573223003840&text=Hola%2C%20quiero%20un%20proyecto%20de%20dise%C3%B1o%20gr%C3%A1fico" target="_blank" rel="noopener noreferrer" class="btn btn-gold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
            Iniciar proyecto
          </a>
          <a href="https://www.behance.net/gallery/220454209/Portfolio" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Ver más en Behance</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Signature -->
  <div class="signature">
    <div class="container">
      <div class="sig-line"><span class="h"></span><img src="/img/ico_Mesa de trabajo 1_Mesa de trabajo 1.png" alt="FP" class="sig-mark" /><span class="h right"></span></div>
      <h3>Franklin Peña</h3>
      <p>Concept Studio</p>
    </div>
  </div>

  <!-- Footer -->
  <footer class="foot">
    <div class="inner">
      <small>© 2026 Franklin Peña — Concept Studio</small>
      <nav>
        <a href="https://www.behance.net/gallery/220454209/Portfolio" target="_blank" rel="noopener noreferrer">Behance</a>
        <a href="https://www.instagram.com/franklinp.cs/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/in/franklin-pe%C3%B1a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
    </div>
  </footer>

  <!-- Modal -->
  <Transition name="modal-fade">
    <div v-if="modalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <div class="modal-head">
          <div>
            <h2>{{ activeProject?.title }}</h2>
            <div class="modal-client">{{ activeProject?.client }}</div>
          </div>
          <button class="close-btn" @click="closeModal" aria-label="Cerrar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="carousel">
            <div class="carousel-main">
              <img
                v-for="(src, i) in activeProject?.gallery" :key="i"
                :src="src" :alt="`${activeProject?.title} ${i+1}`"
                :class="{ active: i === imgIdx }"
              />
              <button v-if="activeProject?.gallery.length > 1" class="car-btn prev" @click="prevImage">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button v-if="activeProject?.gallery.length > 1" class="car-btn next" @click="nextImage">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
              <div v-if="activeProject?.gallery.length > 1" class="car-counter">
                {{ imgIdx + 1 }} / {{ activeProject?.gallery.length }}
              </div>
            </div>
            <div v-if="activeProject?.gallery.length > 1" class="thumbs">
              <button
                v-for="(src, i) in activeProject?.gallery" :key="i"
                :class="['thumb', { active: i === imgIdx }]"
                @click="imgIdx = i"
              >
                <img :src="src" :alt="`thumb ${i+1}`" />
              </button>
            </div>
          </div>

          <div class="details-grid">
            <div>
              <h4>Descripción</h4>
              <p class="desc">{{ activeProject?.fullDesc }}</p>
              <div class="modal-tags">
                <span v-for="t in activeProject?.tags" :key="t">{{ t }}</span>
              </div>
            </div>
            <div>
              <h4>Detalles</h4>
              <div class="info-list">
                <div class="info-row"><small>Categoría</small><strong>{{ activeProject?.category }}</strong></div>
                <div class="info-row"><small>Cliente</small><strong>{{ activeProject?.client }}</strong></div>
                <div class="info-row"><small>Año</small><strong>{{ activeProject?.year }}</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AppBackdrop from '../components/landing/AppBackdrop.vue';
import { imgCard, imgGallery } from '../utils/cloudinary.js';
import { useReveal } from '../composables/useReveal.js';

useReveal();

/* ── Typewriter ── */
const typedText = ref('');
const phrases = ['Gráfico', '& Branding', 'Editorial', '& Packaging'];
let phraseIdx = 0, charIdx = 0, isDeleting = false, typeTimer = null;
const tick = () => {
  const cur = phrases[phraseIdx];
  typedText.value = isDeleting ? cur.slice(0, charIdx - 1) : cur.slice(0, charIdx + 1);
  isDeleting ? charIdx-- : charIdx++;
  let delay = isDeleting ? 55 : 95;
  if (!isDeleting && charIdx === cur.length) { delay = 1800; isDeleting = true; }
  else if (isDeleting && charIdx === 0) { isDeleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; delay = 350; }
  typeTimer = setTimeout(tick, delay);
};

/* ── Nav hide on scroll ── */
const navHidden = ref(false);
let lastY = 0;
const onScroll = () => {
  const y = window.scrollY;
  navHidden.value = y > lastY && y > 80;
  lastY = y;
};
onMounted(() => { window.addEventListener('scroll', onScroll, { passive: true }); typeTimer = setTimeout(tick, 700); });
onUnmounted(() => { window.removeEventListener('scroll', onScroll); clearTimeout(typeTimer); });

/* ── Keyboard ── */
const onKey = (e) => {
  if (!modalOpen.value) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
};
onMounted(() => document.addEventListener('keydown', onKey));
onUnmounted(() => document.removeEventListener('keydown', onKey));

/* ── Data ── */
const allProjects = [
  {
    id: 1, span: 'span-half', category: 'Branding', year: '2024',
    title: 'Montessia', client: 'Montessia Cafe Gourmet',
    subtitle: 'Café gourmet · sistema visual completo',
    description: 'Identidad visual completa para café gourmet, incluyendo logo, paleta de colores, packaging y aplicaciones de marca.',
    fullDesc: 'Identidad visual completa para café gourmet, incluyendo logo, paleta de colores, packaging y aplicaciones de marca. Construimos un sistema visual coherente que eleva la percepción de calidad del producto.',
    tags: ['Identidad Visual', 'Branding', 'Gastronomía', 'Packaging'],
    image: imgCard('franklincs/montessia', '/img/Montessia.jpg'),
    gallery: [
      imgGallery('franklincs/montessia', '/img/Montessia.jpg'),
      imgGallery('franklincs/montessia-g1', '/img/Poryecto montessia linke_Mesa de trabajo 1-2.jpg'),
      imgGallery('franklincs/montessia-g2', '/img/Project 2.jpg'),
      imgGallery('franklincs/montessia-g3', '/img/Project 3.jpg'),
      imgGallery('franklincs/montessia-g4', '/img/Project 4.jpg'),
    ]
  },
  {
    id: 2, span: 'span-wide', category: 'Branding', year: '2026',
    title: 'CoRay Dev', client: 'CoRay Dev',
    subtitle: 'Comunidad de desarrolladores · identidad',
    description: 'Identificador visual y logo construyendo una identidad de marca sólida y memorable para una comunidad tech.',
    fullDesc: 'Diseño de identificador visual y logo para CoRay Dev, construyendo una identidad de marca sólida y memorable para una comunidad de desarrolladores.',
    tags: ['Identidad Visual', 'Logo', 'Branding', 'Tech'],
    image: imgCard('franklincs/coray-cover', '/img/Coray_Mesa de trabajo 1 copia 5.jpg'),
    gallery: [
      imgGallery('franklincs/coray-cover', '/img/Coray_Mesa de trabajo 1 copia 5.jpg'),
      imgGallery('franklincs/coray-g1', '/img/Coray_Mesa de trabajo 1 copia 6.jpg'),
      imgGallery('franklincs/coray-g2', '/img/Coray_Mesa de trabajo 1 copia 2.jpg'),
      imgGallery('franklincs/coray-g3', '/img/Coray_Mesa de trabajo 1 copia 4.jpg'),
    ]
  },
  {
    id: 3, span: 'span-third', category: 'Packaging', year: '2026',
    title: 'Mr Cream', client: 'Postres Nacionales',
    subtitle: 'Postres & cremas · rebranding',
    description: 'Rediseño completo de marca para empresa de postres, modernizando su imagen para atraer a un público joven.',
    fullDesc: 'Rediseño de marca para empresa de postres nacionales, enfocándose en modernizar su imagen y atraer a un público más joven.',
    tags: ['Rebranding', 'Food', 'Packaging'],
    image: imgCard('franklincs/mrcream-cover', '/img/Sin_título-1-05-01.jpg'),
    gallery: [
      imgGallery('franklincs/mrcream-cover', '/img/Sin_título-1-05-01.jpg'),
      imgGallery('franklincs/mrcream-g1', '/img/Mr_Cream_Logo.jpg'),
      imgGallery('franklincs/mrcream-g2', '/img/Sin título-1-05-04.jpg'),
      imgGallery('franklincs/mrcream-g3', '/img/Mr_Cream_Reticula.jpg'),
    ]
  },
  {
    id: 4, span: 'span-third', category: 'Digital', year: '2026',
    title: 'Social Media', client: 'Cam Network',
    subtitle: 'Cam Network · piezas digitales',
    description: 'Banners, posts y anuncios digitales para campañas de marketing y papelería corporativa.',
    fullDesc: 'Diseño de piezas para redes sociales y papelería corporativa, incluyendo banners, posts y anuncios digitales para campañas de marketing.',
    tags: ['Digital', 'Branding', 'Marketing'],
    image: imgCard('franklincs/social-cover', '/img/Portfolio Español 2025_Mesa de trabajo 1 copia 2_Mesa de trabajo 1 copia 20.jpg'),
    gallery: [
      imgGallery('franklincs/social-cover', '/img/Portfolio Español 2025_Mesa de trabajo 1 copia 2_Mesa de trabajo 1 copia 20.jpg'),
      imgGallery('franklincs/social-g1', '/img/Portfolio Español 2025_Mesa de trabajo 1 copia 2_Mesa de trabajo 1 copia 21.jpg'),
      imgGallery('franklincs/social-g2', '/img/Portfolio Español 2025_Mesa de trabajo 1 copia 2_Mesa de trabajo 1 copia 22.jpg'),
    ]
  },
  {
    id: 5, span: 'span-third', category: 'Branding', year: '2026',
    title: 'Los Socios', client: 'Los Socios',
    subtitle: 'Identidad & sistema visual',
    description: 'Identidad visual completa: identificador, paleta y sistema visual que refleja la esencia del negocio.',
    fullDesc: 'Desarrollo de identidad visual completa: identificador de marca, paleta de colores y sistema visual que refleja la esencia del negocio.',
    tags: ['Identidad Visual', 'Logo', 'Branding'],
    image: imgCard('franklincs/socios-cover', '/img/portada_socios.jpg'),
    gallery: [
      imgGallery('franklincs/socios-cover', '/img/portada_socios.jpg'),
      imgGallery('franklincs/socios-g1', '/img/Tarjetas_socios.jpg'),
      imgGallery('franklincs/socios-g2', '/img/socios-02.jpg'),
    ]
  },
  {
    id: 6, span: 'span-half', category: 'Redesign', year: '2025',
    title: 'Rebranding', client: 'Seguros',
    subtitle: 'Compañía de seguros · imagen corporativa',
    description: 'Rediseño completo de identidad visual, modernizando logo y materiales de marketing para mayor alcance.',
    fullDesc: 'Rediseño completo de identidad visual para una compañía de seguros, modernizando su logo y materiales de marketing.',
    tags: ['Editorial', 'Revista', 'Layout'],
    image: imgCard('franklincs/seguros-cover', '/img/Sin título-2-06.jpg'),
    gallery: [
      imgGallery('franklincs/seguros-cover', '/img/Sin título-2-06.jpg'),
      imgGallery('franklincs/seguros-g1', '/img/Sin título-2-01.jpg'),
      imgGallery('franklincs/seguros-g2', '/img/Sin título-2-03.jpg'),
      imgGallery('franklincs/seguros-g3', '/img/Sin título-2-04.jpg'),
      imgGallery('franklincs/seguros-g4', '/img/Sin título-2-05.jpg'),
    ]
  },
  {
    id: 7, span: 'span-half', category: 'Editorial', year: '2024',
    title: 'Montessia Print', client: 'Montessia',
    subtitle: 'Material editorial · papelería',
    description: 'Sistema editorial impreso para Montessia: menús, tarjetas, papelería corporativa con identidad consistente.',
    fullDesc: 'Sistema editorial impreso para Montessia: menús, tarjetas y papelería corporativa con identidad consistente.',
    tags: ['Editorial', 'Print', 'Papelería'],
    image: imgGallery('franklincs/montessia-g1', '/img/Poryecto montessia linke_Mesa de trabajo 1-2.jpg'),
    gallery: [
      imgGallery('franklincs/montessia-g1', '/img/Poryecto montessia linke_Mesa de trabajo 1-2.jpg'),
      imgGallery('franklincs/montessia-g2', '/img/Project 2.jpg'),
      imgGallery('franklincs/montessia-g3', '/img/Project 3.jpg'),
    ]
  },
];

/* ── Modal ── */
const modalOpen = ref(false);
const activeProject = ref(null);
const imgIdx = ref(0);

const openModal = (p) => {
  activeProject.value = p;
  imgIdx.value = 0;
  modalOpen.value = true;
  document.body.style.overflow = 'hidden';
};
const closeModal = () => {
  modalOpen.value = false;
  activeProject.value = null;
  document.body.style.overflow = '';
};
const nextImage = () => {
  if (!activeProject.value) return;
  imgIdx.value = (imgIdx.value + 1) % activeProject.value.gallery.length;
};
const prevImage = () => {
  if (!activeProject.value) return;
  imgIdx.value = (imgIdx.value - 1 + activeProject.value.gallery.length) % activeProject.value.gallery.length;
};

// The back button sits above the modal overlay, so it can be clicked while
// a project is open — make sure navigating away doesn't leave scroll locked.
onUnmounted(() => { document.body.style.overflow = ''; });
</script>

<style scoped>
/* ── Back button ── */
.back-btn {
  position: fixed; top: 14px; left: 24px; z-index: 200;
  display: inline-flex; align-items: center; gap: .5rem;
  padding: .55rem .95rem; border-radius: 999px;
  background: linear-gradient(135deg, #f5cf7a, #e6b34a 50%, #b8862c);
  color: #1a1207; font-weight: 700; font-size: .8rem; letter-spacing: .04em;
  box-shadow: 0 8px 24px rgba(230,179,74,.4), inset 0 1px 0 rgba(255,255,255,.35);
  transition: all .25s ease;
  pointer-events: auto;
}
.back-btn:hover { transform: translateX(-3px); box-shadow: 0 12px 32px rgba(230,179,74,.6), inset 0 1px 0 rgba(255,255,255,.4) }
.back-btn svg { transition: transform .25s ease }
.back-btn:hover svg { transform: translateX(-3px) }

/* ── Nav ── */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 50;
  background: rgba(8,8,8,.78);
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border-bottom: 1px solid rgba(230,179,74,.10);
  transition: transform .3s ease;
}
.nav.hidden { transform: translateY(-100%) }
.nav .inner {
  max-width: 1280px; margin: 0 auto;
  padding: 1rem 32px; display: flex; justify-content: center; align-items: center; gap: .5rem;
}
.brand { font-size: 1.25rem; font-weight: 600; letter-spacing: -.01em; display: flex; align-items: center; gap: .5rem }
.brand .dot { width: 9px; height: 9px; border-radius: 50%; background: linear-gradient(135deg,#f5cf7a,#a47a23); box-shadow: 0 0 14px var(--gold-glow) }
.brand .b1 { color: #fff }
.brand .b2 { color: var(--gold) }

/* ── Hero ── */
.hero { position: relative; padding: 9rem 0 6rem }
.hero .inner {
  max-width: 1280px; margin: 0 auto; padding: 0 32px;
  display: grid; grid-template-columns: 1.3fr 1fr; gap: 4rem; align-items: end;
}
.hero-display { font-size: clamp(2.2rem, 5.5vw, 4.8rem); margin-top: 1.5rem }
.hero-display .line { display: block; overflow: visible }
.hero-display .line > span { display: inline }
.typed-word { display: inline }
.cursor {
  display: inline-block; width: 3px; height: .85em;
  background: var(--gold); margin-left: 3px; vertical-align: middle;
  animation: blink .75s step-end infinite;
}
@keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }
.hero p.lead { margin-top: 1.5rem; font-size: 1.05rem; color: var(--fg-dim); line-height: 1.75 }
.hero-meta { display: grid; gap: 1.4rem }
.hero-meta-item { padding: 1.2rem 1.4rem; display: flex; justify-content: space-between; align-items: center }
.hero-meta-item small { display: block; color: var(--fg-mute); font-size: .7rem; letter-spacing: .18em; text-transform: uppercase; margin-bottom: .25rem }
.hero-meta-item strong { font-family: var(--f-display); font-size: 1.4rem; font-weight: 400; letter-spacing: .04em; color: #fff }
.accent-bar { width: 3px; height: 40px; background: linear-gradient(180deg, var(--gold-2), var(--gold-3)); border-radius: 2px; box-shadow: 0 0 8px var(--gold-glow) }

/* ── Projects grid ── */
.projects-section { padding: 4rem 0 6rem }
.projects-grid {
  display: grid; grid-template-columns: repeat(12, 1fr); gap: 1.4rem;
  grid-auto-rows: minmax(140px, auto);
}
.project {
  position: relative; border-radius: var(--r-lg); overflow: hidden;
  background: #0a0a0a; cursor: pointer;
  transition: transform .4s ease, box-shadow .4s ease;
  isolation: isolate; min-height: 380px;
  display: flex; flex-direction: column;
}
.project:hover { transform: translateY(-6px); box-shadow: 0 30px 70px rgba(0,0,0,.7), 0 0 0 1px rgba(230,179,74,.25) }
.img-wrap { position: relative; flex: 1; min-height: 240px; overflow: hidden }
.img-wrap img {
  position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
  transition: transform .8s ease, filter .4s ease;
  filter: saturate(.9) brightness(.85);
}
.project:hover .img-wrap img { transform: scale(1.07); filter: saturate(1.1) brightness(1) }
.img-wrap::after {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,.7) 100%);
  pointer-events: none;
}
.tags { position: absolute; left: 1rem; right: 1rem; bottom: 1rem; z-index: 2; display: flex; flex-wrap: wrap; gap: .35rem }
.tag { padding: .3rem .7rem; border-radius: 999px; background: rgba(0,0,0,.55); backdrop-filter: blur(8px); border: 1px solid rgba(230,179,74,.35); color: var(--gold); font-size: .68rem; font-weight: 600; letter-spacing: .06em }
.year-badge {
  position: absolute; top: 1rem; right: 1rem; z-index: 2;
  width: 54px; height: 54px; border-radius: 50%;
  background: rgba(0,0,0,.55); backdrop-filter: blur(10px); border: 1px solid rgba(230,179,74,.3);
  display: grid; place-items: center;
  font-family: var(--f-display); font-size: .9rem; color: var(--gold); line-height: 1; text-align: center; letter-spacing: .02em;
}
.body {
  padding: 1.4rem 1.6rem 1.6rem;
  background: rgba(255,255,255,.025);
  border-top: 1px solid rgba(255,255,255,.06);
  backdrop-filter: blur(10px);
}
.cat-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: .6rem }
.cat { color: var(--gold); font-size: .7rem; font-weight: 700; letter-spacing: .18em; text-transform: uppercase }
.client-sm { color: var(--fg-mute); font-size: .78rem }
.project h3 { font-family: var(--f-display); font-weight: 400; font-size: 1.6rem; letter-spacing: .02em; text-transform: uppercase; margin: 0 0 .3rem; color: #fff; transition: color .25s ease }
.project:hover h3 { color: var(--gold-2) }
.client { color: var(--fg-dim); font-size: .85rem; font-weight: 500; margin-bottom: .6rem }
.desc { color: var(--fg-mute); font-size: .88rem; line-height: 1.55; margin: 0 0 1.2rem; display: -webkit-box; -webkit-line-clamp: 2; line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden }
.view { display: inline-flex; align-items: center; gap: .5rem; color: var(--gold); font-size: .85rem; font-weight: 600; letter-spacing: .04em; transition: gap .25s ease }
.project:hover .view { gap: .85rem }

/* spans */
.span-tall  { grid-column: span 6; grid-row: span 2 }
.span-wide  { grid-column: span 6 }
.span-third { grid-column: span 4 }
.span-half  { grid-column: span 6 }

/* ── Stats ── */
.stats-wrap { margin: 5rem 0 2rem }
.stats { padding: 2.5rem 3rem; display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem }
.stat { position: relative; text-align: center }
.stat + .stat::before { content: ""; position: absolute; left: 0; top: 15%; height: 70%; width: 1px; background: linear-gradient(180deg, transparent, rgba(230,179,74,.35), transparent) }
.stat .num {
  font-family: var(--f-display); font-weight: 400;
  font-size: clamp(2.4rem, 4vw, 3.4rem); line-height: 1; letter-spacing: .01em;
  background: linear-gradient(180deg,#f5cf7a 0%,#e6b34a 60%,#a47a23 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.stat .lbl { color: #fff; font-size: .78rem; font-weight: 500; margin-top: .5rem; letter-spacing: .18em; text-transform: uppercase }

/* ── CTA ── */
.cta-section { padding: 4rem 0 6rem }
.cta-card {
  padding: 5rem 4rem; text-align: center; position: relative; overflow: hidden;
  background: radial-gradient(700px 400px at 50% 100%, rgba(230,179,74,.25), transparent 65%), var(--glass-bg-strong);
  display: flex; flex-direction: column; align-items: center;
}
.h-cta { font-size: clamp(2.4rem, 5vw, 4.4rem); margin-bottom: 1.5rem }
.cta-card .lead { margin: 0 auto 2.5rem; text-align: center; color: var(--fg-dim); font-size: 1.05rem; line-height: 1.75; max-width: 62ch }
.cta-btns { display: flex; flex-wrap: wrap; gap: .85rem; justify-content: center }

/* ── Signature ── */
.signature { text-align: center; padding: 4rem 0 1.5rem }
.sig-line { display: flex; align-items: center; gap: 1.5rem; justify-content: center; margin-bottom: .8rem }
.sig-line .h { width: 90px; height: 1px; background: linear-gradient(90deg,transparent,var(--gold)) }
.sig-line .h.right { background: linear-gradient(90deg,var(--gold),transparent) }
.sig-mark { width: 72px; height: 72px; object-fit: contain; filter: drop-shadow(0 0 14px rgba(230,179,74,.4)) }
.signature h3 { font-family: var(--f-display); font-size: 2rem; font-weight: 400; color: #fff; margin: .3rem 0 .2rem; letter-spacing: .02em }
.signature p { margin: 0; color: var(--gold); font-size: .85rem; letter-spacing: .22em; text-transform: uppercase }

/* ── Footer ── */
.foot { border-top: 1px solid rgba(255,255,255,.06); padding: 2rem 0; background: rgba(0,0,0,.4); margin-top: 2rem }
.foot .inner { max-width: 1280px; margin: 0 auto; padding: 0 32px; display: flex; flex-wrap: wrap; gap: 1.5rem; justify-content: space-between; align-items: center }
.foot nav { display: flex; gap: 1.4rem }
.foot nav a { font-size: .86rem; color: var(--fg-dim); transition: color .2s }
.foot nav a:hover { color: var(--gold) }
.foot small { font-size: .8rem; color: var(--fg-mute) }

/* ── Modal ── */
.modal-overlay {
  position: fixed; inset: 0; z-index: 100;
  background: rgba(0,0,0,.92);
  display: flex;
}
.modal {
  width: 100%; height: 100%;
  max-width: none; max-height: none;
  border-radius: 0; overflow: hidden;
  background: linear-gradient(180deg, rgba(14,11,7,.98), rgba(6,6,6,1));
  position: relative; display: flex; flex-direction: column;
}
.modal-head {
  padding: .9rem 1.6rem; flex-shrink: 0;
  display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  border-bottom: 1px solid rgba(255,255,255,.08);
  background: rgba(0,0,0,.3);
}
.modal-head h2 { font-family: var(--f-display); font-weight: 400; font-size: 1.4rem; letter-spacing: .04em; text-transform: uppercase; margin: 0; color: #fff }
.modal-client { color: var(--gold); font-size: .75rem; letter-spacing: .18em; text-transform: uppercase; margin-top: .15rem; font-weight: 600 }
.close-btn { width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); display: grid; place-items: center; color: #fff; transition: all .2s ease; flex-shrink: 0 }
.close-btn:hover { background: var(--gold); color: #1a1207; border-color: var(--gold); transform: rotate(90deg) }

/* fullscreen body: carousel left | details right */
.modal-body {
  flex: 1; overflow: hidden;
  display: flex; flex-direction: row;
  padding: 0;
}
.modal-body::-webkit-scrollbar { width: 6px }
.modal-body::-webkit-scrollbar-thumb { background: rgba(230,179,74,.3); border-radius: 4px }

.carousel {
  flex: 0 0 62%; display: flex; flex-direction: column;
  padding: 1.2rem 1.2rem 1.2rem 1.4rem;
  border-right: 1px solid rgba(255,255,255,.06);
  overflow: hidden;
}
.carousel-main { flex: 1; border-radius: 12px; overflow: hidden; background: #000; position: relative; border: 1px solid rgba(255,255,255,.05); min-height: 0 }
.carousel-main img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity .4s ease }
.carousel-main img.active { opacity: 1 }
.car-btn { position: absolute; top: 50%; transform: translateY(-50%); width: 44px; height: 44px; border-radius: 50%; background: rgba(0,0,0,.55); backdrop-filter: blur(8px); border: 1px solid rgba(230,179,74,.3); display: grid; place-items: center; color: #fff; transition: all .2s ease; z-index: 2 }
.car-btn:hover { background: var(--gold); color: #1a1207; border-color: var(--gold) }
.car-btn.prev { left: .8rem }
.car-btn.next { right: .8rem }
.car-counter { position: absolute; bottom: .8rem; left: 50%; transform: translateX(-50%); padding: .35rem .9rem; border-radius: 999px; background: rgba(0,0,0,.6); backdrop-filter: blur(8px); border: 1px solid rgba(230,179,74,.25); font-size: .75rem; color: var(--gold); font-weight: 600; letter-spacing: .1em }
.thumbs { display: flex; gap: .45rem; margin-top: .75rem; overflow-x: auto; padding-bottom: .25rem; flex-shrink: 0 }
.thumbs::-webkit-scrollbar { height: 4px }
.thumbs::-webkit-scrollbar-thumb { background: rgba(230,179,74,.3); border-radius: 2px }
.thumb { flex-shrink: 0; width: 68px; height: 68px; border-radius: 8px; overflow: hidden; border: 2px solid rgba(255,255,255,.08); transition: border-color .2s ease, transform .2s ease; cursor: pointer }
.thumb:hover { transform: translateY(-2px) }
.thumb.active { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(230,179,74,.15) }
.thumb img { width: 100%; height: 100%; object-fit: cover }

/* details panel */
.details-grid {
  flex: 1; overflow-y: auto;
  display: flex; flex-direction: column; gap: 1.4rem;
  padding: 1.4rem 1.6rem;
}
.details-grid::-webkit-scrollbar { width: 6px }
.details-grid::-webkit-scrollbar-thumb { background: rgba(230,179,74,.2); border-radius: 4px }
.details-grid h4 { font-family: var(--f-display); font-weight: 400; font-size: 1rem; text-transform: uppercase; letter-spacing: .06em; color: #fff; margin: 0 0 .8rem }
.details-grid p.desc { color: var(--fg-dim); font-size: .92rem; line-height: 1.7; margin: 0 0 1rem }
.modal-tags { display: flex; flex-wrap: wrap; gap: .4rem }
.modal-tags span { padding: .3rem .75rem; border-radius: 999px; background: rgba(230,179,74,.1); color: var(--gold); border: 1px solid rgba(230,179,74,.3); font-size: .7rem; font-weight: 600; letter-spacing: .06em }
.info-list { display: grid; gap: .75rem }
.info-row { padding: .75rem .9rem; border-radius: 10px; background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.06) }
.info-row small { color: var(--fg-mute); font-size: .68rem; letter-spacing: .18em; text-transform: uppercase; font-weight: 600; display: block; margin-bottom: .2rem }
.info-row strong { font-family: var(--f-display); font-weight: 400; font-size: 1rem; color: #fff; letter-spacing: .02em }

/* ── Modal transition ── */
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity .25s ease }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0 }

/* ── Responsive ── */
@media (max-width: 1080px) {
  .hero .inner { grid-template-columns: 1fr; gap: 2.5rem; align-items: start }
  .span-tall, .span-wide, .span-third, .span-half { grid-column: span 6 }
  .stats { grid-template-columns: repeat(2,1fr); gap: 2rem }
  .stat + .stat::before { display: none }
  .modal-body { flex-direction: column }
  .carousel { flex: 0 0 50%; border-right: none; border-bottom: 1px solid rgba(255,255,255,.06) }
}
@media (max-width: 720px) {
  .back-btn { padding: .5rem .8rem; font-size: .75rem; top: 10px; left: 16px }
  .hero { padding: 7rem 0 4rem }
  .hero .inner { padding: 0 16px }
  .hero-meta-item { padding: .9rem 1rem }
  .hero-meta-item strong { font-size: 1rem }
  .span-tall, .span-wide, .span-third, .span-half { grid-column: span 12 }
  .stats { grid-template-columns: 1fr 1fr; padding: 1.8rem; gap: 1.2rem }
  .cta-card { padding: 3rem 1.5rem }
  .modal-head { padding: .75rem 1rem }
  .modal-head h2 { font-size: 1.1rem }
  .carousel { padding: .8rem }
  .details-grid { padding: 1rem }
}
@media (max-width: 480px) {
  .hero-display { font-size: clamp(1.8rem, 7.5vw, 2.8rem) }
  .hero-meta-item strong { font-size: .88rem; word-break: break-word }
  .hero-meta-item small { font-size: .65rem }
}
</style>
