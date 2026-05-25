<template>
  <div class="bg-black min-h-screen">
    <!-- Header/Navigation -->
    <nav class="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div 
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
            class="text-2xl font-bold"
          >
            <span class="text-white">Franklin</span>
            <span class="text-yellow-500"> Studio</span>
          </div>
          <router-link 
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
            to="/"
            class="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors font-semibold"
          >
            ← Volver
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-yellow-900/30 via-black to-black text-white py-20 px-6 border-b border-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-3xl">
          <p 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
            class="text-yellow-500 font-semibold mb-3"
          >Portfolio</p>
          <h1 
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
            class="text-5xl md:text-6xl font-bold mb-6"
          >
            Diseño Gráfico &<br>
            <span class="text-yellow-500">Branding</span>
          </h1>
          <p 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 350 } }"
            class="text-gray-400 text-lg leading-relaxed"
          >
            Creamos identidades visuales únicas que comunican la esencia de cada marca. 
            Desde el concepto inicial hasta la implementación final, cada proyecto es una 
            historia visual cuidadosamente elaborada.
          </p>
        </div>
      </div>
    </section>

    <!-- Categories Filter -->
    <section class="bg-zinc-900 border-b border-gray-800 sticky top-16 z-40">
      <div class="max-w-7xl mx-auto px-6 py-6">
        <div class="flex flex-wrap gap-3">
          <button
            v-for="(cat, index) in categories"
            :key="cat"
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 400, delay: index * 80 } }"
            @click="selectedCategory = cat"
            :class="[
              'px-6 py-2 rounded-full font-medium transition-all',
              selectedCategory === cat
                ? 'bg-yellow-500 text-black shadow-md shadow-yellow-500/20'
                : 'bg-black border border-gray-700 text-gray-300 hover:border-yellow-500/50 hover:text-yellow-500'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-16 px-6 bg-black">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            v-motion
            :initial="{ opacity: 0, y: 60 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 120 } }"
            @click="openModal(project)"
            class="bg-zinc-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300 group cursor-pointer"
          >
            <!-- Image -->
            <div class="relative h-64 bg-black overflow-hidden">
              <img 
                :src="project.image"
                :alt="project.title"
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
                <span class="text-yellow-500 font-semibold text-sm">{{ project.category }}</span>
                <span class="text-gray-500 text-sm">{{ project.year }}</span>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-gray-400 text-sm mb-2 font-medium">{{ project.client }}</p>
              <p class="text-gray-500 leading-relaxed mb-4">{{ project.description }}</p>
              <button class="text-yellow-500 font-semibold hover:text-yellow-400 transition-colors inline-flex items-center">
                Ver proyecto
                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <Transition name="modal">
      <div 
        v-if="isModalOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <div class="bg-zinc-900 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-gray-800 shadow-2xl">
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-6 border-b border-gray-800">
            <div>
              <h2 class="text-3xl font-bold text-white">{{ selectedProject?.title }}</h2>
              <p class="text-yellow-500 text-sm mt-1">{{ selectedProject?.client }}</p>
            </div>
            <button 
              @click="closeModal"
              class="w-10 h-10 rounded-full bg-zinc-800 hover:bg-yellow-500 text-white transition-all flex items-center justify-center"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-6 overflow-y-auto max-h-[calc(90vh-160px)]">
            <!-- Carousel -->
            <div class="relative mb-6">
              <div class="relative aspect-video bg-black rounded-2xl overflow-hidden">
                <img 
                  :src="selectedProject?.gallery[currentImageIndex]"
                  :alt="`${selectedProject?.title} - Image ${currentImageIndex + 1}`"
                  class="w-full h-full object-contain"
                >
                <button 
                  v-if="selectedProject?.gallery.length > 1"
                  @click="previousImage"
                  class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-yellow-500 text-white transition-all flex items-center justify-center backdrop-blur-sm"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  v-if="selectedProject?.gallery.length > 1"
                  @click="nextImage"
                  class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-yellow-500 text-white transition-all flex items-center justify-center backdrop-blur-sm"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div class="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm">
                  {{ currentImageIndex + 1 }} / {{ selectedProject?.gallery.length }}
                </div>
              </div>

              <!-- Thumbnails -->
              <div v-if="selectedProject?.gallery.length > 1" class="flex gap-2 mt-4 overflow-x-auto pb-2">
                <button
                  v-for="(img, index) in selectedProject?.gallery"
                  :key="index"
                  @click="currentImageIndex = index"
                  :class="[
                    'flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all',
                    currentImageIndex === index ? 'border-yellow-500' : 'border-gray-700 hover:border-gray-500'
                  ]"
                >
                  <img :src="img" :alt="`Thumbnail ${index + 1}`" class="w-full h-full object-cover">
                </button>
              </div>
            </div>

            <!-- Project Details -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h3 class="text-xl font-bold text-white mb-3">Descripción</h3>
                <p class="text-gray-400 leading-relaxed">{{ selectedProject?.description }}</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span 
                    v-for="tag in selectedProject?.tags"
                    :key="tag"
                    class="px-3 py-1 bg-yellow-500/20 text-yellow-500 text-xs rounded-full border border-yellow-500/30"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-3">Detalles del Proyecto</h3>
                <div class="space-y-3">
                  <div>
                    <p class="text-gray-500 text-sm">Categoría</p>
                    <p class="text-white font-semibold">{{ selectedProject?.category }}</p>
                  </div>
                  <div>
                    <p class="text-gray-500 text-sm">Cliente</p>
                    <p class="text-white font-semibold">{{ selectedProject?.client }}</p>
                  </div>
                  <div>
                    <p class="text-gray-500 text-sm">Año</p>
                    <p class="text-white font-semibold">{{ selectedProject?.year }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Stats Section -->
    <section class="bg-zinc-900 py-16 px-6 border-t border-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8 text-center">
          <div 
            v-for="(stat, index) in stats"
            :key="index"
            v-motion
            :initial="{ opacity: 0, scale: 0.5 }"
            :visible="{ opacity: 1, scale: 1, transition: { duration: 500, delay: index * 100 } }"
          >
            <div class="text-4xl font-bold text-yellow-500 mb-2">{{ stat.value }}</div>
            <div class="text-gray-400">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-br from-yellow-500 to-yellow-600 py-20 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h2 
          v-motion-slide-visible-bottom
          class="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          ¿Listo para crear algo increíble?
        </h2>
        <p 
          v-motion-fade-visible
          class="text-yellow-50 text-lg mb-8 max-w-2xl mx-auto"
        >
          Trabajemos juntos para desarrollar la identidad visual que tu marca merece.
        </p>
        <a 
          v-motion-pop-visible
          href="https://api.whatsapp.com/send/?phone=%2B573223003840&text=Hola%2C%20quiero%20un%20proyecto%20de%20diseño%20gráfico&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center bg-white text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
        >
          Iniciar Proyecto
          <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black border-t border-gray-800 text-white py-12 px-6">
      <div class="max-w-7xl mx-auto text-center">
        <div 
          v-motion-fade-visible
          class="text-2xl font-bold mb-4"
        >
          <span class="text-white">Franklin</span>
          <span class="text-yellow-500"> Studio</span>
        </div>
        <p 
          v-motion-fade-visible
          class="text-gray-400 mb-6"
        >
          Transformando ideas en experiencias visuales extraordinarias
        </p>
        <div class="flex justify-center gap-6">
          <a href="https://www.behance.net/gallery/220454209/Portfolio" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-yellow-500 transition-colors">Behance</a>
          <a href="https://www.instagram.com/franklinp.cs" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-yellow-500 transition-colors">Instagram</a>
          <a href="https://www.linkedin.com/in/franklin-pe%C3%B1a/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-yellow-500 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const selectedCategory = ref('Todos');
const isModalOpen = ref(false);
const selectedProject = ref(null);
const currentImageIndex = ref(0);

const categories = ['Todos', ]; //'Branding', 'Editorial', 'Packaging', 'Digital'

// ✅ Stats separadas para poder animarlas con v-for
const stats = ref([
  { value: '50+', label: 'Proyectos' },
  { value: '30+', label: 'Clientes' },
  { value: '5+',  label: 'Años' },
  { value: '100%', label: 'Satisfacción' },
]);

const projects = ref([
  {
    id: 1,
    title: 'Montessia',
    category: 'Branding',
    client: 'Montessia Cafe Gourmet',
    year: '2024',
    description: 'Identidad visual completa para cafe Gourmet, incluyendo logo, paleta de colores, Packaging y aplicaciones.',
    image: '/img/Montessia.jpg',
    tags: ['Identidad Visual', 'Branding', 'Gastronomía', 'Packaging'],
    gallery: [
      '/img/Poryecto montessia linke_Mesa de trabajo 1-2.jpg',
      '/img/Project 2.jpg',
      '/img/Project 3.jpg',
      '/img/Project 4.jpg',
      '/img/Project 5.jpg',
    ]
  },
  {
    id: 2,
    title: 'CoRay Dev',
    category: 'Branding',
    client: 'CoRay Dev',
    year: '2026',
    description: 'Diseño de identificador visual y logo para CoRay Dev, construyendo una identidad de marca sólida y memorable.',
    image: '/img/Coray_Mesa de trabajo 1 copia 5.jpg',
    tags: ['Identidad Visual', 'Logo', 'Branding'],
    gallery: [
      '/img/Coray_Mesa de trabajo 1 copia 6.jpg',
      '/img/Coray_Mesa de trabajo 1 copia 2.jpg',
      '/img/Coray_Mesa de trabajo 1 copia 4.jpg',
      '/img/Coray_Mesa de trabajo 1 copia 3.jpg',
    ]
  },
  {
    id: 3,
    title: 'Mr Cream',
    category: 'Branding',
    client: 'Postres nacionales',
    year: '2026',
    description: 'Rediseño de marca para empresa de postres nacionales, enfocándose en modernizar su imagen y atraer a un público más joven.',
    image: '/img/Sin_título-1-05-01.jpg',
    tags: ['Rebranding', 'Tech', 'Startup'],
    gallery: [
      '/img/Mr_Cream_Logo.jpg',
      '/img/Sin título-1-05-04.jpg',
      '/img/Mr_Cream_Reticula.jpg',
      '/img/Menu edi 18.11.25_Mesa de trabajo 1_Mesa de trabajo 1.jpg',
      '/img/Menu edi 18.11.25_Mesa de trabajo 1_Mesa de trabajo 1 copia.jpg',
      '/img/Horario_atención.jpg',
      '/img/Envìo.jpg'
    ]
  },
  {
    id: 4,
    title: 'Social Media',
    category: 'Digital',
    client: 'Cam Network',
    year: '2026',
    description: 'Diseño de piezas para redes sociales y papelería corporativa, incluyendo banners, posts y anuncios digitales para campañas de marketing.',
    image: '/img/Portfolio Español 2025_Mesa de trabajo 1 copia 2_Mesa de trabajo 1 copia 20.jpg',
    tags: ['Digital', 'Branding', 'Marketing'],
    gallery: [
      '/img/Portfolio Español 2025_Mesa de trabajo 1 copia 2_Mesa de trabajo 1 copia 21.jpg',
      '/img/Portfolio Español 2025_Mesa de trabajo 1 copia 2_Mesa de trabajo 1 copia 22.jpg',
      '/img/Portfolio Español 2025_Mesa de trabajo 1 copia 2_Mesa de trabajo 1 copia 23.jpg'
    ]
  },
  {
    id: 5,
    title: 'Los Socios',
    category: 'Branding',
    client: 'Los Socios',
    year: '2026',
    description: 'Desarrollo de identidad visual completa: identificador de marca, paleta de colores y sistema visual que refleja la esencia del negocio.',
    image: '/img/portada_socios.jpg',
    tags: ['Identidad Visual', 'Logo', 'Branding'],
    gallery: [
      '/img/Tarjetas_socios.jpg',
      '/img/socios-02.jpg',
    ]
  },
  {
    id: 6,
    title: 'Rebranding',
    category: 'Redesign',
    client: 'Seguros',
    year: '2025',
    description: 'Rediseño completo de la identidad visual para una compañía de seguros, modernizando su logo y materiales de marketing.',
    image: '/img/Sin título-2-06.jpg',
    tags: ['Editorial', 'Revista', 'Layout'],
    gallery: [
      '/img/Sin título-2-01.jpg',
      '/img/Sin título-2-03.jpg',
      '/img/Sin título-2-04.jpg',
      '/img/Sin título-2-05.jpg',
      '/img/Sin título-2-06.jpg'
    ]
  },
]);

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Todos') return projects.value;
  return projects.value.filter(p => p.category === selectedCategory.value);
});

const openModal = (project) => {
  selectedProject.value = project;
  currentImageIndex.value = 0;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedProject.value = null;
  currentImageIndex.value = 0;
  document.body.style.overflow = 'auto';
};

const nextImage = () => {
  if (selectedProject.value && currentImageIndex.value < selectedProject.value.gallery.length - 1) {
    currentImageIndex.value++;
  } else {
    currentImageIndex.value = 0;
  }
};

const previousImage = () => {
  if (selectedProject.value && currentImageIndex.value > 0) {
    currentImageIndex.value--;
  } else {
    currentImageIndex.value = selectedProject.value.gallery.length - 1;
  }
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>