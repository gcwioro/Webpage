import { createI18n } from 'vue-i18n'
import de from './locales/de.json'
import en from './locales/en.json'
import type { Locale } from '@/types/portfolio'

const STORAGE_KEY = 'locale'

function getStoredLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'de' || stored === 'en') return stored
  const browserLang = navigator.language.split('-')[0]
  return browserLang === 'en' ? 'en' : 'de'
}

export function setStoredLocale(locale: Locale): void {
  localStorage.setItem(STORAGE_KEY, locale)
}

export const i18n = createI18n({
  legacy: false,
  locale: getStoredLocale(),
  fallbackLocale: 'en',
  messages: { de, en }
})

export function useLocale() {
  const { locale } = i18n.global

  function toggleLocale() {
    const newLocale: Locale = locale.value === 'de' ? 'en' : 'de'
    locale.value = newLocale
    setStoredLocale(newLocale)
    document.documentElement.lang = newLocale
  }

  return { locale, toggleLocale }
}
