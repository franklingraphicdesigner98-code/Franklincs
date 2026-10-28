<template>
  <!-- Backdrop -->
  <AppBackdrop />
  <div class="page-bg" aria-hidden="true"></div>

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

  <!-- Hero mínimo: eyebrow, título y una línea -->
  <header class="hero">
    <div class="inner">
      <span class="eyebrow">{{ t('iaCreativa.eyebrow') }}</span>
      <h1 class="display hero-display">
        <span class="white">{{ t('iaCreativa.titleWhite') }}</span><br /><span class="gold">{{ t('iaCreativa.titleGold') }}</span>
      </h1>
      <p class="hero-sub">{{ t('iaCreativa.subtitle') }}</p>
    </div>
  </header>

  <!-- 1 · Diagnóstico: texto centrado + áreas -->
  <section class="block">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow reveal">{{ t('iaCreativa.diagEyebrow') }}</span>
        <h2 class="display reveal reveal-1 h-section">
          <span class="white">{{ t('iaCreativa.diagTitleWhite') }}</span> <span class="gold">{{ t('iaCreativa.diagTitleGold') }}</span>
        </h2>
        <p class="diag-text reveal reveal-2">{{ t('iaCreativa.diagText') }}</p>
      </div>
      <ul class="areas reveal reveal-3">
        <li v-for="a in tm('iaCreativa.areas')" :key="a">{{ a }}</li>
      </ul>
    </div>
  </section>

  <!-- 2 · Qué puedes lograr -->
  <section class="block">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow reveal">{{ t('iaCreativa.resultsEyebrow') }}</span>
        <h2 class="display reveal reveal-1 h-section">
          <span class="white">{{ t('iaCreativa.resultsTitleWhite') }}</span> <span class="gold">{{ t('iaCreativa.resultsTitleGold') }}</span>
        </h2>
      </div>
      <GlassGrid>
        <GlassCard
          v-for="i in 3" :key="i"
          :class="['reveal', `reveal-${i - 1}`, 'static-card']"
          :category="`0${i}`"
          :title="t(`iaCreativa.results.${i - 1}.title`)"
          :description="t(`iaCreativa.results.${i - 1}.description`)"
        />
      </GlassGrid>
    </div>
  </section>

  <!-- 3 · Cómo trabajamos -->
  <section class="block">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow reveal">{{ t('iaCreativa.stepsEyebrow') }}</span>
        <h2 class="display reveal reveal-1 h-section">
          <span class="white">{{ t('iaCreativa.stepsTitleWhite') }}</span> <span class="gold">{{ t('iaCreativa.stepsTitleGold') }}</span>
        </h2>
      </div>
      <GlassGrid>
        <GlassCard
          v-for="i in 3" :key="i"
          :class="['reveal', `reveal-${i - 1}`, 'static-card']"
          :category="`${t('iaCreativa.paso')} 0${i}`"
          :title="t(`iaCreativa.steps.${i - 1}.title`)"
          :description="t(`iaCreativa.steps.${i - 1}.description`)"
        />
      </GlassGrid>
    </div>
  </section>

  <!-- 4 · CTA -->
  <section class="cta-section">
    <div class="container">
      <div class="glass-gold cta-card reveal">
        <span class="eyebrow" style="margin-bottom:1.4rem">{{ t('iaCreativa.ctaEyebrow') }}</span>
        <h2 class="display h-cta">
          <span class="white">{{ t('iaCreativa.ctaTitleWhite') }}</span> <span class="gold">{{ t('iaCreativa.ctaTitleGold') }}</span>
        </h2>
        <div class="cta-btns">
          <a href="https://api.whatsapp.com/send/?phone=%2B573223003840&text=Hola%2C%20quiero%20potenciar%20mi%20marca%20con%20IA" target="_blank" rel="noopener noreferrer" class="btn btn-gold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
            {{ t('cta.whatsapp') }}
          </a>
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
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import AppBackdrop from '../components/landing/AppBackdrop.vue';
import LanguageSwitcher from '../components/landing/LanguageSwitcher.vue';
import GlassCard from '../components/ui/GlassCard.vue';
import GlassGrid from '../components/ui/GlassGrid.vue';
import { useReveal } from '../composables/useReveal.js';

useReveal();
const { t, tm } = useI18n();

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
</script>

