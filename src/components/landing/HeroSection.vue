<template>
  <header class="hero" id="top">
    <div class="hero-bg">
      <img src="/img/hero-hands.jpg" alt="Manos en conexión" class="hero-bg-img" />
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
      <div class="glass-card">
        <div class="glass-card-grid">
          <div class="glass-card-text">
            <p class="eyebrow">{{ t('hero.eyebrow') }}</p>
            <h1 class="hero-title">
              <i18n-t keypath="hero.title">
                <template #impacta><span class="gold">{{ t('hero.titleImpacta') }}</span></template>
                <template #existe><span class="gold">{{ t('hero.titleExiste') }}</span></template>
              </i18n-t>
            </h1>
            <p class="hero-description">
              {{ t('hero.description') }}
            </p>
            <a href="#servicios" class="cta-btn">
              {{ t('hero.cta') }}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
          <div class="glass-card-vis">
            <MomentsCarousel />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import MomentsCarousel from './MomentsCarousel.vue';
const { t } = useI18n();
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  margin-top: 0;
  padding: 0;
  box-sizing: border-box;
}

.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.6);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 85vh;
  background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeInUp 0.8s ease-out;
}

.glass-card {
  max-width: 1080px;
  width: 90%;
  padding: 2.6rem 2.8rem;
  margin-top: 10px;
  /* Glassmorphism: vidrio ahumado con canto de luz dorado */
  position: relative;
  background:
    radial-gradient(ellipse 45% 40% at 0% 0%, rgba(230,179,74,.16), transparent 70%),
    radial-gradient(ellipse 40% 30% at 50% 100%, rgba(230,179,74,.12), transparent 70%),
    rgba(12,10,6,.35);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  border: 1px solid transparent;
  border-radius: 24px;
  box-shadow:
    0 25px 60px rgba(0,0,0,.5),
    0 0 50px rgba(230,179,74,.08),
    inset 0 1px 0 rgba(255,240,210,.18);
  animation: slideInDown 0.8s ease-out 0.1s both;
}

/* Canto del vidrio: borde degradado dorado / plateado */
.glass-card::before {
  content: ""; position: absolute; inset: -1px; border-radius: inherit; pointer-events: none;
  padding: 1px;
  background: linear-gradient(135deg, rgba(245,207,122,.95) 0%, rgba(255,255,255,.28) 22%, rgba(255,255,255,.12) 55%, rgba(245,207,122,.55) 100%);
  -webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000);
  mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000);
  -webkit-mask-composite: xor; mask-composite: exclude;
}

/* Destello de luz dorada en el borde inferior */
.glass-card::after {
  content: ""; position: absolute; left: 30%; right: 30%; bottom: -1px; height: 2px;
  pointer-events: none; border-radius: 2px;
  background: linear-gradient(90deg, transparent, #f5cf7a, transparent);
  box-shadow: 0 0 18px 3px rgba(230,179,74,.45);
}

.glass-card-grid { display: grid; grid-template-columns: 1.1fr .9fr; gap: 2.4rem; align-items: center }
.glass-card-text { text-align: center }
.glass-card-vis { height: 320px }

.eyebrow {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.9rem;
  opacity: 0.95;
}

.hero-title {
  /* Outfit: alternativa libre y similar a Ageo (geométrica) */
  font-family: var(--f-display);
  font-size: clamp(1.7rem, 4.4vw, 3.1rem);
  font-weight: 800;
  line-height: 1.05;
  color: #fff;
  text-shadow: 0 2px 30px rgba(255,255,255,.08);
  margin-bottom: 0.8rem;
  letter-spacing: -.01em;
  text-transform: uppercase;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.hero-title .gold {
  color: transparent;
  background: linear-gradient(180deg, #f5cf7a 0%, #e6b34a 40%, #a47a23 100%);
  -webkit-background-clip: text; background-clip: text;
  text-shadow: 0 0 80px rgba(230,179,74,.25);
  -webkit-text-stroke: .5px rgba(255,220,140,.15);
}

.hero-description {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255,255,255,0.85);
  line-height: 1.55;
  margin-bottom: 1.5rem;
  letter-spacing: 0.01em;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.6rem;
  background: linear-gradient(180deg, #f8d888 0%, #e6b34a 55%, #c9952f 100%);
  color: #000;
  border: 1px solid rgba(255,230,170,.8);
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 30px rgba(230,179,74,0.5), 0 8px 28px rgba(230,179,74,0.35), inset 0 1px 0 rgba(255,255,255,.5);
  position: relative;
  overflow: hidden;
}

.cta-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, rgba(255,255,255,0.25), transparent);
  border-radius: 999px;
  z-index: -1;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(230,179,74,0.55);
  background: #f5cf7a;
}

.cta-btn:active {
  transform: translateY(0);
}

.cta-btn svg {
  stroke: currentColor;
  transition: transform 0.3s ease;
}

.cta-btn:hover svg {
  transform: translateX(4px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero {
    height: auto;
    min-height: 100vh;
    padding: 70px 0 3rem;
  }

  .hero-overlay {
    height: 80vh;
  }

  .glass-card {
    padding: 2rem 2rem;
    max-width: 90%;
    width: 80%;
    border-radius: 20px;
    margin-top: 0;
  }

  .glass-card-grid { grid-template-columns: 1fr; gap: 1.6rem }
  .glass-card-text { text-align: center }
  .glass-card-vis { height: 220px; order: -1 }

  .hero-title {
    font-size: clamp(1.6rem, 5vw, 3rem);
    margin-bottom: 0.7rem;
  }

  .hero-description {
    font-size: 0.88rem;
    margin-bottom: 1.4rem;
  }

  .eyebrow {
    margin-bottom: 0.8rem;
    font-size: 0.73rem;
  }

  .cta-btn {
    padding: 0.8rem 1.5rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .hero {
    height: auto;
    min-height: auto;
    padding: 70px 0 1.5rem;
  }

  .hero-overlay {
    height: auto;
    max-height: 70vh;
  }

  .glass-card {
    padding: 1.8rem 1.4rem;
    width: 90%;
    border-radius: 16px;
    margin-top: 0;
  }

  .glass-card-vis { height: 180px }

  .hero-title {
    font-size: clamp(1.3rem, 5vw, 2.2rem);
    margin-bottom: 0.6rem;
  }

  .hero-description {
    font-size: 0.85rem;
    margin-bottom: 1.2rem;
  }

  .eyebrow {
    font-size: 0.7rem;
    margin-bottom: 0.7rem;
  }

  .cta-btn {
    padding: 0.75rem 1.3rem;
    font-size: 0.78rem;
    gap: 0.5rem;
  }

  .cta-btn svg {
    width: 15px;
    height: 15px;
  }
}
</style>
