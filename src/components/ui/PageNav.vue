<template>
  <!-- Barra flotante de las páginas internas: misma píldora de vidrio que el inicio (AppNav) -->
  <nav :class="['nav', { scrolled: isScrolled }]">
    <div class="inner">
      <router-link to="/" class="brand">
        <span class="dot"></span>
        <span class="b1">Franklin Peña</span>
        <span class="b2"> · Concept Studio</span>
      </router-link>

      <div class="nav-right">
        <LanguageSwitcher class="lang-desktop" />
        <router-link to="/" class="back">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          {{ t('nav.volver') }}
        </router-link>
        <!-- Móvil: hamburguesa con idioma, servicios y contacto -->
        <button :class="['hamburger', { open: menuOpen }]" @click="menuOpen = !menuOpen" :aria-label="t('nav.menu')" :aria-expanded="menuOpen">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <MobileMenu v-if="menuOpen" @close="menuOpen = false" />
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from '../landing/LanguageSwitcher.vue';
import MobileMenu from './MobileMenu.vue';

const { t } = useI18n();

const menuOpen = ref(false);
const isScrolled = ref(false);
const onScroll = () => { isScrolled.value = window.scrollY > 30; };
onMounted(() => { window.addEventListener('scroll', onScroll, { passive: true }); onScroll(); });
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<style scoped>
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 80;
  padding: 1.2rem 1.2rem;
  transition: padding .3s ease;
  pointer-events: none; /* solo la píldora recibe clics, no la franja transparente */
}
.nav.scrolled { padding: .85rem 1.2rem }
.inner {
  pointer-events: auto;
  position: relative;
  max-width: var(--container); margin: 0 auto; padding: .75rem .9rem .75rem 32px;
  display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  background:
    radial-gradient(ellipse 30% 120% at 50% 100%, rgba(230,179,74,.12), transparent 70%),
    rgba(12,10,6,.4);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  border: 1px solid rgba(245,207,122,.45);
  border-radius: 999px;
  box-shadow:
    0 8px 32px rgba(0,0,0,.4),
    0 0 24px rgba(230,179,74,.12),
    inset 0 1px 0 rgba(255,240,210,.2);
}
/* Línea de luz dorada bajo la barra */
.inner::after {
  content: ""; position: absolute; left: 32%; right: 32%; bottom: -1px; height: 2px;
  pointer-events: none; border-radius: 2px;
  background: linear-gradient(90deg, transparent, #f5cf7a, transparent);
  box-shadow: 0 0 16px 3px rgba(230,179,74,.45);
}

.brand {
  display: flex; align-items: center; gap: .5rem; min-width: 0;
  font-weight: 600; font-size: 1.05rem; letter-spacing: -.01em; white-space: nowrap;
  transition: opacity .2s ease;
}
.brand:hover { opacity: .8 }
.brand .b1 { color: #fff }
.brand .b2 { color: var(--gold) }
.brand .dot {
  width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
  background: linear-gradient(135deg, #f5cf7a, #a47a23);
  box-shadow: 0 0 14px var(--gold-glow); margin-right: .25rem;
}

.nav-right { display: flex; align-items: center; gap: 1rem; flex-shrink: 0 }
.back {
  display: inline-flex; align-items: center; gap: .45rem;
  padding: .55rem 1rem; border-radius: 999px;
  background: linear-gradient(135deg, #f5cf7a, #e6b34a 50%, #b8862c);
  color: #1a1207; font-weight: 700; font-size: .8rem; letter-spacing: .04em;
  box-shadow: 0 6px 18px rgba(230,179,74,.35), inset 0 1px 0 rgba(255,255,255,.35);
  transition: all .25s ease;
}
.back svg { transition: transform .25s ease }
@media (hover: hover) and (pointer: fine) {
  .back:hover { box-shadow: 0 10px 26px rgba(230,179,74,.55), inset 0 1px 0 rgba(255,255,255,.4) }
  .back:hover svg { transform: translateX(-3px) }
}

.hamburger {
  display: none; flex-direction: column; gap: 5px;
  width: 28px; padding: .3rem 0; cursor: pointer;
}
.hamburger span {
  display: block; height: 2px; background: var(--fg-dim); border-radius: 2px;
  transition: transform .25s ease, opacity .2s ease, background .2s;
}
.hamburger.open span { background: var(--gold) }
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg) }
.hamburger.open span:nth-child(2) { opacity: 0 }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg) }

/* Móvil: misma píldora flotante, más compacta; el idioma pasa al menú */
@media (max-width: 720px) {
  .inner { padding: .6rem 1rem .6rem 20px }
  .brand .b2 { display: none }
  .lang-desktop { display: none }
  .hamburger { display: flex }
  .nav-right { gap: .9rem }
  .back { padding: .5rem .85rem; font-size: .75rem }
}
@media (max-width: 480px) {
  .nav { padding: .8rem .8rem }
  .nav.scrolled { padding: .6rem .8rem }
  .inner { padding: .5rem .9rem .5rem 16px }
  .brand { font-size: .95rem }
}
</style>
