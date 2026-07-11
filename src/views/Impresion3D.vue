<template>
  <!-- Backdrop -->
  <AppBackdrop />

  <!-- Back button -->
  <router-link to="/" class="back-btn">
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
        <span class="eyebrow">Especialidad · 04</span>
        <h1 class="display hero-display">
          <span class="white">Diseño e</span> <span class="gold">Impresión 3D</span>
        </h1>
        <p class="lead">
          Convertimos ideas en objetos físicos. Modelamos, prototipamos e imprimimos piezas
          a medida — desde validaciones rápidas de diseño hasta producción de series cortas
          bajo demanda.
        </p>
      </div>
      <div class="hero-image">
        <img src="/img/portada_3d.jpg" alt="Diseño e Impresión 3D" />
      </div>
    </div>
  </header>

  <!-- Importancia -->
  <section class="why-section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow reveal">¿Por qué elegirla?</span>
        <h2 class="display reveal reveal-1" style="font-size:clamp(1.8rem, 3.6vw, 2.8rem)">
          <span class="white">DE LA IDEA AL</span> <span class="gold">OBJETO REAL</span>
        </h2>
        <p class="lead reveal reveal-2">
          La impresión 3D acorta la distancia entre el concepto digital y el producto que puedes sostener en tus manos.
        </p>
      </div>

      <div class="why-grid">
        <div v-for="(item, i) in whyItems" :key="item.title" :class="['glass why-card reveal', `reveal-${i % 4}`]">
          <div class="why-icon" v-html="item.icon"></div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Proceso -->
  <section class="process-section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow reveal">Cómo trabajamos</span>
        <h2 class="display reveal reveal-1" style="font-size:clamp(1.8rem, 3.6vw, 2.8rem)">
          <span class="white">NUESTRO</span> <span class="gold">PROCESO</span>
        </h2>
        <p class="lead reveal reveal-2">
          Cuatro etapas para llevar tu pieza del modelo digital al objeto terminado.
        </p>
      </div>

      <div class="process-grid">
        <div v-for="(step, i) in processSteps" :key="step.title" :class="['glass process-card reveal', `reveal-${i % 4}`]">
          <span class="process-num">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Showcase -->
  <section class="showcase-section">
    <div class="container">
      <div class="showcase reveal">
        <img src="/img/Impresion 3d.jpg" alt="Impresión 3D en taller" loading="lazy" />
        <div class="showcase-overlay">
          <span class="mockup-tag">En el taller</span>
          <h3>Precisión capa por capa</h3>
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
          <span class="white">¿Listo para imprimir</span> <span class="gold">tu idea?</span>
        </h2>
        <p class="lead">
          Cuéntanos tu proyecto y te ayudamos a llevarlo del modelo 3D al objeto físico,
          con el material y acabado correctos para tu necesidad.
        </p>
        <div class="cta-btns">
          <a href="https://api.whatsapp.com/send/?phone=%2B573223003840&text=Hola%2C%20quiero%20un%20proyecto%20de%20dise%C3%B1o%20e%20impresi%C3%B3n%203D" target="_blank" rel="noopener noreferrer" class="btn btn-gold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
            Iniciar proyecto
          </a>
          <router-link to="/diseno-grafico" class="btn btn-outline">Ver portafolio completo</router-link>
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
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AppBackdrop from '../components/landing/AppBackdrop.vue';
import { useReveal } from '../composables/useReveal.js';

useReveal();

/* ── Nav hide on scroll ── */
const navHidden = ref(false);
let lastY = 0;
const onScroll = () => {
  const y = window.scrollY;
  navHidden.value = y > lastY && y > 80;
  lastY = y;
};
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', onScroll));

/* ── Beneficios de la impresión 3D ── */
const whyItems = [
  {
    title: 'Prototipado rápido',
    desc: 'Visualiza y valida tu producto en horas, no en semanas, antes de invertir en producción.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 11-13h-7l1-7z"/></svg>'
  },
  {
    title: 'Personalización total',
    desc: 'Cada pieza puede adaptarse a necesidades específicas sin costos adicionales de molde.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'
  },
  {
    title: 'Reducción de costos',
    desc: 'Ideal para series cortas y bajos volúmenes, sin necesidad de inversión en herramental.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 9.5c0-1.4 1.3-2.5 3-2.5s3 1.1 3 2.5-1.3 2-3 2.5-3 1.1-3 2.5 1.3 2.5 3 2.5 3-1.1 3-2.5"/></svg>'
  },
  {
    title: 'Validación de diseño',
    desc: 'Detecta errores de forma física antes de escalar a producción masiva.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>'
  },
  {
    title: 'Materiales versátiles',
    desc: 'Resinas, plásticos técnicos y filamentos para distintos acabados y niveles de resistencia.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>'
  },
  {
    title: 'Producción bajo demanda',
    desc: 'Fabrica solo lo que necesitas, cuando lo necesitas, sin inventario sobrante.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>'
  }
];

