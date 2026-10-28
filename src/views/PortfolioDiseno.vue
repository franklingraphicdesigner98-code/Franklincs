<template>
  <!-- Backdrop -->
  <AppBackdrop />
  <div class="page-bg" aria-hidden="true"></div>

  <!-- Back button -->
  <router-link v-show="!modalOpen" to="/" class="back-btn" @click="closeModal">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
    {{ t('nav.volver') }}
  </router-link>

  <!-- Nav -->
  <nav :class="['nav', { hidden: navHidden }]">
    <div class="inner">
      <a href="/" class="brand">
        <span class="dot"></span>
        <span class="b1">Franklin</span>
        <span class="b2"> Studio</span>
      </a>
      <LanguageSwitcher class="page-lang" />
    </div>
  </nav>

  <!-- Hero -->
  <header class="hero">
    <div class="inner">
      <span class="eyebrow">{{ t('disenoGrafico.eyebrow') }}</span>
      <h1 class="display hero-display">
        <span class="line">
          <span class="white">{{ t('disenoGrafico.titleWhite') }}</span><span class="gold typed-word">{{ typedText }}<span class="cursor"></span></span>
        </span>
      </h1>
      <p class="hero-sub">{{ t('disenoGrafico.subtitle') }}</p>
    </div>
  </header>

  <!-- Projects Grid -->
  <section class="projects-section">
    <div class="container">
      <GlassGrid>
        <GlassCard
          v-for="p in allProjects" :key="p.id"
          class="reveal"
          :image="p.image"
          :category="`${p.category} · '${p.year.slice(-2)}`"
          :title="t(`disenoGrafico.projects.${p.key}.title`)"
          :description="t(`disenoGrafico.projects.${p.key}.subtitle`)"
          :cta="t('disenoGrafico.verProyecto')"
          @click="openModal(p)"
        />
      </GlassGrid>

    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="container">
      <div class="glass-gold cta-card reveal">
        <span class="eyebrow" style="margin-bottom:1.4rem">{{ t('disenoGrafico.ctaEyebrow') }}</span>
        <h2 class="display h-cta">
          <span class="white">{{ t('disenoGrafico.ctaTitleWhite') }}</span> <span class="gold">{{ t('disenoGrafico.ctaTitleGold') }}</span>
        </h2>
        <p class="lead">
          {{ t('disenoGrafico.ctaLead') }}
        </p>
        <div class="cta-btns">
          <a href="https://api.whatsapp.com/send/?phone=%2B573223003840&text=Hola%2C%20quiero%20un%20proyecto%20de%20dise%C3%B1o%20gr%C3%A1fico" target="_blank" rel="noopener noreferrer" class="btn btn-gold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
            {{ t('cta.whatsapp') }}
          </a>
          <a href="https://www.behance.net/gallery/220454209/Portfolio" target="_blank" rel="noopener noreferrer" class="btn btn-outline">{{ t('disenoGrafico.verBehance') }}</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Signature -->
  <div class="signature">
    <div class="container">
      <div class="sig-line"><span class="h"></span><img src="/img/ico_Mesa de trabajo 1_Mesa de trabajo 1.png" alt="FP" class="sig-mark" /><span class="h right"></span></div>
      <h3>{{ t('signature.name') }}</h3>
      <p>{{ t('signature.role') }}</p>
    </div>
  </div>

  <!-- Footer -->
  <footer class="foot">
    <div class="inner">
      <small>{{ t('footer.copyrightShort') }}</small>
      <nav>
        <a href="https://www.behance.net/gallery/220454209/Portfolio" target="_blank" rel="noopener noreferrer">Behance</a>
        <a href="https://www.instagram.com/yeffrey_fr/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/in/franklin-pe%C3%B1a-832873252/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.tiktok.com/@franklin_designer" target="_blank" rel="noopener noreferrer">TikTok</a>
      </nav>
    </div>
  </footer>

  <!-- Modal -->
  <Transition name="modal-fade">
    <div v-if="modalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <div class="modal-head">
          <div>
            <h2>{{ activeProject ? t(`disenoGrafico.projects.${activeProject.key}.title`) : '' }}</h2>
            <div class="modal-client">{{ activeProject?.client }}</div>
          </div>
          <button class="close-btn" @click="closeModal" :aria-label="locale === 'en' ? 'Close' : 'Cerrar'">
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
              <h4>{{ t('disenoGrafico.descripcion') }}</h4>
              <p class="desc">{{ activeProject ? t(`disenoGrafico.projects.${activeProject.key}.fullDesc`) : '' }}</p>
              <div class="modal-tags">
                <span v-for="tag in activeProject?.tags" :key="tag">{{ tag }}</span>
              </div>
              <a
                v-if="activeProject?.instagram"
                :href="activeProject.instagram"
                target="_blank" rel="noopener noreferrer"
                class="ig-link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
                {{ t('identidadMarca.verEnInstagram') }}
              </a>
            </div>
            <div>
              <h4>{{ t('disenoGrafico.detalles') }}</h4>
              <div class="info-list">
                <div class="info-row"><small>{{ t('disenoGrafico.categoria') }}</small><strong>{{ activeProject?.category }}</strong></div>
                <div class="info-row"><small>{{ t('disenoGrafico.cliente') }}</small><strong>{{ activeProject?.client }}</strong></div>
                <div class="info-row"><small>{{ t('disenoGrafico.anio') }}</small><strong>{{ activeProject?.year }}</strong></div>
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
import { useI18n } from 'vue-i18n';
import AppBackdrop from '../components/landing/AppBackdrop.vue';
import LanguageSwitcher from '../components/landing/LanguageSwitcher.vue';
import GlassCard from '../components/ui/GlassCard.vue';
import GlassGrid from '../components/ui/GlassGrid.vue';
import { imgCard, imgGallery } from '../utils/cloudinary.js';
import { useReveal } from '../composables/useReveal.js';

