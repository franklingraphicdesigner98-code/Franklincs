<template>
  <header class="hero" id="top">
    <div class="inner">
      <div class="hero-text">
        <span class="hero-eyebrow">Transformamos Ideas en Realidad</span>

        <h1 class="display h1-mass" aria-label="Diseño Corporativo & Soluciones Digitales">
          <span class="line"><span class="white">Diseño</span></span>
          <span class="line"><span class="gold">Corporativo</span></span>
          <span class="line"><span class="white">&amp; Digital</span></span>
        </h1>

        <p class="hero-sub">
          Fortalecemos tu identidad corporativa
          <span class="accent">desde el concepto hasta el código</span>
        </p>

        <div class="hero-features">
          <div class="hero-feature">
            <div class="ic">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 22a10 10 0 1 1 10-10 5 5 0 0 1-5 5h-1.79a1.79 1.79 0 0 0-1.27 3.06A1.79 1.79 0 0 1 12 22z"/></svg>
            </div>
            <p>Identidades visuales únicas que comunican la esencia de tu marca.</p>
          </div>
          <div class="hero-feature">
            <div class="ic">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <p>Soluciones de software a medida que responden a tus objetivos.</p>
          </div>
          <div class="hero-feature">
            <div class="ic">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <p>Comunicación corporativa coherente y con propósito en cada canal.</p>
          </div>
          <div class="hero-feature">
            <div class="ic">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            </div>
            <p>Consultoría digital para modernizar tu presencia y operación.</p>
          </div>
        </div>

        <div class="hero-ctas">
          <a href="#servicios" class="btn btn-gold">
            Ver Servicios
            <svg class="ar" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="#proyectos" class="btn btn-outline">Nuestro Trabajo</a>
        </div>

        <!-- Quick-nav cards -->
        <div class="quick-nav">
          <router-link to="/diseno-grafico" class="qcard">
            <div class="qcard-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>
            </div>
            <div class="qcard-content">
              <span class="qcard-num">01</span>
              <h3 class="qcard-title">Diseño Gráfico</h3>
              <p class="qcard-desc">Identidad visual que destaca</p>
            </div>
            <div class="qcard-cta">
              Ver
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
          </router-link>
          <router-link to="/desarrollo-software" class="qcard">
            <div class="qcard-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <div class="qcard-content">
              <span class="qcard-num">02</span>
              <h3 class="qcard-title">Desarrollo de Software</h3>
              <p class="qcard-desc">Soluciones digitales a medida</p>
            </div>
            <div class="qcard-cta">
              Ver
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
          </router-link>
        </div>

        <div class="hero-divider">
          <span class="line"></span>
        </div>

        <a href="#servicios" class="desliza">
          <span class="arrow-circle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
          </span>
          <span>Desliza para <span class="gold-word">descubrirlo</span></span>
        </a>
      </div>

      <!-- Phone cluster -->
      <div class="phones">
        <div class="glow-bg"></div>

        <!-- Phone A — techwear list -->
        <div class="phone phone-a">
          <div class="notch"></div>
          <div class="screen">
            <div class="topbar">
              <div class="logo-mini">NEWW<span class="g">(AI)</span>VE<br/>TECHWEAR</div>
              <div class="ic-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
            </div>
            <div class="tabs">
              <span class="active">New Releases</span>
              <span>Most Viewed</span>
            </div>
            <div class="product-card">
              <img src="/img/graffiti_audifono.jpg" alt="Winter Puffer" />
              <div class="overlay"></div>
              <div class="badge">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="14" height="14" rx="2"/><rect x="7" y="7" width="14" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/></svg>
                10 Items
              </div>
              <div class="time">⏱</div>
              <div class="title">The Winter<br/>Puffer</div>
            </div>
            <div class="product-card" style="aspect-ratio:5/3;margin-bottom:0">
              <img src="/img/espacio_audifono.jpg" alt="Tech Hood" />
              <div class="overlay"></div>
              <div class="badge">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="14" height="14" rx="2"/></svg>
                22 Items
              </div>
              <div class="time">⏱</div>
            </div>
          </div>
        </div>

        <!-- Phone B — product detail -->
        <div class="phone phone-b">
          <div class="notch"></div>
          <div class="screen">
            <div class="hero-img"></div>
            <div class="top-row">
              <div class="back">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </div>
              <div class="back save-gold">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h12a1 1 0 0 1 1 1v19l-7-4-7 4V3a1 1 0 0 1 1-1z"/></svg>
              </div>
            </div>
            <div class="sizes">
              <span>40</span>
              <span>42</span>
              <span class="sel">44</span>
              <span>46</span>
            </div>
            <div class="ptitle">Cutting Edge<br/><b>Poncho</b></div>
            <div class="bottom">
              <div class="price">
                <small>Price</small>
                <b>€ 5,000</b>
              </div>
              <span class="buy">Buy Now
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.hero {
  position: relative; padding: 5.5rem 0 3rem; min-height: 100vh;
  display: flex; align-items: center;
}
.inner {
  display: grid; grid-template-columns: 1.15fr .85fr; gap: 3rem; align-items: center;
  max-width: var(--container); margin: 0 auto; padding: 0 32px;
  position: relative;
}
.hero-eyebrow {
  font-weight: 600; font-size: .85rem; letter-spacing: .2em;
  text-transform: uppercase; color: rgba(255,255,255,.92);
  margin-bottom: 1.4rem; display: block;
}
.h1-mass {
  font-size: clamp(2.8rem, 6.2vw, 5.6rem);
  margin-bottom: 1.4rem;
}
.hero-sub {
  font-weight: 600; letter-spacing: .18em; text-transform: uppercase;
  font-size: .95rem; color: rgba(255,255,255,.88);
  margin-bottom: 2.5rem; line-height: 1.5;
}
.hero-sub .accent { color: var(--gold); display: block; margin-top: .15rem }
.hero-features { display: grid; grid-template-columns: 1fr 1fr; gap: .85rem; margin-bottom: 2.5rem; max-width: 480px }
.hero-feature { display: flex; gap: 1rem; align-items: flex-start }
.hero-feature .ic {
  flex-shrink: 0; width: 38px; height: 38px; border-radius: 8px;
  background: linear-gradient(135deg, #1c1610 0%, #0a0a0a 100%);
  border: 1px solid rgba(230,179,74,.35);
  display: grid; place-items: center; color: var(--gold);
  box-shadow: 0 6px 18px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,220,140,.08);
}
.hero-feature p { margin: 0; color: rgba(255,255,255,.88); font-size: .82rem; line-height: 1.45 }
.hero-ctas { display: flex; flex-wrap: wrap; gap: .85rem; align-items: center; margin-bottom: 2.5rem }
.hero-divider { margin: 2rem 0 1.5rem; display: flex; align-items: center; gap: 1rem }
.hero-divider .line { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(230,179,74,.5), transparent) }
.desliza { display: inline-flex; align-items: center; gap: 1rem; font-size: 1rem; font-weight: 500; color: #fff }
.desliza .gold-word { color: var(--gold); font-weight: 600 }
.desliza .arrow-circle {
  width: 46px; height: 46px; border-radius: 50%;
  border: 2px solid var(--gold);
  display: grid; place-items: center; color: var(--gold);
  animation: nudge 1.6s ease-in-out infinite;
}

/* Phones */
.phones {
  position: relative; height: 640px;
  display: flex; align-items: center; justify-content: center;
}
.phones .glow-bg {
  position: absolute; width: 520px; height: 520px;
  background: radial-gradient(circle at 50% 40%, rgba(230,179,74,.28), transparent 65%);
  filter: blur(20px);
}
.phone {
  position: absolute; width: 280px; height: 580px; border-radius: 42px;
  background: linear-gradient(180deg, #1a1612 0%, #0a0a0a 100%);
  border: 1px solid rgba(230,179,74,.18);
  box-shadow: 0 40px 100px rgba(0,0,0,.85), 0 0 0 1px rgba(255,255,255,.02), inset 0 1px 0 rgba(255,220,140,.06);
  overflow: hidden;
  animation: floaty 7s ease-in-out infinite;
}
.phone .notch {
  position: absolute; top: 14px; left: 50%; transform: translateX(-50%);
  width: 80px; height: 22px; border-radius: 14px; background: #000;
  border: 1px solid rgba(255,255,255,.08);
}
.phone .screen { position: absolute; inset: 8px; border-radius: 36px; overflow: hidden; background: #0a0a0a }

/* Phone A */
.phone-a { --rot: -6deg; transform: rotate(-6deg); left: 6%; top: 50px; z-index: 2 }
.phone-a .screen {
  background: radial-gradient(circle at 50% 70%, rgba(230,179,74,.15), transparent 65%), linear-gradient(180deg,#0e0a06 0%,#000 100%);
  padding: 42px 16px 16px;
}
.topbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.2rem }
.topbar .logo-mini { font-family: var(--f-display); font-size: .95rem; line-height: .95; letter-spacing: .05em; color: #fff }
.topbar .logo-mini .g { color: var(--gold) }
.topbar .ic-btn {
  width: 28px; height: 28px; border-radius: 8px;
  background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.08);
  display: grid; place-items: center; color: var(--gold);
}
.tabs {
  display: flex; gap: 1rem; align-items: center; font-size: .7rem; color: rgba(255,255,255,.5);
  border-bottom: 1px solid rgba(255,255,255,.06); padding-bottom: .6rem; margin-bottom: .9rem;
}
.tabs .active { color: var(--gold); position: relative }
.tabs .active::after { content: ""; position: absolute; left: 0; right: 0; bottom: -.65rem; height: 1px; background: var(--gold) }
.product-card {
  position: relative; border-radius: 14px; overflow: hidden;
  aspect-ratio: 3/4; margin-bottom: .6rem;
  background: linear-gradient(135deg,#1a1612,#050505);
}
.product-card img {
  position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
  filter: saturate(.85) contrast(1.1) brightness(.85); mix-blend-mode: luminosity; opacity: .95;
}
.product-card .overlay { position: absolute; inset: 0; background: linear-gradient(180deg,rgba(0,0,0,0) 30%,rgba(0,0,0,.85) 100%) }
.product-card .badge {
  position: absolute; top: 8px; left: 8px;
  display: inline-flex; align-items: center; gap: .3rem;
  padding: .25rem .5rem; border-radius: 999px;
  background: rgba(0,0,0,.6); backdrop-filter: blur(6px);
  border: 1px solid rgba(230,179,74,.4);
  font-size: .65rem; color: var(--gold); font-weight: 600;
}
.product-card .time {
  position: absolute; top: 8px; right: 8px; width: 24px; height: 24px; border-radius: 50%;
  background: rgba(230,179,74,.85); color: #000;
  display: grid; place-items: center; font-size: .6rem; font-weight: 700;
}
.product-card .title { position: absolute; bottom: 10px; left: 10px; font-family: var(--f-display); font-size: 1rem; color: #fff; line-height: .95 }

/* Phone B */
.phone-b { --rot: 5deg; transform: rotate(5deg); right: 0; top: 0; z-index: 3 }
.phone-b .screen { background: linear-gradient(180deg,#0a0a0a 0%,#1a1612 100%) }
.phone-b .hero-img {
  position: absolute; inset: 0;
  background: linear-gradient(180deg,rgba(0,0,0,.3) 0%,rgba(0,0,0,0) 30%,rgba(0,0,0,.4) 60%,rgba(0,0,0,.95) 100%), url("/img/Montessia.jpg") center/cover no-repeat;
  filter: saturate(.7) contrast(1.15);
}
.phone-b .top-row {
  position: absolute; top: 46px; left: 14px; right: 14px;
  display: flex; align-items: center; justify-content: space-between;
}
.phone-b .back {
  width: 30px; height: 30px; border-radius: 50%;
  background: rgba(0,0,0,.5); backdrop-filter: blur(6px);
  border: 1px solid rgba(255,255,255,.12);
  display: grid; place-items: center; color: #fff;
}
.phone-b .save-gold { background: rgba(230,179,74,.2); border-color: rgba(230,179,74,.5); color: var(--gold) }
.phone-b .sizes {
  position: absolute; left: 0; right: 0; bottom: 160px; padding: 0 16px;
  display: flex; gap: .5rem; justify-content: space-between;
}
.phone-b .sizes span {
  flex: 1; text-align: center; padding: .4rem 0; border-radius: 8px;
  font-weight: 600; font-size: .78rem; color: rgba(255,255,255,.7);
  background: rgba(0,0,0,.4); backdrop-filter: blur(6px);
  border: 1px solid rgba(255,255,255,.08);
}
.phone-b .sizes span.sel { background: rgba(230,179,74,.92); color: #000; border-color: var(--gold); box-shadow: 0 0 20px rgba(230,179,74,.4) }
.phone-b .ptitle {
  position: absolute; left: 14px; right: 14px; bottom: 110px;
  font-family: var(--f-display); font-size: 1.4rem; color: #fff; line-height: .95;
  text-shadow: 0 2px 12px rgba(0,0,0,.5);
}
.phone-b .ptitle b { color: var(--gold); font-weight: 400 }
.phone-b .bottom { position: absolute; left: 14px; right: 14px; bottom: 18px; display: flex; gap: .6rem; align-items: center }
.phone-b .price {
  flex: 1; padding: .7rem 1rem; border-radius: 999px;
  background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);
  backdrop-filter: blur(8px);
}
.phone-b .price small { display: block; color: rgba(255,255,255,.5); font-size: .6rem; letter-spacing: .1em; text-transform: uppercase }
.phone-b .price b { color: #fff; font-weight: 600; font-size: .95rem }
.phone-b .buy {
  padding: .75rem 1rem; border-radius: 999px;
  background: linear-gradient(135deg, #f5cf7a, #e6b34a);
  color: #000; font-weight: 700; font-size: .82rem;
  display: inline-flex; align-items: center; gap: .4rem;
  box-shadow: 0 8px 22px rgba(230,179,74,.4);
}

/* Quick-nav cards */
.quick-nav { display: grid; grid-template-columns: 1fr 1fr; gap: .7rem; max-width: 480px; margin-bottom: 2rem }
.qcard {
  display: flex; align-items: center; gap: .85rem;
  padding: .95rem 1rem;
  background: var(--glass-bg); backdrop-filter: blur(14px);
  border: 1px solid var(--glass-border);
  border-left: 2px solid rgba(230,179,74,.35);
  border-radius: var(--r-md);
  transition: border-color .25s ease, background .25s ease, transform .25s ease, box-shadow .25s ease;
  text-decoration: none;
}
.qcard:hover {
  border-color: rgba(230,179,74,.55);
  border-left-color: var(--gold);
  background: rgba(230,179,74,.07);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(230,179,74,.12);
}
.qcard-icon {
  flex-shrink: 0;
  width: 38px; height: 38px; border-radius: 10px;
  background: rgba(230,179,74,.1); border: 1px solid rgba(230,179,74,.2);
  display: grid; place-items: center;
  color: var(--gold);
  transition: background .25s ease, transform .25s ease;
}
.qcard:hover .qcard-icon { background: rgba(230,179,74,.18); transform: scale(1.08) }
.qcard-content { flex: 1; min-width: 0 }
.qcard-num { font-size: .65rem; font-weight: 700; color: var(--gold); letter-spacing: .2em; display: block; margin-bottom: .15rem; opacity: .75 }
.qcard-title { font-size: .88rem; font-weight: 600; color: #fff; margin: 0 0 .15rem; transition: color .2s; white-space: nowrap; overflow: hidden; text-overflow: ellipsis }
.qcard:hover .qcard-title { color: var(--gold-2) }
.qcard-desc { font-size: .72rem; color: var(--fg-mute); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis }
.qcard-cta {
  flex-shrink: 0;
  display: inline-flex; align-items: center; gap: .3rem;
  font-size: .72rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
  color: var(--gold); opacity: .6;
  transition: opacity .25s ease, gap .25s ease;
}
.qcard:hover .qcard-cta { opacity: 1; gap: .5rem }

@media (max-width: 1100px) {
  .inner { grid-template-columns: 1fr; gap: 3rem }
  .phones { height: 540px; transform: scale(.9) }
}
@media (max-width: 720px) {
  .hero { padding: 5rem 0 2.5rem }
  .phones { height: 480px; transform: scale(.75) }
}
</style>