<style scoped>
/* ── Fondo: imagen de las manos, oscurecida (igual que /identidad-marca) ── */
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
}
.back-btn:hover { transform: translateX(-3px); box-shadow: 0 12px 32px rgba(230,179,74,.6), inset 0 1px 0 rgba(255,255,255,.4) }
.back-btn svg { transition: transform .25s ease }
.back-btn:hover svg { transform: translateX(-3px) }

/* ── Nav (vidrio ahumado con línea de luz) ── */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 50;
  background: rgba(12,10,6,.4);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  border-bottom: 1px solid rgba(245,207,122,.3);
  box-shadow: 0 8px 32px rgba(0,0,0,.4), inset 0 -1px 0 rgba(255,240,210,.06);
  transition: transform .3s ease;
}
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

/* ── Hero mínimo ── */
.hero { position: relative; padding: 7rem 0 2rem }
.hero .inner { max-width: 1280px; margin: 0 auto; padding: 0 32px }
.hero-display { font-size: clamp(2rem, 4.5vw, 3.6rem); margin-top: 1rem }
.hero-sub { margin: .8rem 0 0; max-width: 60ch; font-size: 1.05rem; color: var(--fg-dim); line-height: 1.5 }

/* ── Secciones ── */
.block { padding: 3rem 0 }
.section-head { max-width: 720px; margin: 0 auto 2.2rem; text-align: center }
.h-section { font-size: clamp(1.8rem, 3.6vw, 2.8rem) }

/* Diagnóstico: texto centrado + áreas en píldoras de vidrio */
.diag-text { margin: 1.2rem auto 0; max-width: 56ch; font-size: 1.1rem; line-height: 1.6; color: var(--fg-dim) }
.areas {
  list-style: none; margin: 0 auto; padding: 0; max-width: 960px;
  display: flex; flex-wrap: wrap; justify-content: center; gap: .75rem;
}
.areas li {
  padding: .7rem 1.3rem; border-radius: 999px;
  background: rgba(12,10,6,.35);
  backdrop-filter: blur(12px) saturate(160%);
  -webkit-backdrop-filter: blur(12px) saturate(160%);
  border: 1px solid rgba(245,207,122,.4);
  box-shadow: 0 0 18px rgba(230,179,74,.08), inset 0 1px 0 rgba(255,240,210,.12);
  color: #fff; font-size: .92rem; font-weight: 500; letter-spacing: .02em;
}

/* Tarjetas informativas (no son enlaces) */
.static-card { cursor: default }

/* ── CTA ── */
.cta-section { padding: 3rem 0 6rem }
.cta-card {
  padding: 5rem 4rem; text-align: center; position: relative; overflow: hidden;
  background:
    radial-gradient(ellipse 40% 40% at 0% 0%, rgba(230,179,74,.16), transparent 70%),
    radial-gradient(700px 400px at 50% 100%, rgba(230,179,74,.2), transparent 65%),
    rgba(12,10,6,.35);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  box-shadow: 0 25px 60px rgba(0,0,0,.5), 0 0 50px rgba(230,179,74,.08), inset 0 1px 0 rgba(255,240,210,.18);
  display: flex; flex-direction: column; align-items: center;
}
.cta-card::after {
  content: ""; position: absolute; left: 30%; right: 30%; bottom: 0; height: 2px;
  pointer-events: none; border-radius: 2px;
  background: linear-gradient(90deg, transparent, #f5cf7a, transparent);
  box-shadow: 0 0 18px 3px rgba(230,179,74,.45);
}
.h-cta { font-size: clamp(2rem, 4.5vw, 3.8rem); margin-bottom: 2.2rem; max-width: 22ch }
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
@media (max-width: 720px) {
  .back-btn { padding: .5rem .8rem; font-size: .75rem; top: 10px; left: 16px }
  .hero { padding: 6rem 0 1.5rem }
  .hero .inner { padding: 0 16px }
  .hero-sub { font-size: .95rem }
  .diag-text { font-size: 1rem }
  .areas li { font-size: .85rem; padding: .6rem 1.1rem }
  .block { padding: 2rem 0 }
  .cta-card { padding: 3rem 1.5rem }
}
@media (max-width: 480px) {
  .hero-display { font-size: clamp(1.8rem, 7.5vw, 2.8rem) }
}
</style>
