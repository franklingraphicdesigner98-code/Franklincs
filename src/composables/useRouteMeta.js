import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const DEFAULT_TITLE = 'Franklin Peña — Concept Studio'
const DEFAULT_DESCRIPTION = 'Diseño, tecnología y sistemas que hacen que tu marca trabaje por ti — en todos los canales. Branding, diseño gráfico, empaques, impresión 3D, desarrollo web e IA — desde Colombia, en remoto para clientes de todo el mundo.'
const SITE_URL = 'https://franklinsc.vercel.app'
const OG_IMAGE = `${SITE_URL}/img/og-cover.jpg`

// Aplica el title/description de route.meta como <title> y <meta name="description">
// reales en el <head>. Cada ruta define su propio meta.title / meta.description en
// src/router/index.js — para agregar una página nueva, solo hay que añadir esos dos
// campos ahí; no hace falta tocar este archivo.
export function useRouteMeta() {
  const route = useRoute()
  const { locale } = useI18n()

  const title = () => route.meta.title || DEFAULT_TITLE
  const description = () => route.meta.description || DEFAULT_DESCRIPTION
  const url = () => `${SITE_URL}${route.path}`

  useHead({
    // Sin esto la generación estática deja <html lang="en">
    htmlAttrs: { lang: () => locale.value },
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Franklin Peña Concept Studio' },
      { property: 'og:locale', content: () => (locale.value === 'en' ? 'en_US' : 'es_CO') },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Franklin Peña Concept Studio' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: OG_IMAGE }
    ],
    link: [
      { rel: 'canonical', href: url }
    ]
  })
}
