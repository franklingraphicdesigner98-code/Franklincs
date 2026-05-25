<template>
  <div class="bg-black text-white min-h-screen font-sans">
    <!-- Navigation -->
    <nav :class="['fixed w-full z-50 transition-all duration-300', scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent']">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold">
            <span class="text-white">Franklin Peña</span>
            <span class="text-yellow-500">Concept Studio</span>
          </div>
          
          <div class="hidden md:flex items-center space-x-8">
            <a href="#inicio" class="hover:text-yellow-500 transition-colors">Inicio</a>
            <a href="#servicios" class="hover:text-yellow-500 transition-colors">Servicios</a>
            <a href="#proyectos" class="hover:text-yellow-500 transition-colors">Proyectos</a>
            <a href="#contacto" class="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105">
              Contactar
            </a>
          </div>

          <button 
            class="md:hidden text-white"
            @click="isMenuOpen = !isMenuOpen"
          >
            <svg v-if="isMenuOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isMenuOpen" class="md:hidden mt-4 pb-4 space-y-4">
          <a href="#inicio" class="block hover:text-yellow-500 transition-colors" @click="isMenuOpen = false">Inicio</a>
          <a href="#servicios" class="block hover:text-yellow-500 transition-colors" @click="isMenuOpen = false">Servicios</a>
          <a href="#proyectos" class="block hover:text-yellow-500 transition-colors" @click="isMenuOpen = false">Proyectos</a>
          <a href="#contacto" class="block bg-yellow-500 text-black px-6 py-2 rounded-full text-center" @click="isMenuOpen = false">
            Contactar
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="inicio" class="relative min-h-screen flex items-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-black"></div>
      
      <div class="relative max-w-7xl mx-auto px-6 py-32 z-10">
        <div class="grid md:grid-cols-2 gap-12 items-center">

          <!-- TEXTO HERO con animaciones de entrada -->
          <div>
            <p 
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
              class="text-yellow-500 text-sm uppercase tracking-wider mb-4"
            >
              Transformamos Ideas en Realidad
            </p>
            <h1 
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 150 } }"
              class="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Diseño Corporativo & 
              <span class="text-yellow-500"> Soluciones Digitales</span>
            </h1>
            <p 
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
              class="text-gray-400 text-lg mb-8 max-w-xl"
            >
              Fortalecemos la identidad corporativa de tu empresa, acompañándote desde la conceptualización estratégica hasta la implementación técnica, visual y narrativa gráfica, integrando soluciones de software a medida que responden exactamente a tus objetivos de negocio.
            </p>
            <div 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 450 } }"
              class="flex flex-wrap gap-4"
            >
              <a href="#servicios" class="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105 inline-flex items-center">
                Ver Servicios
                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#proyectos" class="border border-yellow-500 text-yellow-500 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-all">
                Nuestro Trabajo
              </a>
            </div>
          </div>

          <!-- IMAGEN HERO con animación de entrada -->
          <div 
            v-motion
            :initial="{ opacity: 0, x: 60 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }"
            class="relative hidden md:block"
          >
            <div class="w-full h-96 rounded-3xl backdrop-blur-sm border border-yellow-500/30 flex items-center justify-center overflow-hidden relative">
              <img 
                src="/img/Montessia.jpg" 
                alt="NEWFORM Design" 
                class="absolute inset-0 w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/40 via-black/50 to-black/60"></div>
              <div class="text-center relative z-10">
                <p class="text-xl text-white">Posibilidades Ilimitadas</p>
              </div>
            </div>
          </div>
        </div>

        <!-- ✅ CAMBIO 1 y 2: IDs #01 y #02, centrados -->
        <div class="flex justify-center mt-20">
          <div class="grid grid-cols-2 gap-4 w-full max-w-2xl">
            <div 
              v-for="service in services" 
              :key="service.id"
              v-motion
              :initial="{ opacity: 0, y: 40 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: service.delay } }"
              @click="handleServiceClick(service.id)"
              class="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all group cursor-pointer"
            >
              <p class="text-yellow-500 text-sm font-bold mb-2">#{{ service.displayId }}</p>
              <h3 class="font-semibold mb-1 group-hover:text-yellow-500 transition-colors">{{ service.title }}</h3>
              <p class="text-gray-400 text-sm">{{ service.desc }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Services Section -->
    <section id="servicios" class="py-32 bg-gradient-to-b from-black to-zinc-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <p 
            v-motion-slide-visible-bottom
            class="text-yellow-500 text-sm uppercase tracking-wider mb-4"
          >Lo Que Hacemos</p>
          <h2 
            v-motion-slide-visible-bottom
            class="text-4xl md:text-6xl font-bold mb-6"
          >
            Servicios que <span class="text-yellow-500">Impulsan</span> tu Marca
          </h2>
          <p 
            v-motion-fade-visible
            class="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Soluciones integrales de diseño, comunicación y tecnología para llevar tu negocio al siguiente nivel
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Diseño Gráfico -->
          <div 
            v-motion-slide-visible-left
            class="bg-black p-8 rounded-3xl border border-white/10 hover:border-yellow-500 transition-all group"
          >
            <div class="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-all">
              <span class="text-3xl">🎨</span>
            </div>
            <h3 class="text-2xl font-bold mb-4">Diseño Gráfico</h3>
            <p class="text-gray-400 mb-6">
              Creamos identidades visuales únicas que capturan la esencia de tu marca y conectan con tu audiencia.
            </p>
            <ul class="space-y-2 text-sm text-gray-400">
              <li class="flex items-center">
                <svg class="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                Branding e Identidad
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                Diseño Editorial
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                Packaging
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                Material Promocional
              </li>
            </ul>
          </div>

          <!-- Desarrollo de Software -->
          <div 
            v-motion-slide-visible-right
            class="bg-black p-8 rounded-3xl border border-white/10 hover:border-yellow-500 transition-all group"
          >
            <div class="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-all">
              <span class="text-3xl">💻</span>
            </div>
            <h3 class="text-2xl font-bold mb-4">Desarrollo de Software</h3>
            <p class="text-gray-400 mb-6">
              Soluciones digitales personalizadas que optimizan procesos y mejoran la experiencia de usuario.
            </p>
            <ul class="space-y-2 text-sm text-gray-400">
              <li class="flex items-center">
                <svg class="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                Aplicaciones Web
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                Sistemas a Medida
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                E-commerce
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                Consultoría Técnica
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="proyectos" class="py-32 bg-zinc-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-16">
          <p 
            v-motion-slide-visible-bottom
            class="text-yellow-500 text-sm uppercase tracking-wider mb-4"
          >Portafolio</p>
          <h2 
            v-motion-slide-visible-bottom
            class="text-4xl md:text-6xl font-bold mb-6"
          >
            Creando Experiencias que <span class="text-yellow-500">Inspiran</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div 
            v-for="(project, index) in projects" 
            :key="index"
            v-motion-fade-visible
            class="group relative overflow-hidden rounded-3xl bg-zinc-800 h-96 cursor-pointer"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="absolute inset-0 p-8 flex flex-col justify-end">
              <p class="text-yellow-500 text-sm mb-2">{{ project.category }}</p>
              <h3 class="text-2xl font-bold">{{ project.title }}</h3>
              <div class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span class="text-yellow-500 inline-flex items-center">
                  Ver Proyecto
                  <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contacto" class="py-32 bg-gradient-to-b from-zinc-900 to-black">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 
          v-motion-slide-visible-bottom
          class="text-4xl md:text-6xl font-bold mb-6"
        >
          ¿Listo para <span class="text-yellow-500">Transformar</span> tu Marca?
        </h2>
        <p 
          v-motion-fade-visible
          class="text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
        >
          Conversemos sobre tu proyecto y cómo podemos ayudarte a alcanzar tus objetivos
        </p>
        <a 
          v-motion-pop-visible
          href="https://api.whatsapp.com/send/?phone=%2B573223003840&text=Hola%2C%20quiero%20iniciar%20un%20proyecto%20con%20Franklin&type=phone_number&app_absent=0" 
          target="_blank"
          rel="noopener noreferrer"
          class="bg-yellow-500 text-black px-12 py-5 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 inline-flex items-center"
        >
          Iniciar Proyecto
          <svg class="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black border-t border-white/10 py-12">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">
              <span class="text-white">NEW</span>
              <span class="text-yellow-500">FORM</span>
            </h3>
            <p class="text-gray-400 text-sm">
              Transformamos ideas en experiencias visuales y digitales extraordinarias.
            </p>
          </div>
<div>
  <h4 class="font-semibold mb-4">Servicios</h4>
  <ul class="space-y-2 text-sm text-gray-400">
    <li><router-link to="/diseno-grafico" class="hover:text-yellow-500 transition-colors">Diseño Gráfico</router-link></li>
    <li><router-link to="/comunicacion-corporativa" class="hover:text-yellow-500 transition-colors">Comunicación</router-link></li>
    <li><router-link to="/consultoria-digital" class="hover:text-yellow-500 transition-colors">Consultoría</router-link></li>
    <li><router-link to="/desarrollo-software" class="hover:text-yellow-500 transition-colors">Software</router-link></li>
  </ul>
</div>
          <div>
            <h4 class="font-semibold mb-4">Empresa</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-yellow-500 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" class="hover:text-yellow-500 transition-colors">Portafolio</a></li>
              <li><a href="#" class="hover:text-yellow-500 transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Conecta</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://www.linkedin.com/in/franklin-peña-832873252" target="_blank" rel="noopener noreferrer" class="hover:text-yellow-500 transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.instagram.com/franklinp.cs/" target="_blank" rel="noopener noreferrer" class="hover:text-yellow-500 transition-colors">Instagram</a>
              </li>
              <li>
                <a href="https://www.behance.net/gallery/220454209/Portfolio" target="_blank" rel="noopener noreferrer" class="hover:text-yellow-500 transition-colors">Behance</a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@franklin_designer" target="_blank" rel="noopener noreferrer" class="hover:text-yellow-500 transition-colors">TikTok</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© 2026 NEWFORM. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMenuOpen = ref(false);
const scrolled = ref(false);

// ✅ CAMBIO 1: displayId visual (#01, #02) separado del id real para routing
const services = ref([
  { id: '01', displayId: '01', title: 'Diseño Gráfico', desc: 'Identidad visual que destaca', delay: 0 },
  { id: '03', displayId: '02', title: 'Desarrollo de Software', desc: 'Soluciones digitales a medida', delay: 150 },
  // { id: '02', displayId: '02', title: 'Comunicación Corporativa', desc: 'Mensajes que conectan', delay: 300 },
  // { id: '04', displayId: '04', title: 'Consultoría Digital', desc: 'Estrategia y transformación', delay: 450 }
]);

const projects = ref([
  { title: 'Branding Corporativo', category: 'Identidad Visual' },
  { title: 'Aplicaciones Web', category: 'Desarrollo' },
  { title: 'Campañas Digitales', category: 'Marketing' }
]);

const handleServiceClick = (serviceId) => {
  if (serviceId === '01') {
    router.push('/diseno-grafico').catch(err => console.error(err));
  } else if (serviceId === '03') {
    router.push('/desarrollo-software').catch(err => console.error(err));
  } else if (serviceId === '04') {
    router.push('/consultoria-digital').catch(err => console.error(err));
  }
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>