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
            <div class="ring r1"></div>
            <div class="ring r2"></div>
            <div class="ring r3"></div>
            <div class="center">
              FP
              <small>CONCEPT STUDIO</small>
            </div>
            <div class="orbit-dot d1"></div>
            <div class="orbit-dot d2"></div>
            <div class="orbit-dot d3"></div>
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

/* orbital visual */
.strategy-vis { position: relative; display: grid; place-items: center; height: 380px }
.ring {
  position: absolute; border: 1px dashed rgba(230,179,74,.3); border-radius: 50%;
  animation: spin 28s linear infinite;
}
.ring.r1 { width: 360px; height: 360px }
.ring.r2 { width: 240px; height: 240px; animation-duration: 20s; animation-direction: reverse; border-style: solid; border-color: rgba(230,179,74,.18) }
.ring.r3 { width: 140px; height: 140px; animation-duration: 14s }
.center {
  width: 140px; height: 140px; border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #f5cf7a, #e6b34a 40%, #5a3f0a 100%);
  display: grid; place-items: center; color: #1a1207; font-family: var(--f-display);
  box-shadow: 0 20px 60px rgba(230,179,74,.4), inset 0 2px 0 rgba(255,255,255,.3);
  position: relative; z-index: 2;
  font-size: 2rem; line-height: .9; text-align: center;
}
.center small { display: block; font-size: .55rem; letter-spacing: .2em; margin-top: .2rem; font-family: var(--f-body); font-weight: 600; opacity: .75 }
.orbit-dot {
  position: absolute; background: var(--gold); box-shadow: 0 0 12px var(--gold);
  border-radius: 50%; animation: orbit 12s linear infinite;
}
.d1 { width: 14px; height: 14px; animation-delay: 0s }
.d2 { width: 8px; height: 8px; animation-delay: -4s; background: #f5cf7a }
.d3 { width: 10px; height: 10px; animation-delay: -8s }

@media (max-width: 1100px) {
  .brand-q-grid { grid-template-columns: 1fr; gap: 2rem }
  .strategy-vis { height: 300px }
}
@media (max-width: 720px) {
  .brand-q-card { padding: 2.5rem 1.8rem }
}
</style>
