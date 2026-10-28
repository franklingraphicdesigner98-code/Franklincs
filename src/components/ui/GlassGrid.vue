<template>
  <div class="gcard-grid"><slot /></div>
</template>

<style scoped>
/* Grid uniforme para GlassCard — 3 / 2 / 1 columnas */
.gcard-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem }
@media (max-width: 1023px) {
  .gcard-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) }
}
@media (max-width: 767px) {
  .gcard-grid { grid-template-columns: minmax(0, 1fr) }
}
</style>
