<template>
  <!-- Backdrop -->
  <AppBackdrop />

  <!-- Barra flotante (igual que el inicio) -->
  <PageNav />

  <!-- Hero -->
  <header class="hero">
    <div class="inner">
      <div>
        <span class="eyebrow">{{ t('identidadMarca.eyebrow') }}</span>
        <h1 class="display hero-display">
          <span class="white">{{ t('identidadMarca.titleWhite') }}</span> <span class="gold">{{ t('identidadMarca.titleGold') }}</span>
        </h1>
        <p class="lead">
          {{ t('identidadMarca.lead') }}
        </p>
      </div>
      <div class="hero-image">
        <img src="/img/Portada_identidad.png" :alt="t('identidadMarca.titleWhite')" />
      </div>
    </div>
  </header>

  <!-- Mockups -->
  <section class="mockups-section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow reveal">{{ t('identidadMarca.mockupsEyebrow') }}</span>
        <h2 class="display reveal reveal-1" style="font-size:clamp(1.8rem, 3.6vw, 2.8rem)">
          <span class="white">{{ t('identidadMarca.mockupsTitleWhite') }}</span> <span class="gold">{{ t('identidadMarca.mockupsTitleGold') }}</span>
        </h2>
        <p class="lead reveal reveal-2">
          {{ t('identidadMarca.mockupsLead') }}
        </p>
      </div>

      <GlassGrid>
        <GlassCard
          v-for="(m, i) in mockups" :key="m.key"
          :class="['reveal', `reveal-${i % 4}`]"
          :href="m.link && isExternal(m.link) ? m.link : ''"
          :to="m.link && !isExternal(m.link) ? m.link : ''"
          :image="m.image" :images="m.images" :frame="frame"
          :category="t(`identidadMarca.mockups.${m.key}.tag`)"
          :title="t(`identidadMarca.mockups.${m.key}.title`)"
          :description="t(`identidadMarca.mockups.${m.key}.description`)"
          :cta="m.link ? linkLabel(m) : ''"
        />
      </GlassGrid>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="container">
      <div class="glass-gold cta-card reveal">
        <span class="eyebrow" style="margin-bottom:1.4rem">{{ t('identidadMarca.ctaEyebrow') }}</span>
        <h2 class="display h-cta">
          <span class="white">{{ t('identidadMarca.ctaTitleWhite') }}</span> <span class="gold">{{ t('identidadMarca.ctaTitleGold') }}</span>
        </h2>
        <p class="lead">
          {{ t('identidadMarca.ctaLead') }}
        </p>
        <div class="cta-btns">
          <WhatsAppButton message="Hola, quiero un proyecto de diseño gráfico" />
          <router-link to="/identidad-marca" class="btn btn-outline">{{ t('identidadMarca.verPortafolio') }}</router-link>
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


const isExternal = (link) => /^https?:\/\//.test(link);

const linkLabel = (m) => {
  if (m.link.includes('instagram.com')) return t('identidadMarca.verEnInstagram');
  if (m.link.includes('tiktok.com')) return t('identidadMarca.verEnTiktok');
  return t('identidadMarca.verMas');
};

/* ── Carrusel de imágenes dentro de una tarjeta ── */
const frame = ref(0);
let carouselTimer = null;
onMounted(() => { carouselTimer = setInterval(() => { frame.value++; }, 2800); });
onUnmounted(() => clearInterval(carouselTimer));

/* ── Mockups / aplicaciones de marca ── */
const mockups = [
  { key: 'sistemaVisual', image: '/img/Papeleria variedades.jpg' },
  { key: 'tarjetas', images: ['/img/Tarjetas de presentacion yolima.png', '/img/redes_sociales_cam_network (2).jpg', '/img/tarjetas_abogada.png'] },
  { key: 'menus', image: '/img/menu_mr_cream.png', link: 'https://www.instagram.com/mrcream35/' },
  { key: 'ambientacion', image: '/img/portada_socios.jpg', link: 'https://www.tiktok.com/@franklin_designer/video/7642957503138909448' },
  { key: 'packaging', image: '/img/portada_packaging.jpg', link: '/diseno-empaques' },
  { key: 'piezasDigitales', image: '/img/redes_sociales_cam_network.jpg' },
  { key: 'senaletica', image: '/img/Señaletica.png' },
  { key: 'granFormato', image: '/img/Project 5.jpg' },
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
}
.hero-image img { width: 100%; height: 100%; object-fit: cover; display: block }

/* ── Section head (shared) ── */
.section-head { max-width: 720px; margin: 0 auto 3rem; text-align: center }
.section-head .lead { margin-top: 1rem; color: var(--fg-dim); font-size: 1rem; line-height: 1.7 }

/* ── Mockups section ── */
.mockups-section { padding: 2rem 0 5rem }

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
