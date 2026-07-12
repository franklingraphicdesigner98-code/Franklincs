<template>
  <section class="s clients-strip">
    <div class="container">
      <div class="glass-gold clients-panel reveal">
        <span class="eyebrow">Marcas</span>
        <h2 class="display clients-title">
          <span class="white">MARCAS CON LAS QUE</span> <span class="gold">HEMOS COLABORADO</span>
        </h2>
        <div class="clients-row">
          <div v-for="(c, i) in clients" :key="i" class="client-logo">
            <img :src="c.image" :alt="c.name" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const clients = [
  { name: 'Coomult Agro', image: '/img/logo_coomultagro-02.png' },
  { name: 'Cam Network', image: '/img/logo_cam.png' },
  { name: 'El Vaquero', image: '/img/logo_elvaquero.png' },
  { name: 'Fortress', image: '/img/logo_fortress.png' },
  { name: 'Maicao', image: '/img/logo_maicao.png' },
  { name: 'B&P Seguros', image: '/img/logotipo.png' },
];
</script>

<style scoped>
.clients-strip { padding: 3rem 0 6rem }

.clients-panel {
  padding: 3.5rem 3rem 3.8rem;
  text-align: center;
  display: flex; flex-direction: column; align-items: center;
  background: linear-gradient(135deg, rgba(230,179,74,.08), rgba(255,255,255,.02) 60%), rgba(255,255,255,.1);
  backdrop-filter: blur(28px) saturate(160%);
  -webkit-backdrop-filter: blur(28px) saturate(160%);
}

.clients-title {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  margin: 1rem 0 2.6rem;
}

.clients-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.2rem 1.4rem;
}

.client-logo {
  flex: 0 0 auto;
  background: #fff;
  border-radius: 12px;
  padding: .8rem 1.6rem;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 10px 26px rgba(0,0,0,.25);
}
.client-logo img { height: 36px; width: auto; object-fit: contain; display: block }

@media (max-width: 720px) {
  .clients-strip { padding: 2rem 0 4rem }
  .clients-panel { padding: 2.4rem 1.5rem 2.8rem }
  .clients-title { margin: .8rem 0 1.8rem }
  .clients-row { gap: 1rem }
  .client-logo { padding: .6rem 1.2rem }
  .client-logo img { height: 28px }
}
</style>
