<template>
  <div class="py-6">
    <UContainer>
      <h1 class="font-semibold text-2xl">Translation Manager Example</h1>

      <LangSwitcher class="my-6" />

      <h2 class="font-semibold text-xl mb-2">{{ $t('examples') }}:</h2>

      <div class="space-y-4">
        <div>
          <h3 class="text-primary">Variables</h3>
          <p>
            {{ $t('email-address', { email: 'hello@example.com' }) }}
          </p>
        </div>

        <div>
          <h3 class="text-primary">{{ $t('pluralization') }}</h3>
          <p>1 {{ $t('car', 1) }} - 2 {{ $t('car', 2) }}</p>
        </div>

        <div>
          <h3 class="text-primary">HTML</h3>
          <p v-html="$t('html-msg')"></p>
        </div>

        <UAlert
          icon="i-heroicons-shield-exclamation"
          color="red"
          variant="outline"
          :description="$t('html-warning')"
        />
      </div>
    </UContainer>
  </div>
</template>
