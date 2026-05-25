<template>
  <div class="bg-black text-white min-h-screen font-sans">
    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-black/95 backdrop-blur-sm shadow-lg">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <router-link to="/" class="text-2xl font-bold">
            <span class="text-white">Franklin</span>
            <span class="text-yellow-500"> Studio</span>
          </router-link>
          
          <router-link 
            to="/" 
            class="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105"
          >
            ← Volver al Inicio
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <section class="pt-32 pb-16 px-6">
      <div class="max-w-7xl mx-auto text-center">
        <p class="text-yellow-500 text-sm uppercase tracking-wider mb-4">Portafolio</p>
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          Consultoría <span class="text-yellow-500">Digital</span>
        </h1>
        <p class="text-gray-400 text-lg max-w-3xl mx-auto">
          Estrategias digitales que transforman negocios y optimizan procesos.
        </p>
      </div>
    </section>

    <!-- Proyectos -->
    <section class="py-16 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(project, index) in projects" 
            :key="index"
            class="group relative overflow-hidden rounded-3xl bg-zinc-900 cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
          >
            <div class="aspect-[4/3] bg-gradient-to-br from-yellow-500/20 to-zinc-800 relative overflow-hidden">
              <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
            </div>

            <div class="p-6">
              <span class="text-yellow-500 text-sm font-semibold">{{ project.category }}</span>
              <h3 class="text-2xl font-bold mt-2 mb-3 group-hover:text-yellow-500 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-gray-400 text-sm mb-4">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-32 px-6 bg-gradient-to-b from-zinc-900 to-black">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-6xl font-bold mb-6">
          ¿Necesitas <span class="text-yellow-500">Consultoría</span>?
        </h2>
        <a 
          href="https://api.whatsapp.com/send/?phone=%2B573223003840&text=Hola%2C%20necesito%20consultoría%20digital&type=phone_number&app_absent=0" 
          target="_blank"
          rel="noopener noreferrer"
          class="bg-yellow-500 text-black px-12 py-5 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 inline-flex items-center"
        >
          Contactar
          <svg class="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    title: 'Transformación Digital',
    category: 'Estrategia',
    description: 'Implementación de procesos digitales'
  },
  {
    title: 'Optimización de Procesos',
    category: 'Consultoría',
    description: 'Mejora de flujos de trabajo'
  },
  {
    title: 'Análisis de Datos',
    category: 'Business Intelligence',
    description: 'Toma de decisiones basada en datos'
  }
]);
</script>