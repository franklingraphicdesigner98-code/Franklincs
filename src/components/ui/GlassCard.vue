<template>
  <component :is="rootTag" v-bind="rootAttrs" :class="['gcard', { 'gcard--muted': muted }]">
    <div v-if="frames[0]" class="gcard-media" :style="{ aspectRatio: ratio }">
      <img
        v-for="(src, i) in frames" :key="src"
        :src="src" :alt="alt || title" loading="lazy"
        :class="{ 'gcard-frame': frames.length > 1, active: i === frame % frames.length }"
      />
      <!-- Elementos sobre la imagen (p. ej. botón de play) -->
      <slot name="media" />
    </div>
    <div class="gcard-body">
      <!-- Contenido por defecto; se puede reemplazar con el slot por defecto -->
      <slot>
        <span v-if="category" class="gcard-cat">{{ category }}</span>
        <h3 class="gcard-title">{{ title }}</h3>
        <p v-if="description" class="gcard-desc">{{ description }}</p>
        <span v-if="cta" class="gcard-cta">
          {{ cta }}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </span>
      </slot>
    </div>
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  href: { type: String, default: '' },          // enlace externo (abre en pestaña nueva)
  to: { type: [String, Object], default: '' },  // ruta interna
  image: { type: String, default: '' },          // opcional: sin imagen la tarjeta es solo texto
  images: { type: Array, default: () => [] },   // varias imágenes → carrusel con `frame`
  frame: { type: Number, default: 0 },
  alt: { type: String, default: '' },
  category: { type: String, default: '' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  cta: { type: String, default: '' },
  ratio: { type: String, default: '4 / 3' },
  muted: { type: Boolean, default: true }       // imagen algo apagada hasta el hover
});

const frames = computed(() => (props.images.length ? props.images : [props.image]));

const rootTag = computed(() => (props.href ? 'a' : props.to ? RouterLink : 'article'));
const rootAttrs = computed(() => {
  if (props.href) return { href: props.href, target: '_blank', rel: 'noopener noreferrer' };
  if (props.to) return { to: props.to };
  return {};
});
</script>

<style scoped>
/* Glassmorphism: vidrio ahumado con canto de luz dorado */
.gcard {
  position: relative; border-radius: var(--r-lg); overflow: hidden;
  isolation: isolate; min-width: 0;
  display: flex; flex-direction: column;
  color: inherit; text-decoration: none; cursor: pointer;
  transition: transform .4s ease, box-shadow .4s ease;
  background:
    radial-gradient(ellipse 60% 30% at 0% 70%, rgba(230,179,74,.12), transparent 70%),
    radial-gradient(ellipse 50% 25% at 50% 100%, rgba(230,179,74,.1), transparent 70%),
    rgba(12,10,6,.35);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  box-shadow: 0 25px 60px rgba(0,0,0,.5), 0 0 40px rgba(230,179,74,.06);
}
/* Canto del vidrio: borde degradado dorado / plateado (por encima de la imagen) */
.gcard::before {
  content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
  z-index: 3; padding: 1px;
  background: linear-gradient(135deg, rgba(245,207,122,.95) 0%, rgba(255,255,255,.28) 22%, rgba(255,255,255,.12) 55%, rgba(245,207,122,.55) 100%);
  -webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000);
  mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000);
  -webkit-mask-composite: xor; mask-composite: exclude;
}
/* Destello de luz dorada en el borde inferior */
.gcard::after {
  content: ""; position: absolute; left: 25%; right: 25%; bottom: 0; height: 2px;
  pointer-events: none; border-radius: 2px; z-index: 3;
  background: linear-gradient(90deg, transparent, #f5cf7a, transparent);
  box-shadow: 0 0 18px 3px rgba(230,179,74,.45);
}

.gcard-media { position: relative; overflow: hidden; flex-shrink: 0 }
.gcard-media img {
  position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
  transition: transform .8s ease, filter .4s ease, opacity 1.2s ease;
}
.gcard--muted .gcard-media img { filter: saturate(.9) brightness(.85) }
.gcard-media img.gcard-frame { opacity: 0 }
.gcard-media img.gcard-frame.active { opacity: 1 }

.gcard-body {
  flex: 1; display: flex; flex-direction: column; align-items: flex-start;
  padding: 1.4rem 1.6rem 1.6rem;
  overflow-wrap: anywhere;
}
.gcard-media + .gcard-body { border-top: 1px solid rgba(245,207,122,.18) }
.gcard-cat { color: var(--gold); font-size: .7rem; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; margin-bottom: .6rem }
.gcard-title { font-family: var(--f-display); font-weight: 400; font-size: 1.4rem; line-height: 1.1; letter-spacing: .02em; text-transform: uppercase; margin: 0 0 .5rem; color: #fff; transition: color .25s ease }
.gcard-desc { color: var(--fg-dim); font-size: .9rem; line-height: 1.55; margin: 0 0 1.2rem }
.gcard-cta { margin-top: auto; display: inline-flex; align-items: center; gap: .5rem; color: var(--gold); font-size: .85rem; font-weight: 600; letter-spacing: .04em; transition: gap .25s ease }

/* Hover solo en dispositivos con puntero, para no exigir doble toque en iOS */
@media (hover: hover) and (pointer: fine) {
  .gcard:hover { transform: translateY(-6px); box-shadow: 0 30px 70px rgba(0,0,0,.55), 0 0 50px rgba(230,179,74,.18) }
  .gcard:hover .gcard-media img { transform: scale(1.06) }
  .gcard--muted:hover .gcard-media img { filter: saturate(1.1) brightness(1) }
  .gcard:hover .gcard-title { color: var(--gold-2) }
  .gcard:hover .gcard-cta { gap: .85rem }
}
</style>
