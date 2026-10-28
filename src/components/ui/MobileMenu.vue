<template>
  <!-- Menú de la hamburguesa (solo móvil): idioma, servicios y contacto -->
  <div class="mobile-menu" role="menu">
    <div class="mm-row">
      <span class="mm-label">{{ t('nav.idioma') }}</span>
      <LanguageSwitcher />
    </div>

    <span class="mm-label mm-section">{{ t('nav.direcciones') }}</span>
    <router-link
      v-for="s in services" :key="s.key"
      :to="s.to" class="mm-link" role="menuitem"
      @click="emit('close')"
    >
      {{ t(`nav.menuServicios.${s.key}`) }}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </router-link>

    <router-link :to="{ path: '/', hash: '#contacto' }" class="mm-contact" role="menuitem" @click="emit('close')">
      {{ t('nav.contacto') }}
    </router-link>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from '../landing/LanguageSwitcher.vue';

const emit = defineEmits(['close']);
const { t } = useI18n();

const services = [
  { key: 'identidad', to: '/identidad-marca' },
  { key: 'diseno', to: '/diseno-grafico' },
  { key: 'empaques', to: '/diseno-empaques' },
  { key: 'impresion', to: '/impresion-3d' },
  { key: 'web', to: '/desarrollo-software' },
  { key: 'ia', to: '/ia-creativa' }
];
</script>

<style scoped>
.mobile-menu {
  position: fixed; top: 84px; left: 12px; right: 12px; z-index: 90;
  pointer-events: auto; /* PageNav desactiva los clics en su franja transparente */
  max-height: calc(100vh - 100px); overflow-y: auto;
  display: flex; flex-direction: column;
  padding: .6rem 0 .9rem;
  background: rgba(10,8,5,.88);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border: 1px solid rgba(245,207,122,.35);
  border-radius: 20px;
  box-shadow: 0 16px 40px rgba(0,0,0,.5), 0 0 24px rgba(230,179,74,.1), inset 0 1px 0 rgba(255,240,210,.12);
}
.mm-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: .7rem 1.4rem .8rem;
  border-bottom: 1px solid rgba(255,255,255,.06);
}
.mm-label { color: var(--gold); font-size: .68rem; font-weight: 700; letter-spacing: .18em; text-transform: uppercase }
.mm-section { padding: 1rem 1.4rem .4rem }
.mm-link {
  display: flex; align-items: center; justify-content: space-between;
  padding: .8rem 1.4rem; font-size: .95rem; color: rgba(255,255,255,.8);
  border-bottom: 1px solid rgba(255,255,255,.04);
  transition: color .2s, background .2s;
}
.mm-link svg { color: var(--gold); opacity: .7 }
.mm-link:hover, .mm-link.router-link-active { color: var(--gold); background: rgba(230,179,74,.08) }
.mm-contact {
  margin: 1rem 1.4rem 0; padding: .8rem 1rem; border-radius: 999px; text-align: center;
  background: linear-gradient(135deg, #f5cf7a, #e6b34a 50%, #b8862c);
  color: #1a1207; font-weight: 700; font-size: .9rem; letter-spacing: .04em;
  box-shadow: 0 6px 18px rgba(230,179,74,.35), inset 0 1px 0 rgba(255,255,255,.35);
}

@media (max-width: 480px) {
  .mobile-menu { top: 72px; left: 8px; right: 8px }
}
</style>
