<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useScrollTo } from '@/composables/useScrollTo'
import BaseButton from '@/components/ui/BaseButton.vue'

const { t } = useI18n()
const { scrollTo } = useScrollTo()
</script>

<template>
  <section
    id="hero"
    class="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-to-br from-background via-white to-blue-50"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center">
        <p class="text-gradient font-medium mb-4 text-lg">{{ t('hero.greeting') }}</p>

        <h1 class="text-5xl md:text-7xl font-bold text-gradient mb-4">
          {{ t('hero.name') }}
        </h1>

        <p class="text-2xl md:text-3xl text-secondary font-medium mb-6">
          {{ t('hero.title') }}
        </p>

        <p class="text-lg text-text-secondary max-w-2xl mx-auto mb-10">
          {{ t('hero.tagline') }}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <BaseButton size="lg" @click="scrollTo('contact')">
            <i class="fa-solid fa-envelope mr-2"></i>
            {{ t('hero.cta_contact') }}
          </BaseButton>

          <BaseButton variant="outline" size="lg" @click="scrollTo('projects')">
            <i class="fa-solid fa-folder-open mr-2"></i>
            {{ t('hero.cta_projects') }}
          </BaseButton>
        </div>

        <div class="mt-16 animate-bounce">
          <button
            @click="scrollTo('about')"
            class="text-text-secondary hover:text-accent transition-colors"
          >
            <i class="fa-solid fa-chevron-down text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
