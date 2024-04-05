import en from './lang/en-US.json'
import es from './lang/es-ES.json'
import ca from './lang/ca-ES.json'

export default defineI18nConfig((/* nuxt */) => {
  return {
    legacy: false,
    fallbackLocale: 'en',
    messages: {
      en,
      es,
      ca
    }
  }
})
