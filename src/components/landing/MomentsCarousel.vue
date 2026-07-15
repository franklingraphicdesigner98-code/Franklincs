<template>
  <div class="moments-carousel">
    <img
      v-for="(src, idx) in moments" :key="src"
      :src="src" :alt="alt"
      :class="['moments-frame', { active: idx === frame % moments.length }]"
      loading="lazy"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
  alt: { type: String, default: 'Franklin Peña Concept Studio' }
});

const moments = [
  '/img/Momentos1.jpg', '/img/Momentos2.jpg', '/img/Momentos3.jpg', '/img/Momentos4.jpg',
  '/img/Momentos5.jpg', '/img/Momentos6.jpg', '/img/Momentos7.jpg', '/img/Momentos8.jpg',
  '/img/Momentos9.jpg', '/img/Momentos10.jpg', '/img/Momentos11.jpg', '/img/Momentos12.jpg',
];

const frame = ref(0);
let momentsTimer = null;
onMounted(() => { momentsTimer = setInterval(() => { frame.value++; }, 1000); });
onUnmounted(() => clearInterval(momentsTimer));
</script>

<style scoped>
.moments-carousel {
  position: relative; width: 100%; height: 100%; overflow: hidden;
  border-radius: var(--r-lg); isolation: isolate;
  border: 1px solid rgba(230,179,74,.2);
  box-shadow: 0 20px 50px rgba(0,0,0,.4);
}
.moments-frame {
  position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
  opacity: 0; transform: scale(1.03);
  transition: opacity 1s ease, transform 1.2s ease;
}
.moments-frame.active { opacity: 1; transform: scale(1) }
.moments-carousel::after {
  content: ""; position: absolute; inset: 0; z-index: 1; pointer-events: none;
  background: linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,.55) 100%);
}
</style>
