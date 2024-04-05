<script lang="ts" setup>
const { locale: currentLocale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return [
    locales.value
      .filter((i) => i.code !== currentLocale.value)
      .map((lang) => {
        return {
          label: lang.name,
          click: () => {
            setLocale(lang.code)
          }
        }
      })
  ]
})

const currentLocaleObj = computed(() => {
  const _locale = locales.value.filter(
    (lang) => lang.code === currentLocale.value
  )
  return _locale[0]
})
</script>

<template>
  <div>
    <h4 class="text-sm mb-1.5">{{ $t('language') }}</h4>
    <UDropdown
      :items="availableLocales"
      :popper="{ placement: 'bottom-start' }"
    >
      <UButton
        color="white"
        leading-icon="i-heroicons-language"
        :label="currentLocaleObj.name"
        trailing-icon="i-heroicons-chevron-down-20-solid"
      />
    </UDropdown>
  </div>
</template>
