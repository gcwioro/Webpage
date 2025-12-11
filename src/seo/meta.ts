import { useHead } from '@unhead/vue'
import { computed, type ComputedRef } from 'vue'
import type { Locale } from '@/types/portfolio'

interface MetaConfig {
  de: {
    title: string
    description: string
    keywords: string
  }
  en: {
    title: string
    description: string
    keywords: string
  }
}

const metaConfig: MetaConfig = {
  de: {
    title: 'Günther Cwioro | Full-Stack Software Engineer',
    description: 'Freelance Full-Stack Developer aus Österreich. Spezialisiert auf .NET, Vue 3 und TypeScript mit über 10 Jahren Erfahrung in System-Architektur und Cloud-Lösungen.',
    keywords: 'Full-Stack Developer, Vue.js, .NET, TypeScript, Österreich, Freelance, Software Engineer, API Design, DDD'
  },
  en: {
    title: 'Günther Cwioro | Full-Stack Software Engineer',
    description: 'Freelance Full-Stack Developer from Austria. Specialized in .NET, Vue 3 and TypeScript with over 10 years of experience in system architecture and cloud solutions.',
    keywords: 'Full-Stack Developer, Vue.js, .NET, TypeScript, Austria, Freelance, Software Engineer, API Design, DDD'
  }
}

export function useSeoMeta(locale: ComputedRef<Locale>) {
  const meta = computed(() => metaConfig[locale.value])

  useHead({
    title: computed(() => meta.value.title),
    htmlAttrs: {
      lang: computed(() => locale.value)
    },
    meta: [
      { name: 'description', content: computed(() => meta.value.description) },
      { name: 'keywords', content: computed(() => meta.value.keywords) },
      { name: 'author', content: 'Günther Cwioro' },
      { name: 'robots', content: 'index, follow' },

      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: computed(() => meta.value.title) },
      { property: 'og:description', content: computed(() => meta.value.description) },
      { property: 'og:url', content: 'https://cwioro.online' },
      { property: 'og:locale', content: computed(() => locale.value === 'de' ? 'de_AT' : 'en_US') },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: computed(() => meta.value.title) },
      { name: 'twitter:description', content: computed(() => meta.value.description) }
    ],
    link: [
      { rel: 'canonical', href: 'https://cwioro.online' },
      { rel: 'alternate', hreflang: 'de', href: 'https://cwioro.online' },
      { rel: 'alternate', hreflang: 'en', href: 'https://cwioro.online?lang=en' }
    ]
  })
}
