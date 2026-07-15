<template>
  <AppBackdrop />
  <AppNav />
  <main>
    <HeroSection />
    <ServicesSection />
    <BrandCtaRow />
    <ClientsSection />
    <SignatureBlock />
  </main>
  <AppFooter />
</template>

<script setup>
import AppBackdrop          from '../components/landing/AppBackdrop.vue';
import AppNav               from '../components/landing/AppNav.vue';
import HeroSection          from '../components/landing/HeroSection.vue';
import ClientsSection       from '../components/landing/ClientsSection.vue';
import BrandCtaRow          from '../components/landing/BrandCtaRow.vue';
import ServicesSection      from '../components/landing/ServicesSection.vue';
import SignatureBlock        from '../components/landing/SignatureBlock.vue';
import AppFooter            from '../components/landing/AppFooter.vue';
import { useReveal }        from '../composables/useReveal.js';

useReveal();
</script>
