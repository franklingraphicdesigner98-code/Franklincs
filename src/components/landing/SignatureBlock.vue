<template>
  <div class="signature">
    <div class="container">
      <div class="sig-line">
        <span class="h"></span>
        <img src="/img/ico_Mesa de trabajo 1_Mesa de trabajo 1.png" alt="FP" class="sig-mark" />
        <span class="h right"></span>
      </div>
      <h2>Franklin Peña</h2>
      <p>Concept Studio</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.signature { text-align: center; padding: 5rem 0 2rem; position: relative }
.sig-line {
  display: flex; align-items: center; gap: 1.5rem; justify-content: center;
  margin-bottom: 1rem; color: rgba(255,255,255,.3);
}
.sig-line .h { width: 90px; height: 1px; background: linear-gradient(90deg, transparent, var(--gold)) }
.sig-line .h.right { background: linear-gradient(90deg, var(--gold), transparent) }
.sig-mark {
  width: 80px; height: 80px; object-fit: contain;
  filter: drop-shadow(0 0 16px rgba(230,179,74,.4));
}
.signature h2 {
  font-family: var(--f-display); font-size: 2.6rem; font-weight: 400;
  color: #fff; margin: .4rem 0 .25rem; letter-spacing: .02em;
}
.signature p { margin: 0; color: var(--gold); font-size: .95rem; letter-spacing: .22em; text-transform: uppercase; font-weight: 500 }
</style>
