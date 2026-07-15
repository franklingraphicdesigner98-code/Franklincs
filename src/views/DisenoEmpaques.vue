<template>
  <!-- Backdrop -->
  <AppBackdrop />

  <!-- Back button -->
  <router-link to="/" class="back-btn">
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
      <div>
        <span class="eyebrow">{{ t('disenoEmpaques.eyebrow') }}</span>
        <h1 class="display hero-display">
          <span class="white">{{ t('disenoEmpaques.titleWhite') }}</span> <span class="gold">{{ t('disenoEmpaques.titleGold') }}</span>
        </h1>
        <p class="lead">
          {{ t('disenoEmpaques.lead') }}
        </p>
      </div>
      <div class="hero-image">
        <img src="/img/portada_packaging.jpg" :alt="t('disenoEmpaques.titleGold')" />
      </div>
    </div>
  </header>

  <!-- Mockups -->
  <section class="mockups-section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow reveal">{{ t('disenoEmpaques.mockupsEyebrow') }}</span>
        <h2 class="display reveal reveal-1" style="font-size:clamp(1.8rem, 3.6vw, 2.8rem)">
          <span class="white">{{ t('disenoEmpaques.mockupsTitleWhite') }}</span> <span class="gold">{{ t('disenoEmpaques.mockupsTitleGold') }}</span>
        </h2>
        <p class="lead reveal reveal-2">
          {{ t('disenoEmpaques.mockupsLead') }}
        </p>
      </div>

      <div class="mockups-grid">
        <article v-for="(m, i) in mockups" :key="m.key" :class="['mockup reveal', m.span, `reveal-${i % 4}`]">
          <img v-if="!m.images" :src="m.image" :alt="t(`disenoEmpaques.mockups.${m.key}.title`)" loading="lazy" />
          <img
            v-for="(src, idx) in (m.images || [])" :key="src"
            :src="src" :alt="t(`disenoEmpaques.mockups.${m.key}.title`)" loading="lazy"
            :class="['carousel-frame', { active: idx === frame % m.images.length }]"
          />
          <div class="mockup-overlay">
            <span class="mockup-tag">{{ t(`disenoEmpaques.mockups.${m.key}.tag`) }}</span>
            <h3>{{ t(`disenoEmpaques.mockups.${m.key}.title`) }}</h3>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="container">
      <div class="glass-gold cta-card reveal">
        <span class="eyebrow" style="margin-bottom:1.4rem">{{ t('disenoEmpaques.ctaEyebrow') }}</span>
        <h2 class="display h-cta">
          <span class="white">{{ t('disenoEmpaques.ctaTitleWhite') }}</span> <span class="gold">{{ t('disenoEmpaques.ctaTitleGold') }}</span>
        </h2>
        <p class="lead">
          {{ t('disenoEmpaques.ctaLead') }}
        </p>
        <div class="cta-btns">
          <a href="https://api.whatsapp.com/send/?phone=%2B573223003840&text=Hola%2C%20quiero%20un%20proyecto%20de%20dise%C3%B1o%20de%20empaques" target="_blank" rel="noopener noreferrer" class="btn btn-gold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
            {{ t('cta.whatsapp') }}
          </a>
          <router-link to="/identidad-marca" class="btn btn-outline">{{ t('disenoEmpaques.verPortafolio') }}</router-link>
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
        <a href="https://www.instagram.com/franklinp.cs/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/in/franklin-pe%C3%B1a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import AppBackdrop from '../components/landing/AppBackdrop.vue';
import LanguageSwitcher from '../components/landing/LanguageSwitcher.vue';
import { useReveal } from '../composables/useReveal.js';

useReveal();
const { t } = useI18n();

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

/* ── Carrusel de imágenes dentro de una tarjeta ── */
const frame = ref(0);
let carouselTimer = null;
onMounted(() => { carouselTimer = setInterval(() => { frame.value++; }, 2800); });
onUnmounted(() => clearInterval(carouselTimer));

/* ── Mockups / proyectos de empaques ── */
const mockups = [
  { key: 'montessia', span: 'span-half', images: ['/img/Project 4.jpg', '/img/Project 3.jpg'] },
  { key: 'smartwatch', span: 'span-half', images: ['/img/Caja_reloj.png', '/img/caja_reloj_morado.png'] },
  { key: 'tech', span: 'span-third', image: '/img/graffiti_audifono.jpg' },
  { key: 'audifonos', span: 'span-third', image: '/img/espacio_audifono.jpg' },
  { key: 'carne', span: 'span-third', image: '/img/empaque_carne.jpg' },
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
}
.hero-image img { width: 100%; height: 100%; object-fit: cover; display: block }

/* ── Section head (shared) ── */
.section-head { max-width: 720px; margin: 0 auto 3rem; text-align: center }
.section-head .lead { margin-top: 1rem; color: var(--fg-dim); font-size: 1rem; line-height: 1.7 }

/* ── Mockups section ── */
.mockups-section { padding: 2rem 0 5rem }
.mockups-grid {
  display: grid; grid-template-columns: repeat(12, 1fr); gap: 1.4rem;
  grid-auto-rows: minmax(160px, auto);
}
.mockup {
  position: relative; border-radius: var(--r-lg); overflow: hidden;
  min-height: 320px; isolation: isolate;
  transition: transform .4s ease, box-shadow .4s ease;
}
.mockup:hover { transform: translateY(-6px); box-shadow: 0 30px 70px rgba(0,0,0,.7), 0 0 0 1px rgba(230,179,74,.25) }
.mockup img {
  position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
  transition: transform .8s ease, filter .4s ease;
  filter: saturate(.9) brightness(.85);
}
.mockup:hover img { transform: scale(1.06); filter: saturate(1.1) brightness(1) }
.mockup img.carousel-frame { opacity: 0; transition: opacity 1.2s ease, transform .8s ease, filter .4s ease }
.mockup img.carousel-frame.active { opacity: 1 }
.mockup::after {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,.75) 100%);
  pointer-events: none;
}
.mockup-overlay { position: absolute; left: 1.4rem; right: 1.4rem; bottom: 1.2rem; z-index: 2 }
.mockup-tag { display: inline-block; padding: .3rem .7rem; border-radius: 999px; background: rgba(0,0,0,.55); backdrop-filter: blur(8px); border: 1px solid rgba(230,179,74,.35); color: var(--gold); font-size: .68rem; font-weight: 600; letter-spacing: .06em; margin-bottom: .6rem }
.mockup-overlay h3 { font-family: var(--f-display); font-weight: 400; font-size: 1.35rem; letter-spacing: .02em; text-transform: uppercase; margin: 0; color: #fff }

.span-half  { grid-column: span 6 }
.span-third { grid-column: span 4 }

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
  .span-half, .span-third { grid-column: span 6 }
}
@media (max-width: 720px) {
  .back-btn { padding: .5rem .8rem; font-size: .75rem; top: 10px; left: 16px }
  .hero { padding: 7rem 0 4rem }
  .hero .inner { padding: 0 16px }
  .span-half, .span-third { grid-column: span 12 }
  .cta-card { padding: 3rem 1.5rem }
}
</style>
