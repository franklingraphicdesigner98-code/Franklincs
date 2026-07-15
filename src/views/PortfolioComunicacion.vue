<template>
  <div class="bg-black min-h-screen">
    <!-- Header/Navigation -->
    <nav class="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold">
            <span class="text-white">Franklin</span>
            <span class="text-yellow-500"> Studio</span>
          </div>
          <router-link
            to="/"
            class="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors font-semibold"
          >
            ← {{ t('nav.volver') }}
          </router-link>
          <LanguageSwitcher class="ml-4" />
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-yellow-900/30 via-black to-black text-white py-20 px-6 border-b border-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-3xl">
          <p class="text-yellow-500 font-semibold mb-3">{{ t('comunicacion.portafolio') }}</p>
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            {{ t('comunicacion.titleWhite') }}<br>
            <span class="text-yellow-500">{{ t('comunicacion.titleGold') }}</span>
          </h1>
          <p class="text-gray-400 text-lg leading-relaxed">
            {{ t('comunicacion.lead') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Categories Filter -->
    <section class="bg-zinc-900 border-b border-gray-800 sticky top-16 z-40">
      <div class="max-w-7xl mx-auto px-6 py-6">
        <div class="flex flex-wrap gap-3">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              'px-6 py-2 rounded-full font-medium transition-all',
              selectedCategory === cat
                ? 'bg-yellow-500 text-black shadow-md shadow-yellow-500/20'
                : 'bg-black border border-gray-700 text-gray-300 hover:border-yellow-500/50 hover:text-yellow-500'
            ]"
          >
            {{ t(`comunicacion.categories.${cat}`) }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-16 px-6 bg-black">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="project in filteredProjects"
            :key="project.id"
            class="bg-zinc-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300 group"
          >
            <!-- Image -->
            <div class="relative h-64 bg-black overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                loading="lazy"
                width="800"
                height="512"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300">
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tag in project.tags"
                      :key="tag"
                      class="px-3 py-1 bg-yellow-500/20 backdrop-blur-sm text-yellow-500 text-xs rounded-full border border-yellow-500/30"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="text-yellow-500 font-semibold text-sm">
                  {{ t(`comunicacion.categories.${project.category}`) }}
                </span>
                <span class="text-gray-500 text-sm">{{ project.year }}</span>
              </div>

              <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                {{ t(`comunicacion.projects.${project.key}.title`) }}
              </h3>

              <p class="text-gray-400 text-sm mb-2 font-medium">
                {{ t(`comunicacion.projects.${project.key}.client`) }}
              </p>

              <p class="text-gray-500 leading-relaxed mb-4">
                {{ t(`comunicacion.projects.${project.key}.description`) }}
              </p>

              <button class="text-yellow-500 font-semibold hover:text-yellow-400 transition-colors inline-flex items-center">
                {{ t('comunicacion.verProyecto') }}
                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-br from-yellow-500 to-yellow-600 py-20 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          {{ t('comunicacion.ctaTitle') }}
        </h2>
        <p class="text-yellow-50 text-lg mb-8 max-w-2xl mx-auto">
          {{ t('comunicacion.ctaLead') }}
        </p>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B573223003840&text=Hola%2C%20quiero%20un%20proyecto%20de%20comunicación%20corporativa&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center bg-white text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
        >
          {{ t('comunicacion.iniciarProyecto') }}
          <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black border-t border-gray-800 text-white py-12 px-6">
      <div class="max-w-7xl mx-auto text-center">
        <div class="text-2xl font-bold mb-4">
          <span class="text-white">Franklin</span>
          <span class="text-yellow-500"> Studio</span>
        </div>
        <p class="text-gray-400 mb-6">
          {{ t('comunicacion.tagline') }}
        </p>
        <div class="flex justify-center gap-6">
          <a href="https://www.behance.net/gallery/220454209/Portfolio" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-yellow-500 transition-colors">
            Behance
          </a>
          <a href="https://www.instagram.com/franklin_designer/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-yellow-500 transition-colors">
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/franklin-pe%C3%B1a/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-yellow-500 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { imgCard } from '../utils/cloudinary.js';
import LanguageSwitcher from '../components/landing/LanguageSwitcher.vue';

const { t } = useI18n();

const selectedCategory = ref('todos');

const categories = ['todos', 'estrategia', 'marketing', 'contenido', 'social'];

const projects = ref([
  { id: 1, key: 'campania', category: 'marketing', year: '2024', image: imgCard('franklincs/montessia', '/img/Montessia.jpg'), tags: ['Marketing Digital', 'Campaña', 'Social Media'] },
  { id: 2, key: 'rebranding', category: 'estrategia', year: '2024', image: imgCard('franklincs/montessia', '/img/Montessia.jpg'), tags: ['Estrategia', 'Rebranding', 'Comunicación'] },
  { id: 3, key: 'contenidos', category: 'contenido', year: '2023', image: imgCard('franklincs/montessia', '/img/Montessia.jpg'), tags: ['Contenido', 'Blog', 'Newsletter'] },
  { id: 4, key: 'social', category: 'social', year: '2024', image: imgCard('franklincs/montessia', '/img/Montessia.jpg'), tags: ['Instagram', 'TikTok', 'Engagement'] },
  { id: 5, key: 'interna', category: 'estrategia', year: '2024', image: imgCard('franklincs/montessia', '/img/Montessia.jpg'), tags: ['Comunicación Interna', 'Cultura', 'Corporativo'] },
  { id: 6, key: 'lanzamiento', category: 'marketing', year: '2023', image: imgCard('franklincs/montessia', '/img/Montessia.jpg'), tags: ['Lanzamiento', 'PR', 'Digital'] }
]);

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'todos') {
    return projects.value;
  }
  return projects.value.filter(p => p.category === selectedCategory.value);
});
</script>