useReveal();
const { t, locale } = useI18n();

/* ── Typewriter ── */
const typedText = ref('');
const phrases = ['Visual', 'de Marca', '& Branding', 'Completa'];
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
    id: 1, key: 'montessia', span: 'span-half', category: 'Branding', year: '2024',
    client: 'Montessia Cafe Gourmet',
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
    id: 2, key: 'coray', span: 'span-wide', category: 'Branding', year: '2026',
    client: 'CoRay Dev',
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
    id: 3, key: 'mrcream', span: 'span-third', category: 'Packaging', year: '2026',
    client: 'Postres Nacionales',
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
    id: 4, key: 'social', span: 'span-third', category: 'Digital', year: '2026',
    client: 'Cam Network',
    tags: ['Digital', 'Branding', 'Marketing'],
    image: imgCard('franklincs/social-cover', '/img/Portfolio Español 2025_Mesa de trabajo 1 copia 2_Mesa de trabajo 1 copia 20.jpg'),
    gallery: [
      imgGallery('franklincs/social-cover', '/img/Portfolio Español 2025_Mesa de trabajo 1 copia 2_Mesa de trabajo 1 copia 20.jpg'),
      imgGallery('franklincs/social-g1', '/img/Portfolio Español 2025_Mesa de trabajo 1 copia 2_Mesa de trabajo 1 copia 21.jpg'),
      imgGallery('franklincs/social-g2', '/img/Portfolio Español 2025_Mesa de trabajo 1 copia 2_Mesa de trabajo 1 copia 22.jpg'),
    ]
  },
  {
    id: 5, key: 'socios', span: 'span-third', category: 'Branding', year: '2026',
    client: 'Los Socios',
    tags: ['Identidad Visual', 'Logo', 'Branding'],
    instagram: 'https://www.instagram.com/reel/DXSfA-0jmPG/',
    image: imgCard('franklincs/socios-cover', '/img/portada_socios.jpg'),
    gallery: [
      imgGallery('franklincs/socios-cover', '/img/portada_socios.jpg'),
      '/img/logo_socios.png',
      imgGallery('franklincs/socios-g1', '/img/Tarjetas_socios.jpg'),
      imgGallery('franklincs/socios-g2', '/img/socios-02.jpg'),
    ]
  },
  {
    id: 6, key: 'seguros', span: 'span-half', category: 'Redesign', year: '2025',
    client: 'Seguros',
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
/* ── Fondo: imagen de las manos (la misma del Hero de inicio), oscurecida ── */
.page-bg {
  position: fixed; inset: 0; z-index: -2; pointer-events: none;
  background:
    linear-gradient(135deg, rgba(0,0,0,.78) 0%, rgba(0,0,0,.6) 50%, rgba(0,0,0,.78) 100%),
    url('/img/hero-hands.jpg') center / cover no-repeat;
}

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
  /* Glassmorphism: vidrio ahumado con canto dorado */
  background: rgba(12,10,6,.4);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  border-bottom: 1px solid rgba(245,207,122,.3);
  box-shadow: 0 8px 32px rgba(0,0,0,.4), inset 0 -1px 0 rgba(255,240,210,.06);
  transition: transform .3s ease;
}
/* Línea de luz dorada bajo la barra */
.nav::after {
  content: ""; position: absolute; left: 35%; right: 35%; bottom: -1px; height: 2px;
  pointer-events: none; border-radius: 2px;
  background: linear-gradient(90deg, transparent, #f5cf7a, transparent);
  box-shadow: 0 0 16px 3px rgba(230,179,74,.45);
}
.nav.hidden { transform: translateY(-100%) }
.nav .inner {
  position: relative;
  max-width: 1280px; margin: 0 auto;
  padding: 1rem 32px; display: flex; justify-content: center; align-items: center; gap: .5rem;
}
.page-lang { position: absolute; right: 32px; top: 50%; transform: translateY(-50%) }
.brand { font-size: 1.25rem; font-weight: 600; letter-spacing: -.01em; display: flex; align-items: center; gap: .5rem }
.brand .dot { width: 9px; height: 9px; border-radius: 50%; background: linear-gradient(135deg,#f5cf7a,#a47a23); box-shadow: 0 0 14px var(--gold-glow) }
.brand .b1 { color: #fff }
.brand .b2 { color: var(--gold) }

/* ── Hero ── */
/* Hero mínimo y compacto: el grid de proyectos queda visible sin scroll */
.hero { position: relative; padding: 7rem 0 1.5rem }
.hero .inner {
  max-width: 1280px; margin: 0 auto; padding: 0 32px;
}
.hero-display { font-size: clamp(2rem, 4.5vw, 3.6rem); margin-top: 1rem }
.hero-display .line { display: block; overflow: visible }
.hero-display .line > span { display: inline }
.typed-word { display: inline }
.cursor {
  display: inline-block; width: 3px; height: .85em;
  background: var(--gold); margin-left: 3px; vertical-align: middle;
  animation: blink .75s step-end infinite;
}
@keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }
.hero-sub { margin: .8rem 0 0; font-size: 1.05rem; color: var(--fg-dim); line-height: 1.5 }

/* ── Projects grid ── */
.projects-section { padding: 1.5rem 0 6rem }
/* ── CTA ── */
.cta-section { padding: 4rem 0 6rem }
.cta-card {
  padding: 5rem 4rem; text-align: center; position: relative; overflow: hidden;
  /* Glassmorphism: vidrio ahumado con resplandor dorado */
  background:
    radial-gradient(ellipse 40% 40% at 0% 0%, rgba(230,179,74,.16), transparent 70%),
    radial-gradient(700px 400px at 50% 100%, rgba(230,179,74,.2), transparent 65%),
    rgba(12,10,6,.35);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  box-shadow: 0 25px 60px rgba(0,0,0,.5), 0 0 50px rgba(230,179,74,.08), inset 0 1px 0 rgba(255,240,210,.18);
  display: flex; flex-direction: column; align-items: center;
}
/* Destello de luz dorada en el borde inferior */
.cta-card::after {
  content: ""; position: absolute; left: 30%; right: 30%; bottom: 0; height: 2px;
  pointer-events: none; border-radius: 2px;
  background: linear-gradient(90deg, transparent, #f5cf7a, transparent);
  box-shadow: 0 0 18px 3px rgba(230,179,74,.45);
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
.ig-link {
  display: inline-flex; align-items: center; gap: .5rem; margin-top: 1.1rem;
  padding: .55rem 1.1rem; border-radius: 999px;
  background: rgba(12,10,6,.35);
  border: 1px solid rgba(245,207,122,.55);
  color: var(--gold-2); font-size: .82rem; font-weight: 600; letter-spacing: .04em;
  transition: all .25s ease;
}
.ig-link:hover { background: rgba(230,179,74,.18); box-shadow: 0 0 18px rgba(230,179,74,.3) }
.modal-tags span { padding: .3rem .75rem; border-radius: 999px; background: rgba(230,179,74,.1); color: var(--gold); border: 1px solid rgba(230,179,74,.3); font-size: .7rem; font-weight: 600; letter-spacing: .06em }
.info-list { display: grid; gap: .75rem }
.info-row {
  padding: .75rem .9rem; border-radius: 12px;
  background: rgba(12,10,6,.35);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(245,207,122,.25);
  box-shadow: inset 0 1px 0 rgba(255,240,210,.1);
}
.info-row small { color: var(--fg-mute); font-size: .68rem; letter-spacing: .18em; text-transform: uppercase; font-weight: 600; display: block; margin-bottom: .2rem }
.info-row strong { font-family: var(--f-display); font-weight: 400; font-size: 1rem; color: #fff; letter-spacing: .02em }

/* ── Modal transition ── */
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity .25s ease }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0 }

/* ── Responsive ── */
@media (max-width: 1080px) {
  .stats { grid-template-columns: repeat(2,1fr); gap: 2rem }
  .stat + .stat::before { display: none }
  .modal-body { flex-direction: column }
  .carousel { flex: 0 0 50%; border-right: none; border-bottom: 1px solid rgba(255,255,255,.06) }
}
@media (max-width: 720px) {
  .back-btn { padding: .5rem .8rem; font-size: .75rem; top: 10px; left: 16px }
  .hero { padding: 6rem 0 1.2rem }
  .hero .inner { padding: 0 16px }
  .hero-sub { font-size: .95rem }
  .stats { grid-template-columns: 1fr 1fr; padding: 1.8rem; gap: 1.2rem }
  .cta-card { padding: 3rem 1.5rem }
  .modal-head { padding: .75rem 1rem }
  .modal-head h2 { font-size: 1.1rem }
  .carousel { padding: .8rem }
  .details-grid { padding: 1rem }
}
@media (max-width: 480px) {
  .hero-display { font-size: clamp(1.8rem, 7.5vw, 2.8rem) }
}
</style>
