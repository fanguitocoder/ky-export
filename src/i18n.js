import { createI18n } from 'vue-i18n'
import en from './locales/en'
import es from './locales/es'

// Detect browser language
function getBrowserLocale() {
  const navigatorLocale = navigator.languages !== undefined
    ? navigator.languages[0]
    : navigator.language

  if (!navigatorLocale) {
    return 'en'
  }

  // Get the language code (e.g., 'es' from 'es-MX')
  const locale = navigatorLocale.trim().split(/-|_/)[0]
  
  // Return 'es' for Spanish, otherwise default to 'en'
  return locale === 'es' ? 'es' : 'en'
}

const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: getBrowserLocale(), // Auto-detect browser language
  fallbackLocale: 'en',
  messages: {
    en,
    es
  }
})

export default i18n
