<template>
  <footer class="foot">
    <div class="inner">
      <small>{{ t('footer.copyright') }}</small>
      <nav>
        <a href="#servicios">{{ t('nav.servicios') }}</a>
        <a href="#proyectos">{{ t('nav.proyectos') }}</a>
        <a href="#proceso">{{ t('nav.proceso') }}</a>
        <a href="#contacto">{{ t('nav.contacto') }}</a>
      </nav>
      <div class="socials">
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
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
.foot {
  border-top: 1px solid rgba(255,255,255,.06); padding: 2.5rem 0 2rem; margin-top: 3rem;
  background: rgba(0,0,0,.4);
}
.inner {
  max-width: var(--container); margin: 0 auto; padding: 0 32px;
  display: flex; flex-wrap: wrap; gap: 2rem; align-items: center; justify-content: space-between;
}
.foot nav { display: flex; gap: 1.6rem; flex-wrap: wrap }
.foot nav a { font-size: .88rem; color: var(--fg-dim); transition: color .2s }
.foot nav a:hover { color: var(--gold) }
.foot small { font-size: .82rem; color: var(--fg-mute) }
.socials { display: flex; gap: .5rem }
.socials a {
  width: 38px; height: 38px; border-radius: 10px; display: grid; place-items: center;
  border: 1px solid rgba(255,255,255,.1); color: var(--fg-dim);
  transition: all .2s ease;
}
.socials a:hover { border-color: var(--gold); color: var(--gold); background: rgba(230,179,74,.1) }
</style>
