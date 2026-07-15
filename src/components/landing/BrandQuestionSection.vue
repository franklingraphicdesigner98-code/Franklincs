<template>
  <section class="s brand-q" id="marca">
    <div class="container">
      <div class="glass-gold brand-q-card reveal">
        <div class="brand-q-grid">
          <div>
            <p class="small-eyebrow">{{ t('brandQuestion.eyebrow') }}</p>
            <h2 class="display h-q">
              <span class="line"><span class="white" style="font-size:.45em;letter-spacing:.15em">{{ t('brandQuestion.q1') }}</span></span>
              <span class="line"><span class="gold">{{ t('brandQuestion.q2') }}</span></span>
              <span class="line"><span class="white" style="font-size:.45em;letter-spacing:.15em">{{ t('brandQuestion.q3') }}</span></span>
              <span class="line"><span class="gold">{{ t('brandQuestion.q4') }}<span class="question-mark">?</span></span></span>
            </h2>
            <div class="accent-line"></div>
            <p class="answer">
              {{ t('brandQuestion.answer1') }}
              <span class="gold">{{ t('brandQuestion.answerGold') }}</span>
              {{ t('brandQuestion.answer2') }}
            </p>
          </div>
          <div class="strategy-vis">
            <img
              v-for="(src, idx) in moments" :key="src"
              :src="src" alt="Franklin Peña Concept Studio"
              :class="['moments-frame', { active: idx === frame % moments.length }]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

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
.brand-q { position: relative; padding: 6rem 0 }
.brand-q-card {
  padding: 4rem 3.5rem; position: relative; overflow: hidden;
  background:
    linear-gradient(135deg, rgba(230,179,74,.08), transparent 40%),
    var(--glass-bg-strong);
}
.brand-q-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 3rem; align-items: center; position: relative }
.small-eyebrow { font-size: .85rem; letter-spacing: .2em; text-transform: uppercase; color: rgba(255,255,255,.85); margin-bottom: 1.2rem }
.h-q { font-size: clamp(1.8rem, 3.6vw, 3rem); margin-bottom: 1.2rem }
.h-q .line { display: block }
.h-q .question-mark { color: var(--gold); -webkit-text-stroke: 0; margin-left: .1em }
.accent-line { width: 80px; height: 3px; background: var(--gold); margin-bottom: 1.4rem; border-radius: 2px; box-shadow: 0 0 12px var(--gold-glow) }
.answer { font-size: 1.1rem; color: #fff; font-weight: 300; line-height: 1.55; max-width: 42ch }
.answer .gold { color: var(--gold); font-weight: 500 }

.strategy-vis {
  position: relative; height: 380px; overflow: hidden;
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
.strategy-vis::after {
  content: ""; position: absolute; inset: 0; z-index: 1; pointer-events: none;
  background: linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,.55) 100%);
}

@media (max-width: 1100px) {
  .brand-q-grid { grid-template-columns: 1fr; gap: 2rem }
  .strategy-vis { height: 300px }
}
@media (max-width: 720px) {
  .brand-q-card { padding: 2.5rem 1.8rem }
}
@media (max-width: 480px) {
  .brand-q-card { padding: 1.8rem 1.2rem }
  .strategy-vis { height: 220px }
}
</style>
