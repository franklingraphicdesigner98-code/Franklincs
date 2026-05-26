import { createApp } from 'vue'
import './assets/tokens.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'  // ← AGREGAR

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)  // ← AGREGAR
app.mount('#app')