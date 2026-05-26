<template>
  <div class="signature">
    <div class="container">
      <div class="sig-line">
        <span class="h"></span>
        <span class="sig-mark">FP</span>
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
  font-family: var(--f-script); font-size: 3.6rem; color: var(--gold);
  line-height: 1; letter-spacing: .02em;
  text-shadow: 0 0 24px rgba(230,179,74,.3);
}
.signature h2 {
  font-family: var(--f-display); font-size: 2.6rem; font-weight: 400;
  color: #fff; margin: .4rem 0 .25rem; letter-spacing: .02em;
}
.signature p { margin: 0; color: var(--gold); font-size: .95rem; letter-spacing: .22em; text-transform: uppercase; font-weight: 500 }
</style>
