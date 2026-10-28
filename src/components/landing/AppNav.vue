<template>
  <nav :class="['nav', { scrolled: isScrolled }]">
    <div class="inner">
      <a href="#top" class="brand">
        <span class="dot"></span>
        <span class="b1">Franklin Peña</span>
        <span class="b2"> · Concept Studio</span>
      </a>

      <div class="nav-links">
        <a href="#direcciones" class="nav-cta" @click.prevent="goToServices">{{ t('nav.direcciones') }}</a>
        <LanguageSwitcher />
      </div>

      <!-- Mobile hamburger -->
      <button :class="['hamburger', { open: menuOpen }]" @click="menuOpen = !menuOpen" :aria-label="t('nav.menu')" :aria-expanded="menuOpen">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile menu: idioma, servicios y contacto -->
    <MobileMenu v-if="menuOpen" @close="menuOpen = false" />
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './LanguageSwitcher.vue';
import MobileMenu from '../ui/MobileMenu.vue';

const { t } = useI18n();

const isScrolled = ref(false);
const menuOpen = ref(false);

const onScroll = () => { isScrolled.value = window.scrollY > 30; };

// Baja hasta la cuadrícula de servicios (el espacio para la barra lo da scroll-margin-top en .spec-grid)
const goToServices = () => {
  document.getElementById('direcciones')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<style scoped>
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 80;
  transition: padding .3s ease;
  background: transparent;
  padding: 1.2rem 1.2rem;
}
.nav.scrolled {
  padding: 0.85rem 1.2rem;
}
.inner {
  display: flex; align-items: center; justify-content: space-between;
  max-width: var(--container); margin: 0 auto; padding: 1rem 32px;
  position: relative;
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
  transition: all .3s ease;
}
/* Línea de luz dorada bajo la barra */
.inner::after {
  content: ""; position: absolute; left: 32%; right: 32%; bottom: -1px; height: 2px;
  pointer-events: none; border-radius: 2px;
  background: linear-gradient(90deg, transparent, #f5cf7a, transparent);
  box-shadow: 0 0 16px 3px rgba(230,179,74,.45);
}
.brand {
  display: flex; align-items: center; gap: .5rem;
  font-weight: 600; font-size: 1.05rem; letter-spacing: -.01em;
  text-decoration: none;
  transition: opacity .2s ease;
}
.brand:hover { opacity: .8 }
.brand .b1 { color: #fff }
.brand .b2 { color: var(--gold) }
.brand .dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: linear-gradient(135deg, #f5cf7a, #a47a23);
  box-shadow: 0 0 14px var(--gold-glow); margin-right: .25rem;
}
.nav-links { display: flex; align-items: center; gap: 1.6rem }
/* Botón "Direcciones creativas": baja hasta la cuadrícula de servicios */
.nav-cta {
  display: inline-flex; align-items: center;
  padding: .5rem 1.15rem; border-radius: 999px;
  background: linear-gradient(135deg, #f5cf7a, #e6b34a 50%, #b8862c);
  color: #1a1207; font-size: .82rem; font-weight: 700; letter-spacing: .04em;
  box-shadow: 0 6px 18px rgba(230,179,74,.35), inset 0 1px 0 rgba(255,255,255,.35);
  transition: box-shadow .25s ease, transform .25s ease;
}
@media (hover: hover) and (pointer: fine) {
  .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 10px 26px rgba(230,179,74,.55), inset 0 1px 0 rgba(255,255,255,.4) }
}

.save-btn {
  display: inline-flex; align-items: center; gap: .6rem;
  padding: .65rem 1.4rem;
  background: linear-gradient(135deg, rgba(245,207,122,.15), rgba(255,255,255,.05));
  border: 1px solid rgba(230,179,74,.4);
  border-radius: 999px;
  color: var(--gold);
  font-size: .85rem; font-weight: 600; letter-spacing: .05em;
  text-decoration: none;
  cursor: pointer;
  transition: all .2s ease;
  text-transform: uppercase;
}
.save-btn:hover {
  background: linear-gradient(135deg, rgba(245,207,122,.25), rgba(255,255,255,.1));
  border-color: var(--gold);
  box-shadow: 0 6px 16px rgba(230,179,74,.2);
}
.save-btn svg {
  width: 16px; height: 16px; stroke: currentColor; stroke-width: 2;
}

.hamburger {
  display: none; flex-direction: column; gap: 5px;
  width: 32px; cursor: pointer;
}
.hamburger span {
  display: block; height: 2px; background: var(--fg-dim);
  border-radius: 2px; transition: background .2s;
}
.hamburger:hover span { background: var(--gold) }
/* Hamburguesa → X cuando el menú está abierto */
.hamburger span { transition: transform .25s ease, opacity .2s ease, background .2s }
.hamburger.open span { background: var(--gold) }
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg) }
.hamburger.open span:nth-child(2) { opacity: 0 }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg) }

@media (max-width: 720px) {
  .nav-links { display: none }
  .save-btn { display: none }
  .hamburger { display: flex }
  .inner { padding: 0.9rem 20px }
}
@media (max-width: 480px) {
  .nav { padding: 0.8rem 0.8rem }
  .inner { padding: 0.85rem 16px }
  .brand { font-size: 0.95rem }
  .hamburger { width: 28px }
}
</style>
