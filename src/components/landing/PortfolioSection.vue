<template>
  <section class="s" id="proyectos">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow reveal">Portafolio</span>
        <h2 class="display reveal reveal-1" style="font-size:clamp(1.6rem, 3vw, 2.6rem)">
          <span class="white">Creando Experiencias que</span> <span class="gold">Inspiran</span>
        </h2>
        <p class="lead reveal reveal-2">
          Una selección de marcas que confiaron en nosotros para construir su presencia visual y digital.
        </p>
      </div>

      <div class="portfolio-grid">
        <router-link to="/diseno-grafico" class="pf p1 reveal">
          <img :src="imgCard('franklincs/montessia', '/img/Montessia.jpg')" alt="Montessia" loading="lazy" />
          <div class="ov"></div>
          <span class="tag-corner">Destacado</span>
          <div class="meta">
            <div>
              <small>Identidad · Branding</small>
              <h4>Montessia</h4>
            </div>
            <span class="go"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
          </div>
        </router-link>

        <router-link to="/desarrollo-software" class="pf p2 reveal reveal-1">
          <img :src="imgCard('franklincs/fortress', '/img/Fortress.jpg')" alt="Fortress" loading="lazy" />
          <div class="ov"></div>
          <span class="tag-corner">Branding</span>
          <div class="meta">
            <div>
              <small>Corporativo</small>
              <h4>Fortress</h4>
            </div>
            <span class="go"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
          </div>
        </router-link>

        <router-link to="/diseno-grafico" class="pf p3 reveal reveal-2">
          <img :src="imgCard('franklincs/mrcream-cover', '/img/Mr_Cream_Logo.jpg')" alt="Mr Cream" loading="lazy" />
          <div class="ov"></div>
          <span class="tag-corner">Packaging</span>
          <div class="meta">
            <div>
              <small>Producto</small>
              <h4>Mr Cream</h4>
            </div>
            <span class="go"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
          </div>
        </router-link>

        <router-link to="/diseno-grafico" class="pf p4 reveal">
          <img src="/img/Project 2.jpg" alt="Project 1" loading="lazy" />
          <div class="ov"></div>
          <span class="tag-corner">Editorial</span>
          <div class="meta">
            <div>
              <small>Diseño editorial</small>
              <h4>Project 01</h4>
            </div>
            <span class="go"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
          </div>
        </router-link>

        <router-link to="/comunicacion-corporativa" class="pf p5 reveal reveal-1">
          <img src="/img/Project 3.jpg" alt="Project 3" loading="lazy" />
          <div class="ov"></div>
          <span class="tag-corner">Campaña</span>
          <div class="meta">
            <div>
              <small>Comunicación</small>
              <h4>Project 03</h4>
            </div>
            <span class="go"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
          </div>
        </router-link>

        <router-link to="/consultoria-digital" class="pf p6 reveal reveal-2">
          <img src="/img/Project 5.jpg" alt="Project 5" loading="lazy" />
          <div class="ov"></div>
          <span class="tag-corner">Digital</span>
          <div class="meta">
            <div>
              <small>Plataforma web</small>
              <h4>Project 05</h4>
            </div>
            <span class="go"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
          </div>
        </router-link>
      </div>

      <div class="glass-gold stats-row reveal">
        <div class="stat"><div class="num">+50</div><div class="lbl">Proyectos</div></div>
        <div class="stat"><div class="num">+30</div><div class="lbl">Marcas</div></div>
        <div class="stat"><div class="num">8</div><div class="lbl">Años</div></div>
        <div class="stat"><div class="num">100%</div><div class="lbl">Compromiso</div></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { imgCard } from '../../utils/cloudinary.js';
</script>

<style scoped>
.portfolio-grid {
  display: grid; grid-template-columns: repeat(12, 1fr); gap: 1rem;
  grid-auto-rows: 160px;
}
.pf {
  position: relative; border-radius: var(--r-md); overflow: hidden;
  isolation: isolate; cursor: pointer; transition: transform .4s ease;
}
.pf:hover { transform: translateY(-4px) }
.pf img {
  position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
  transition: transform .8s ease, filter .4s ease;
  filter: saturate(.92) brightness(.9);
}
.pf:hover img { transform: scale(1.06); filter: saturate(1.1) brightness(1) }
.pf .ov {
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,.85) 100%);
}
.pf .meta {
  position: absolute; left: 1.2rem; right: 1.2rem; bottom: 1.2rem; z-index: 2;
  display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem;
}
.pf .meta small { display: block; color: var(--gold); font-size: .7rem; letter-spacing: .18em; text-transform: uppercase; font-weight: 600; margin-bottom: .3rem }
.pf .meta h4 { font-family: var(--f-display); font-size: 1.2rem; font-weight: 400; text-transform: uppercase; letter-spacing: .02em; line-height: 1; margin: 0; color: #fff }
.pf .meta .go {
  width: 38px; height: 38px; border-radius: 50%;
  background: rgba(230,179,74,.95); color: #000;
  display: grid; place-items: center;
  transition: transform .3s ease; flex-shrink: 0;
  box-shadow: 0 6px 18px rgba(230,179,74,.5);
}
.pf:hover .meta .go { transform: rotate(-45deg) scale(1.1) }
.pf .tag-corner {
  position: absolute; top: 1rem; left: 1rem; z-index: 2;
  display: inline-flex; align-items: center; gap: .4rem;
  padding: .4rem .75rem; border-radius: 999px;
  background: rgba(0,0,0,.55); backdrop-filter: blur(8px);
  border: 1px solid rgba(230,179,74,.35);
  color: var(--gold); font-size: .68rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase;
}
.pf.p1 { grid-column: span 5; grid-row: span 2 }
.pf.p2 { grid-column: span 5; grid-row: span 2 }
.pf.p3 { grid-column: span 5; grid-row: span 2 }
.pf.p4 { grid-column: span 4; grid-row: span 2 }
.pf.p5 { grid-column: span 4; grid-row: span 2 }
.pf.p6 { grid-column: span 4; grid-row: span 2 }

/* Stats */
.stats-row {
  margin-top: 5rem; padding: 2.5rem 3rem;
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem;
}
.stat { position: relative; text-align: center }
.stat + .stat::before {
  content: ""; position: absolute; left: 0; top: 15%; height: 70%; width: 1px;
  background: linear-gradient(180deg, transparent, rgba(230,179,74,.35), transparent);
}
.stat .num {
  font-family: var(--f-display); font-weight: 400;
  font-size: clamp(2.4rem, 4vw, 3.4rem); line-height: 1; letter-spacing: .01em;
  background: linear-gradient(180deg,#f5cf7a 0%, #e6b34a 60%, #a47a23 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.stat .lbl { color: #fff; font-size: .78rem; font-weight: 500; margin-top: .5rem; letter-spacing: .18em; text-transform: uppercase }

@media (max-width: 1100px) {
  .portfolio-grid { grid-auto-rows: 140px }
  .stats-row { grid-template-columns: repeat(2,1fr); gap: 2rem }
  .stat + .stat::before { display: none }
}
@media (max-width: 720px) {
  .portfolio-grid { grid-template-columns: 1fr; grid-auto-rows: 240px }
  .pf { grid-column: span 1 !important; grid-row: span 1 !important }
  .stats-row { grid-template-columns: 1fr 1fr; padding: 1.8rem; gap: 1.2rem }
}
</style>
