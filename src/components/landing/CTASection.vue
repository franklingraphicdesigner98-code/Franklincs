<template>
  <div id="contacto" class="glass-gold cta-card reveal">
        <span class="eyebrow" style="margin-bottom:1.4rem">{{ t('cta.eyebrow') }}</span>
        <h2 class="display h-cta">
          <span class="white">{{ t('cta.titleWhite1') }}</span> <span class="gold">{{ t('cta.titleGold') }}</span> <span class="white">{{ t('cta.titleWhite2') }}</span>
        </h2>
        <p class="lead">
          {{ t('cta.lead') }}
        </p>
        <div class="cta-btns">
          <a
            href="https://api.whatsapp.com/send/?phone=%2B573223003840&text=Hola%2C%20quiero%20iniciar%20un%20proyecto%20con%20Franklin&type=phone_number&app_absent=0"
            target="_blank" rel="noopener noreferrer"
            class="btn btn-gold"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
            {{ t('cta.whatsapp') }}
          </a>
          <a href="mailto:franklingraphicdesigner98@gmail.com" class="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            {{ t('cta.email') }}
          </a>
        </div>

        <div class="cta-socials">
          <a href="https://www.instagram.com/franklinp.cs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://www.behance.net/gallery/220454209/Portfolio" target="_blank" rel="noopener noreferrer" aria-label="Behance">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/franklin-pe%C3%B1a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
          </a>
          <a href="https://www.tiktok.com/@franklin_designer" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.55a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.98z"/></svg>
          </a>
        </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
.cta-card {
  height: 100%; box-sizing: border-box;
  padding: 3.5rem 3rem; text-align: center; position: relative; overflow: hidden;
  background:
    radial-gradient(700px 400px at 50% 100%, rgba(230,179,74,.25), transparent 65%),
    var(--glass-bg-strong);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
}
.h-cta { font-size: clamp(2rem, 3.6vw, 3rem); margin-bottom: 1.2rem }
.lead { margin: 0 auto 1.8rem; text-align: center; font-size: 1.05rem }
.cta-btns { display: flex; flex-wrap: wrap; gap: .85rem; justify-content: center }

.cta-socials { display: flex; gap: .6rem; justify-content: center; margin-top: 1.8rem }
.cta-socials a {
  width: 38px; height: 38px; border-radius: 10px; display: grid; place-items: center;
  border: 1px solid rgba(255,255,255,.12); color: var(--fg-dim);
  transition: all .2s ease;
}
.cta-socials a:hover { border-color: var(--gold); color: var(--gold); background: rgba(230,179,74,.1) }

@media (max-width: 720px) { .cta-card { padding: 3rem 1.5rem } }
@media (max-width: 480px) {
  .cta-card { padding: 2.5rem 1.2rem }
  .cta-btns { flex-direction: column; align-items: stretch }
  .cta-btns .btn { justify-content: center }
}
</style>