/* ── Proceso de trabajo ── */
const processSteps = [
  { title: 'Modelado 3D', desc: 'Diseñamos el modelo digital de tu pieza con el software y precisión adecuados.' },
  { title: 'Preparación & slicing', desc: 'Optimizamos orientación, soportes y parámetros de impresión para el mejor resultado.' },
  { title: 'Impresión', desc: 'Fabricamos la pieza capa por capa con la tecnología y material ideales para tu proyecto.' },
  { title: 'Acabado & ensamblaje', desc: 'Lijado, pintura o ensamblaje final según los requerimientos de cada pieza.' }
];
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
  display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; align-items: center;
}
.hero-display { font-size: clamp(2.2rem, 5.5vw, 4.4rem); margin-top: 1.5rem }
.hero p.lead { margin-top: 1.5rem; font-size: 1.05rem; color: var(--fg-dim); line-height: 1.75 }
.hero-image {
  border-radius: var(--r-lg); overflow: hidden;
  border: 1px solid rgba(230,179,74,.2);
  box-shadow: 0 30px 70px rgba(0,0,0,.6);
  aspect-ratio: 4 / 3.2;
}
.hero-image img { width: 100%; height: 100%; object-fit: cover; display: block }

/* ── Section head (shared) ── */
.section-head { max-width: 720px; margin: 0 auto 3rem; text-align: center }
.section-head .lead { margin-top: 1rem; color: var(--fg-dim); font-size: 1rem; line-height: 1.7 }

/* ── Why section ── */
.why-section { padding: 4rem 0 5rem }
.why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.4rem }
.why-card { padding: 2rem 1.8rem; text-align: left }
.why-icon {
  width: 52px; height: 52px; border-radius: 14px; margin-bottom: 1.2rem;
  display: grid; place-items: center; color: var(--gold);
  background: rgba(230,179,74,.08); border: 1px solid rgba(230,179,74,.25);
}
.why-card h3 { font-family: var(--f-display); font-weight: 400; font-size: 1.25rem; text-transform: uppercase; letter-spacing: .03em; color: #fff; margin: 0 0 .6rem }
.why-card p { color: var(--fg-mute); font-size: .9rem; line-height: 1.65; margin: 0 }

/* ── Process section ── */
.process-section { padding: 0 0 5rem }
.process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.4rem }
.process-card { padding: 2rem 1.6rem; text-align: left; position: relative }
.process-num {
  display: block; font-family: var(--f-display); font-weight: 400;
  font-size: 2.4rem; margin-bottom: 1rem; letter-spacing: .01em;
  background: linear-gradient(180deg,#f5cf7a 0%,#e6b34a 60%,#a47a23 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.process-card h3 { font-family: var(--f-display); font-weight: 400; font-size: 1.15rem; text-transform: uppercase; letter-spacing: .03em; color: #fff; margin: 0 0 .6rem }
.process-card p { color: var(--fg-mute); font-size: .88rem; line-height: 1.6; margin: 0 }

/* ── Showcase ── */
.showcase-section { padding: 0 0 5rem }
.showcase {
  position: relative; border-radius: var(--r-lg); overflow: hidden;
  min-height: 340px; isolation: isolate;
  border: 1px solid rgba(230,179,74,.2);
}
.showcase img { width: 100%; height: 100%; max-height: 480px; object-fit: cover; display: block; filter: saturate(.95) brightness(.9) }
.showcase::after {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,.75) 100%);
  pointer-events: none;
}
.showcase-overlay { position: absolute; left: 1.6rem; right: 1.6rem; bottom: 1.4rem; z-index: 2 }
.mockup-tag { display: inline-block; padding: .3rem .7rem; border-radius: 999px; background: rgba(0,0,0,.55); backdrop-filter: blur(8px); border: 1px solid rgba(230,179,74,.35); color: var(--gold); font-size: .68rem; font-weight: 600; letter-spacing: .06em; margin-bottom: .6rem }
.showcase-overlay h3 { font-family: var(--f-display); font-weight: 400; font-size: 1.6rem; letter-spacing: .02em; text-transform: uppercase; margin: 0; color: #fff }

/* ── CTA ── */
.cta-section { padding: 2rem 0 6rem }
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

/* ── Responsive ── */
@media (max-width: 1080px) {
  .hero .inner { grid-template-columns: 1fr; gap: 2.5rem }
  .hero-image { order: -1 }
  .why-grid { grid-template-columns: repeat(2, 1fr) }
  .process-grid { grid-template-columns: repeat(2, 1fr) }
}
@media (max-width: 720px) {
  .back-btn { padding: .5rem .8rem; font-size: .75rem; top: 10px; left: 16px }
  .hero { padding: 7rem 0 4rem }
  .hero .inner { padding: 0 16px }
  .why-grid { grid-template-columns: 1fr }
  .process-grid { grid-template-columns: 1fr }
  .cta-card { padding: 3rem 1.5rem }
}
</style>
