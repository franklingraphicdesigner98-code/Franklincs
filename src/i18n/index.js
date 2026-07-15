import { createI18n } from 'vue-i18n'
import es from '../locales/es.js'
import en from '../locales/en.js'

const STORAGE_KEY = 'fp-lang'

function detectLocale() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'es' || saved === 'en') return saved

  const browserLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase()
  return browserLang.startsWith('en') ? 'en' : 'es'
}

export const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'es',
  messages: { es, en }
})

export function setLocale(locale) {
  i18n.global.locale.value = locale
  localStorage.setItem(STORAGE_KEY, locale)
  document.documentElement.setAttribute('lang', locale)
}

document.documentElement.setAttribute('lang', i18n.global.locale.value)
