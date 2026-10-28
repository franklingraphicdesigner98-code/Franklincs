<template>
  <section class="s especialidades" id="servicios">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow reveal">{{ t('services.eyebrow') }}</span>
        <h2 class="display reveal reveal-1" style="font-size:clamp(2rem, 4vw, 3rem)">
          <span class="white">{{ t('services.titleWhite') }}</span><br /><span class="gold">{{ t('services.titleGold') }}</span>
        </h2>
        <p class="lead reveal reveal-2">
          {{ t('services.lead') }}
        </p>
      </div>

      <div id="direcciones" class="spec-grid">
        <GlassCard
          v-for="(s, i) in services" :key="s.id"
          :to="s.link" :image="s.image" ratio="16 / 10" :muted="false"
          :alt="t(`services.items.${s.key}.titleLine1`)"
          :class="['spec-card reveal', i > 0 && `reveal-${i}`]"
        >
          <h3>{{ t(`services.items.${s.key}.titleLine1`) }}<br/><span class="gold">{{ t(`services.items.${s.key}.titleLine2`) }}</span></h3>
          <div class="card-includes">
            <span class="includes-desc">{{ t(`services.items.${s.key}.description`) }}</span>
            <span class="includes-list">{{ tm(`services.items.${s.key}.includes`).join(' · ') }}</span>
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import GlassCard from '../ui/GlassCard.vue';
const { t, tm } = useI18n();

const services = [
  { id: 2, key: 'identidad', link: '/identidad-marca', image: '/img/Portada_identidad.png' },
  { id: 1, key: 'diseno', link: '/diseno-grafico', image: '/img/Portada-diseño.jpg' },
  { id: 3, key: 'empaques', link: '/diseno-empaques', image: '/img/Project 2.jpg' },
  { id: 4, key: 'impresion', link: '/impresion-3d', image: '/img/Impresion 3d.jpg' },
  { id: 5, key: 'web', link: '/desarrollo-software', image: '/img/portada_Paginas web.jpg' },
  { id: 6, key: 'ia', link: '/ia-creativa', image: '/img/hero-hands.jpg' }
];
</script>

<style scoped>
.especialidades { padding: 4rem 0 }

.especialidades .section-head { margin-bottom: 2.5rem }

.spec-grid {
  scroll-margin-top: 110px; /* al llegar desde el botón de la barra, que no la tape */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* El vidrio, el canto dorado y el hover vienen de GlassCard */
.spec-card { min-height: 480px }

.spec-card h3 {
  align-self: stretch;
  font-family: var(--f-display);
  font-size: 1.7rem;
  font-weight: 400;
  letter-spacing: .005em;
  color: #fff;
  text-shadow: 0 2px 30px rgba(255,255,255,.08);
  margin: 0 0 0.8rem;
  line-height: 1.05;
  text-transform: uppercase;
  text-align: center;
}

.spec-card h3 .gold {
  color: transparent;
  background: linear-gradient(180deg, #f5cf7a 0%, #e6b34a 40%, #a47a23 100%);
  -webkit-background-clip: text; background-clip: text;
  text-shadow: 0 0 80px rgba(230,179,74,.25);
  -webkit-text-stroke: .5px rgba(255,220,140,.15);
}

.card-includes {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding-top: 0.9rem;
  margin-top: 0.2rem;
  border-top: 1px solid rgba(230,179,74,.15);
}

.includes-desc {
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--gold);
}

.includes-list {
  font-size: 0.82rem;
  color: rgba(255,255,255,.6);
  line-height: 1.55;
}

/* 6 servicios: 3 + 3 en escritorio */
@media (max-width: 1100px) {
  .spec-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 720px) {
  .especialidades { padding: 3rem 0 }

  .especialidades .section-head { margin-bottom: 2rem }

  .spec-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .spec-card {
    min-height: 380px;
  }

  .spec-card h3 {
    font-size: 1.5rem;
    margin-bottom: 0.7rem;
  }

  .includes-list {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .spec-card {
    min-height: 360px;
  }

  .spec-card h3 {
    font-size: 1.35rem;
    margin-bottom: 0.6rem;
  }

  .card-includes {
    padding-top: 0.7rem;
    margin-top: 0.15rem;
  }
}
</style>
