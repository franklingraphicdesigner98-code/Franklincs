<template>
  <section class="s brand-q" id="marca">
    <div class="container">
      <div class="glass-gold brand-q-card reveal">
        <div class="brand-q-grid">
          <div>
            <p class="small-eyebrow">Identidad · Estrategia visual</p>
            <h2 class="display h-q">
              <span class="line"><span class="white" style="font-size:.45em;letter-spacing:.15em">¿Qué hace que una</span></span>
              <span class="line"><span class="gold">Marca</span></span>
              <span class="line"><span class="white" style="font-size:.45em;letter-spacing:.15em">se vea</span></span>
              <span class="line"><span class="gold">Profesional<span class="question-mark">?</span></span></span>
            </h2>
            <div class="accent-line"></div>
            <p class="answer">
              No es cuestión de gustos, es cuestión de
              <span class="gold">estrategia visual.</span>
              Construimos sistemas de identidad que no solo se ven bien — funcionan, escalan y elevan la percepción de tu marca en cada punto de contacto.
            </p>
          </div>
          <div class="strategy-vis">
            <img src="/img/ico_Mesa de trabajo 1_Mesa de trabajo 1.png" alt="Franklin Peña Concept Studio" class="brand-logo" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
.h-q { font-size: clamp(2.6rem, 6vw, 5rem); margin-bottom: 1.5rem }
.h-q .line { display: block }
.h-q .question-mark { color: var(--gold); -webkit-text-stroke: 0; margin-left: .1em }
.accent-line { width: 80px; height: 3px; background: var(--gold); margin-bottom: 1.4rem; border-radius: 2px; box-shadow: 0 0 12px var(--gold-glow) }
.answer { font-size: 1.1rem; color: #fff; font-weight: 300; line-height: 1.55; max-width: 42ch }
.answer .gold { color: var(--gold); font-weight: 500 }

.strategy-vis { display: grid; place-items: center; height: 380px }
.brand-logo { width: 100%; max-width: 320px; object-fit: contain; filter: drop-shadow(0 0 24px rgba(230,179,74,.35)) }

@media (max-width: 1100px) {
  .brand-q-grid { grid-template-columns: 1fr; gap: 2rem }
  .strategy-vis { height: 300px }
}
@media (max-width: 720px) {
  .brand-q-card { padding: 2.5rem 1.8rem }
}
@media (max-width: 480px) {
  .brand-q-card { padding: 1.8rem 1.2rem }
  .strategy-vis { height: 200px }
  .brand-logo { max-width: 180px }
}
</style>
