import { createApp } from 'vue'
import './assets/tokens.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'  // ← AGREGAR
import { i18n } from './i18n'

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)  // ← AGREGAR
app.use(i18n)
app.mount('#app')