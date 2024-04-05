// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', 'nuxt-translation-manager', '@nuxt/ui'],
  'translation-manager': {
    langDir: 'lang'
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en-US.json'
      },
      {
        code: 'es',
        iso: 'es',
        name: 'Español',
        file: 'es-ES.json'
      },
      {
        code: 'ca',
        iso: 'ca',
        name: 'Català',
        file: 'ca-ES.json'
      }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang',
    compilation: {
      strictMessage: false
    }
  }
})
