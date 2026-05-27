<template>
  <nav :class="['nav', { scrolled: isScrolled }]">
    <div class="inner">
      <a href="#top" class="brand">
        <span class="dot"></span>
        <span class="b1">Franklin Peña</span>
        <span class="b2"> · Concept Studio</span>
      </a>

      <div class="nav-links">
        <a href="#marca">Marca</a>
        <a href="#servicios">Servicios</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#proceso">Proceso</a>
        <a href="#contacto">Contacto</a>
      </div>

      <a href="#contacto" class="save-btn">
        Guarda
        <svg viewBox="0 0 24 24"><path d="M6 2h12a1 1 0 0 1 1 1v19l-7-4-7 4V3a1 1 0 0 1 1-1z"/></svg>
      </a>

      <!-- Mobile hamburger -->
      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="mobile-menu">
      <a href="#marca" @click="menuOpen=false">Marca</a>
      <a href="#servicios" @click="menuOpen=false">Servicios</a>
      <a href="#proyectos" @click="menuOpen=false">Proyectos</a>
      <a href="#proceso" @click="menuOpen=false">Proceso</a>
      <a href="#contacto" @click="menuOpen=false">Contacto</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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
  transition: background .3s ease, border-color .3s ease, padding .3s ease;
  background: transparent; border-bottom: 1px solid transparent; padding: 1.4rem 0;
}
.nav.scrolled {
  background: rgba(8,8,8,.78);
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border-bottom: 1px solid rgba(230,179,74,.12);
  padding: .85rem 0;
}
.inner {
  display: flex; align-items: center; justify-content: space-between;
  max-width: var(--container); margin: 0 auto; padding: 0 32px;
}
.brand {
  display: flex; align-items: center; gap: .5rem;
  font-weight: 600; font-size: 1.05rem; letter-spacing: -.01em;
}
.brand .b1 { color: #fff }
.brand .b2 { color: var(--gold) }
.brand .dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: linear-gradient(135deg, #f5cf7a, #a47a23);
  box-shadow: 0 0 14px var(--gold-glow); margin-right: .25rem;
}
.nav-links { display: flex; align-items: center; gap: 2.2rem }
.nav-links a {
  font-size: .88rem; color: var(--fg-dim); font-weight: 500;
  transition: color .2s ease; position: relative;
}
.nav-links a:hover { color: #fff }
.nav-links a::after {
  content: ""; position: absolute; left: 0; bottom: -6px;
  width: 0; height: 1.5px; background: var(--gold);
  transition: width .25s ease; box-shadow: 0 0 8px var(--gold-glow);
}
.nav-links a:hover::after { width: 100% }

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
  background: rgba(8,8,8,.95); backdrop-filter: blur(18px);
  border-top: 1px solid rgba(230,179,74,.12); padding: .5rem 0;
}
.mobile-menu a {
  padding: .9rem 2rem; font-size: .95rem; color: var(--fg-dim);
  border-bottom: 1px solid rgba(255,255,255,.04);
  transition: color .2s, background .2s;
}
.mobile-menu a:hover { color: var(--gold); background: rgba(230,179,74,.04) }

@media (max-width: 720px) {
  .nav-links { display: none }
  .save-btn { display: none }
  .hamburger { display: flex }
}
</style>
