<template>
  <!-- Backdrop -->
  <AppBackdrop />

  <!-- Barra flotante (igual que el inicio) -->
  <PageNav />

  <!-- Hero -->
  <header class="hero">
    <div class="inner">
      <div>
        <span class="eyebrow">{{ t('impresion3d.eyebrow') }}</span>
        <h1 class="display hero-display">
          <span class="white">{{ t('impresion3d.titleWhite') }}</span> <span class="gold">{{ t('impresion3d.titleGold') }}</span>
        </h1>
        <p class="lead">
          {{ t('impresion3d.lead') }}
        </p>
      </div>
      <div class="hero-image">
        <img src="/img/portada_3d.jpg" :alt="t('impresion3d.titleGold')" />
      </div>
    </div>
  </header>

  <!-- Videos del proceso -->
  <section class="video-section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow reveal">{{ t('impresion3d.videosEyebrow') }}</span>
        <h2 class="display reveal reveal-1" style="font-size:clamp(1.8rem, 3.6vw, 2.8rem)">
          <span class="white">{{ t('impresion3d.videosTitleWhite') }}</span> <span class="gold">{{ t('impresion3d.videosTitleGold') }}</span>
        </h2>
        <p class="lead reveal reveal-2">
          {{ t('impresion3d.videosLead') }}
        </p>
      </div>

      <GlassGrid>
        <GlassCard
          v-for="(v, i) in videos" :key="v.key"
          :class="['video-card reveal', `reveal-${i % 4}`]"
          :href="v.link" :image="v.image"
          :category="t(`impresion3d.videos.${v.key}.tag`)"
          :title="t(`impresion3d.videos.${v.key}.title`)"
          :description="t(`impresion3d.videos.${v.key}.description`)"
          :cta="t('impresion3d.verEnTiktok')"
        >
          <template #media>
            <div class="video-play">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </template>
        </GlassCard>
      </GlassGrid>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="container">
      <div class="glass-gold cta-card reveal">
        <span class="eyebrow" style="margin-bottom:1.4rem">{{ t('impresion3d.ctaEyebrow') }}</span>
        <h2 class="display h-cta">
          <span class="white">{{ t('impresion3d.ctaTitleWhite') }}</span> <span class="gold">{{ t('impresion3d.ctaTitleGold') }}</span>
        </h2>
        <p class="lead">
          {{ t('impresion3d.ctaLead') }}
        </p>
        <div class="cta-btns">
          <WhatsAppButton message="Hola, quiero un proyecto de diseño e impresión 3D" />
          <router-link to="/identidad-marca" class="btn btn-outline">{{ t('impresion3d.verPortafolio') }}</router-link>
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
const { t } = useI18n();


/* ── Videos del proceso (TikTok) ── */
const videos = [
  { key: 'llavero', image: '/img/llavero_uñas.jpg', link: 'https://www.tiktok.com/@franklin_designer/video/7619540097372884242' },
  { key: 'anillos', image: '/img/modelado_anillos.jpg', link: 'https://www.tiktok.com/@franklin_designer/video/7157501696548031749' },
  { key: 'impresora', image: '/img/impresora_3d.jpg', link: 'https://www.tiktok.com/@franklin_designer/video/7575952082771938568' },
];
</script>

<style scoped>
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

/* ── Videos del proceso ── */
.video-section { padding: 0 0 5rem }
.video-play {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 2;
  width: 60px; height: 60px; border-radius: 50%;
  display: grid; place-items: center; color: #1a1207;
  background: linear-gradient(135deg, #f5cf7a, #e6b34a 50%, #b8862c);
  box-shadow: 0 10px 30px rgba(230,179,74,.45), inset 0 1px 0 rgba(255,255,255,.35);
  transition: transform .3s ease;
}
.video-card:hover .video-play { transform: translate(-50%, -50%) scale(1.1) }
.video-play svg { margin-left: 3px }

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
}
@media (max-width: 720px) {
  .hero { padding: 7rem 0 4rem }
  .hero .inner { padding: 0 16px }
  .cta-card { padding: 3rem 1.5rem }
}
</style>
