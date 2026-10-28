<template>
  <!-- Backdrop -->
  <AppBackdrop />
  <div class="page-bg" aria-hidden="true"></div>

  <!-- Barra flotante (igual que el inicio) -->
  <PageNav />

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
          <WhatsAppButton message="Hola, quiero potenciar mi marca con IA" />
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
import WhatsAppButton from '../components/ui/WhatsAppButton.vue';
import AppBackdrop from '../components/landing/AppBackdrop.vue';
import PageNav from '../components/ui/PageNav.vue';
import GlassCard from '../components/ui/GlassCard.vue';
import GlassGrid from '../components/ui/GlassGrid.vue';
import { useReveal } from '../composables/useReveal.js';

useReveal();
const { t, tm } = useI18n();

</script>

<style scoped>
/* ── Fondo: imagen de las manos, oscurecida (igual que /identidad-marca) ── */
.page-bg {
  position: fixed; inset: 0; z-index: -2; pointer-events: none;
  background:
    linear-gradient(135deg, rgba(0,0,0,.78) 0%, rgba(0,0,0,.6) 50%, rgba(0,0,0,.78) 100%),
    url('/img/hero-hands.jpg') center / cover no-repeat;
}

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
