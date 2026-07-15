<template>
  <section class="s brand-cta-row">
    <div class="container">
      <div class="brand-cta-grid">
        <BrandQuestionSection />
        <CTASection />
      </div>
    </div>
  </section>
</template>

<script setup>
import BrandQuestionSection from './BrandQuestionSection.vue';
import CTASection from './CTASection.vue';
</script>

<style scoped>
.brand-cta-row { position: relative; padding: 6rem 0 }
.brand-cta-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;
  align-items: stretch;
}

@media (max-width: 1100px) {
  .brand-cta-grid { grid-template-columns: 1fr; gap: 1.6rem }
}
@media (max-width: 720px) {
  .brand-cta-row { padding: 4rem 0 }
}
</style>
