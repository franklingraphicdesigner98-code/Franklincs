<template>
  <div id="marca" class="glass-gold brand-q-card reveal">
    <div class="brand-q-grid">
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
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
.brand-q-card {
  height: 100%; box-sizing: border-box;
  padding: 3.5rem 3rem; position: relative; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  background:
    linear-gradient(135deg, rgba(230,179,74,.08), transparent 40%),
    var(--glass-bg-strong);
}
.brand-q-grid { position: relative; text-align: center; max-width: 640px; margin: 0 auto }
.small-eyebrow { font-size: .85rem; letter-spacing: .2em; text-transform: uppercase; color: rgba(255,255,255,.85); margin-bottom: 1.2rem }
.h-q { font-size: clamp(1.8rem, 3.6vw, 3rem); margin-bottom: 1.2rem }
.h-q .line { display: block }
.h-q .question-mark { color: var(--gold); -webkit-text-stroke: 0; margin-left: .1em }
.accent-line { width: 80px; height: 3px; background: var(--gold); margin: 0 auto 1.4rem; border-radius: 2px; box-shadow: 0 0 12px var(--gold-glow) }
.answer { font-size: 1.1rem; color: #fff; font-weight: 300; line-height: 1.55; max-width: 42ch; margin: 0 auto }
.answer .gold { color: var(--gold); font-weight: 500 }

@media (max-width: 720px) {
  .brand-q-card { padding: 2.5rem 1.8rem }
}
@media (max-width: 480px) {
  .brand-q-card { padding: 1.8rem 1.2rem }
}
</style>
