<template>
  <nav :class="['nav', { scrolled: isScrolled }]">
    <div class="inner">
      <a href="#top" class="brand">
        <span class="dot"></span>
        <span class="b1">Franklin Peña</span>
        <span class="b2"> · Concept Studio</span>
      </a>

      <div class="nav-links">
        <a href="#servicios">{{ t('nav.servicios') }}</a>
        <a href="#proyectos">{{ t('nav.proyectos') }}</a>
        <a href="#contacto">{{ t('nav.contacto') }}</a>
        <LanguageSwitcher />
      </div>

      <!-- Mobile hamburger -->
      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="mobile-menu">
      <a href="#marca" @click="menuOpen=false">{{ t('nav.marca') }}</a>
      <a href="#servicios" @click="menuOpen=false">{{ t('nav.servicios') }}</a>
      <a href="#proyectos" @click="menuOpen=false">{{ t('nav.proyectos') }}</a>
      <a href="#proceso" @click="menuOpen=false">{{ t('nav.proceso') }}</a>
      <a href="#contacto" @click="menuOpen=false">{{ t('nav.contacto') }}</a>
      <div class="mobile-lang"><LanguageSwitcher /></div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './LanguageSwitcher.vue';

const { t } = useI18n();

const isScrolled = ref(false);
const menuOpen = ref(false);

const onScroll = () => { isScrolled.value = window.scrollY > 30; };

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
  background: rgba(8,8,8,.75);
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  border: 1px solid rgba(230,179,74,.25);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.1);
  transition: all .3s ease;
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
.nav-links { display: flex; align-items: center; gap: 2.2rem }
.nav-links a {
  font-size: .88rem; color: rgba(255,255,255,.7); font-weight: 500;
  transition: color .2s ease; position: relative; text-decoration: none;
}
.nav-links a:hover { color: #fff }
.nav-links a::after {
  content: ""; position: absolute; left: 0; bottom: -6px;
  width: 0; height: 1.5px; background: var(--gold);
  transition: width .25s ease; box-shadow: 0 0 8px var(--gold-glow);
}
.nav-links a:hover::after { width: 100% }

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

.mobile-menu {
  display: flex; flex-direction: column; gap: 0;
  position: fixed; top: 90px; left: 12px; right: 12px;
  background: rgba(8,8,8,.85); backdrop-filter: blur(20px);
  border: 1px solid rgba(230,179,74,.25);
  border-radius: 16px;
  padding: .5rem 0;
  box-shadow: 0 8px 32px rgba(0,0,0,.4);
}
.mobile-menu a {
  padding: .9rem 2rem; font-size: .95rem; color: rgba(255,255,255,.7);
  border-bottom: 1px solid rgba(255,255,255,.04);
  transition: color .2s, background .2s; text-decoration: none;
}
.mobile-menu a:last-child { border-bottom: none }
.mobile-menu a:hover { color: var(--gold); background: rgba(230,179,74,.08) }
.mobile-lang { padding: .9rem 2rem }

@media (max-width: 720px) {
  .nav-links { display: none }
  .save-btn { display: none }
  .hamburger { display: flex }
  .inner { padding: 0.9rem 20px }
}
@media (max-width: 480px) {
  .nav { padding: 0.8rem 0.8rem }
  .inner { padding: 0.85rem 16px }
  .mobile-menu a { padding: .85rem 1.4rem; font-size: .9rem }
  .brand { font-size: 0.95rem }
  .hamburger { width: 28px }
}
</style>
