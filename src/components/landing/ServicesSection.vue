<template>
  <section class="s" id="servicios">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow reveal">Lo que hacemos</span>
        <h2 class="display reveal reveal-1" style="font-size:clamp(1.6rem, 3vw, 2.6rem)">
          <span class="white">Servicios que</span> <span class="gold">impulsan</span> <span class="white">tu marca</span>
        </h2>
        <p class="lead reveal reveal-2">
          Soluciones integrales de diseño, comunicación y tecnología para llevar tu negocio al siguiente nivel.
        </p>
      </div>

      <div class="svc-grid">
        <article class="glass svc-card reveal">
          <span class="num">01</span>
          <div class="ic">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 22a10 10 0 1 1 10-10 5 5 0 0 1-5 5h-1.79a1.79 1.79 0 0 0-1.27 3.06A1.79 1.79 0 0 1 12 22z"/></svg>
          </div>
          <h3>Diseño Gráfico</h3>
          <p>Creamos identidades visuales únicas que capturan la esencia de tu marca y conectan con tu audiencia.</p>
          <ul>
            <li>Branding e Identidad Corporativa</li>
            <li>Diseño Editorial &amp; Papelería</li>
            <li>Packaging &amp; Etiquetas</li>
            <li>Material Promocional &amp; Redes</li>
          </ul>
        </article>

        <article class="glass svc-card reveal reveal-1">
          <span class="num">02</span>
          <div class="ic">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <h3>Desarrollo de Software</h3>
          <p>Soluciones digitales personalizadas que optimizan procesos y mejoran la experiencia de usuario.</p>
          <ul>
            <li>Aplicaciones Web &amp; Móviles</li>
            <li>Sistemas a Medida</li>
            <li>E-commerce y Plataformas</li>
            <li>Consultoría Técnica</li>
          </ul>
        </article>

        <article class="glass svc-card reveal reveal-2">
          <span class="num">03</span>
          <div class="ic">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <h3>Comunicación Corporativa</h3>
          <p>Estrategias y piezas de comunicación que transmiten lo que tu marca representa — con coherencia y propósito.</p>
          <ul>
            <li>Estrategia de marca</li>
            <li>Campañas y contenido</li>
            <li>Manuales y guidelines</li>
            <li>Voz y tono editorial</li>
          </ul>
        </article>

        <article class="glass svc-card reveal reveal-3">
          <span class="num">04</span>
          <div class="ic">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <h3>Consultoría Digital</h3>
          <p>Asesoramos a marcas que quieren modernizar su presencia y operación — definimos el camino y lo recorremos contigo.</p>
          <ul>
            <li>Diagnóstico de marca y digital</li>
            <li>Roadmap tecnológico</li>
            <li>Optimización de procesos</li>
            <li>Acompañamiento estratégico</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.svc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem }
.svc-card {
  padding: 2.5rem; position: relative; overflow: hidden;
  transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease;
}
.svc-card:hover {
  transform: translateY(-6px);
  border-color: var(--gold);
  box-shadow: 0 30px 70px rgba(0,0,0,.7), 0 0 0 1px rgba(230,179,74,.35);
}
.svc-card::after {
  content: ""; position: absolute; right: -80px; top: -80px; width: 220px; height: 220px; border-radius: 50%;
  background: radial-gradient(circle, rgba(230,179,74,.18), transparent 70%);
  opacity: 0; transition: opacity .4s ease;
}
.svc-card:hover::after { opacity: 1 }
.svc-card .num {
  position: absolute; top: 1.6rem; right: 1.8rem;
  font-family: var(--f-display); font-size: 1.4rem; color: rgba(230,179,74,.4); letter-spacing: .1em;
}
.svc-card .ic {
  width: 64px; height: 64px; border-radius: 16px; display: grid; place-items: center;
  background: linear-gradient(135deg, #1a1612, #050505);
  border: 1px solid rgba(230,179,74,.35);
  color: var(--gold); margin-bottom: 1.6rem;
  transition: transform .35s ease, border-color .3s ease;
  box-shadow: 0 8px 22px rgba(0,0,0,.5);
}
.svc-card:hover .ic { transform: rotate(-6deg) scale(1.08); border-color: var(--gold) }
.svc-card h3 {
  font-family: var(--f-display); font-size: 1.85rem; font-weight: 400;
  letter-spacing: .01em; text-transform: uppercase; margin: 0 0 .7rem;
}
.svc-card > p { margin: 0 0 1.5rem; color: var(--fg-dim); font-size: .96rem; line-height: 1.7 }
.svc-card ul { list-style: none; padding: 0; margin: 0; display: grid; gap: .6rem }
.svc-card ul li { display: flex; align-items: center; gap: .7rem; font-size: .92rem; color: var(--fg) }
.svc-card ul li::before {
  content: ""; flex-shrink: 0; width: 6px; height: 6px; border-radius: 50%;
  background: var(--gold); box-shadow: 0 0 8px var(--gold);
}

@media (max-width: 1100px) { .svc-grid { grid-template-columns: 1fr } }
@media (max-width: 720px) { .svc-card { padding: 1.8rem } }
</style>
