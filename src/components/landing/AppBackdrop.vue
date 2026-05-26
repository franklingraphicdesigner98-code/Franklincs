<template>
  <div class="backdrop"></div>
  <div class="grid-overlay"></div>
  <div class="grain"></div>
  <div ref="particlesRef" class="particles"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const particlesRef = ref(null);

onMounted(() => {
  const wrap = particlesRef.value;
  if (!wrap) return;
  const count = window.innerWidth > 900 ? 24 : 12;
  for (let i = 0; i < count; i++) {
    const d = document.createElement('span');
    d.style.left = Math.random() * 100 + '%';
    d.style.bottom = (-10 + Math.random() * 30) + '%';
    d.style.animationDuration = (16 + Math.random() * 18) + 's';
    d.style.animationDelay = (-Math.random() * 24) + 's';
    d.style.opacity = (0.3 + Math.random() * 0.4).toString();
    const size = 2 + Math.random() * 2.5;
    d.style.width = size + 'px';
    d.style.height = size + 'px';
    wrap.appendChild(d);
  }
});
</script>

<style scoped>
.backdrop {
  position: fixed; inset: 0; z-index: -2;
  background:
    radial-gradient(900px 700px at 85% -5%, rgba(230,179,74,.18), transparent 60%),
    radial-gradient(700px 600px at -10% 50%, rgba(230,179,74,.08), transparent 65%),
    radial-gradient(900px 600px at 110% 105%, rgba(230,179,74,.12), transparent 65%),
    linear-gradient(180deg, #000 0%, #0a0a0a 50%, #050505 100%);
  background-size: 200% 200%, 200% 200%, 200% 200%, 100% 100%;
  animation: bgshift 24s ease-in-out infinite alternate;
}
.grid-overlay {
  position: fixed; inset: 0; z-index: -1; pointer-events: none;
  background-image:
    linear-gradient(rgba(230,179,74,.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(230,179,74,.05) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse at 50% 30%, #000 0%, #000 50%, transparent 90%);
  -webkit-mask-image: radial-gradient(ellipse at 50% 30%, #000 0%, #000 50%, transparent 90%);
  opacity: .7;
}
.grain {
  position: fixed; inset: 0; z-index: -1; pointer-events: none; opacity: .06;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 .8 0 0 0 0 .3 0 0 0 .5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
  mix-blend-mode: overlay;
}
.particles { position: fixed; inset: 0; z-index: -1; pointer-events: none; overflow: hidden }
.particles :deep(span) {
  position: absolute; border-radius: 50%;
  background: #f5cf7a;
  box-shadow: 0 0 12px rgba(230,179,74,.55), 0 0 24px rgba(230,179,74,.3);
  animation: floatUp 24s linear infinite;
  opacity: .6;
}
</style>
