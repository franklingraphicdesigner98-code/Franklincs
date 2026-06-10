<template>
  <section class="s" id="proceso">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow reveal">Nuestro proceso</span>
        <h2 class="display reveal reveal-1" style="font-size:clamp(1.6rem, 3vw, 2.6rem)">
          <span class="white">Del concepto</span> <span class="gold">a la realidad</span>
        </h2>
        <p class="lead reveal reveal-2">
          Un método probado que asegura claridad, calidad y resultados — en cada proyecto, sin excepciones.
        </p>
      </div>

      <div class="process-grid">
        <div class="glass process-step reveal">
          <div class="num">01</div>
          <h4>Descubrir</h4>
          <p>Conocemos tu marca, tus objetivos y a tu audiencia. Sin esa base, nada de lo que viene tiene sentido.</p>
        </div>
        <div class="glass process-step reveal reveal-1">
          <div class="num">02</div>
          <h4>Definir</h4>
          <p>Traducimos lo descubierto en una estrategia clara — alcance, etapas y entregables sobre la mesa.</p>
        </div>
        <div class="glass process-step reveal reveal-2">
          <div class="num">03</div>
          <h4>Diseñar</h4>
          <p>Conceptualizamos, exploramos, iteramos. Lo que entregamos al final pasó por muchas versiones antes.</p>
        </div>
        <div class="glass process-step reveal reveal-3">
          <div class="num">04</div>
          <h4>Desplegar</h4>
          <p>Implementamos, lanzamos y acompañamos. Tu marca y tu producto saliendo al mundo de la mejor forma.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.process-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; position: relative }
.process-step {
  padding: 1.8rem 1.6rem; position: relative;
  transition: transform .25s ease, border-color .25s ease;
}
.process-step:hover { transform: translateY(-4px); border-color: var(--glass-border-gold) }
.process-step .num {
  font-family: var(--f-display); font-size: 2.6rem; line-height: 1;
  color: var(--gold); opacity: .4; margin-bottom: .5rem; letter-spacing: .04em;
}
.process-step h4 {
  font-family: var(--f-display); font-size: 1.1rem; font-weight: 400;
  text-transform: uppercase; letter-spacing: .05em; margin: 0 0 .5rem; color: #fff;
}
.process-step p { margin: 0; color: var(--fg-dim); font-size: .88rem; line-height: 1.6 }

@media (max-width: 1100px) { .process-grid { grid-template-columns: repeat(2,1fr) } }
@media (max-width: 720px)   { .process-grid { grid-template-columns: 1fr } }
@media (max-width: 480px)   { .process-step { padding: 1.4rem 1.2rem } }
</style>
