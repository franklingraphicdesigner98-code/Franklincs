<template>
  <AppBackdrop />
  <AppNav />
  <main>
    <HeroSection />
    <ServicesSection />
    <BrandQuestionSection />
    <CTASection />
    <SignatureBlock />
  </main>
  <AppFooter />
</template>

<script setup>
import AppBackdrop          from '../components/landing/AppBackdrop.vue';
import AppNav               from '../components/landing/AppNav.vue';
import HeroSection          from '../components/landing/HeroSection.vue';
import BrandQuestionSection from '../components/landing/BrandQuestionSection.vue';
import ServicesSection      from '../components/landing/ServicesSection.vue';
import CTASection           from '../components/landing/CTASection.vue';
import SignatureBlock        from '../components/landing/SignatureBlock.vue';
import AppFooter            from '../components/landing/AppFooter.vue';
import { useReveal }        from '../composables/useReveal.js';

useReveal();
</script>
