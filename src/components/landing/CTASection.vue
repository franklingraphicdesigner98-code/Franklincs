<template>
  <section class="s" id="contacto">
    <div class="container">
      <div class="glass-gold cta-card reveal">
        <span class="eyebrow" style="margin-bottom:1.4rem">Hablemos</span>
        <h2 class="display h-cta">
          <span class="white">¿Listo para</span> <span class="gold">Transformar</span> <span class="white">tu Marca?</span>
        </h2>
        <p class="lead">
          Conversemos sobre tu proyecto y cómo podemos ayudarte a alcanzar tus objetivos. Sin compromiso.
        </p>
        <div class="cta-btns">
          <a
            href="https://api.whatsapp.com/send/?phone=%2B573223003840&text=Hola%2C%20quiero%20iniciar%20un%20proyecto%20con%20Franklin&type=phone_number&app_absent=0"
            target="_blank" rel="noopener noreferrer"
            class="btn btn-gold"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
            WhatsApp directo
          </a>
          <a href="mailto:hola@franklinpena.studio" class="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Escríbenos un correo
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.cta-card {
  padding: 5rem 4rem; text-align: center; position: relative; overflow: hidden;
  background:
    radial-gradient(700px 400px at 50% 100%, rgba(230,179,74,.25), transparent 65%),
    var(--glass-bg-strong);
  display: flex; flex-direction: column; align-items: center;
}
.h-cta { font-size: clamp(2.6rem, 5.4vw, 4.6rem); margin-bottom: 1.5rem }
.lead { margin: 0 auto 2.5rem; text-align: center; font-size: 1.1rem }
.cta-btns { display: flex; flex-wrap: wrap; gap: .85rem; justify-content: center }

@media (max-width: 720px) { .cta-card { padding: 3rem 1.5rem } }
</style>
