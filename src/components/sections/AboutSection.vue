<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const { t } = useI18n()
</script>

<template>
  <section
    id="about"
    class="py-20 bg-white"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading title-key="about.title" />

      <div class="max-w-3xl mx-auto">
        <div class="space-y-6 text-text-secondary leading-relaxed">
          <p>{{ t('about.p1') }}</p>
          <p>{{ t('about.p2') }}</p>
          <p>{{ t('about.p3') }}</p>
        </div>

        <div class="mt-10 flex flex-wrap items-center justify-center gap-6">
          <div class="flex items-center gap-2 text-text-secondary">
            <i class="fa-solid fa-location-dot text-accent"></i>
            <span>{{ t('about.location') }}</span>
          </div>

          <div class="flex items-center gap-2 text-accent font-medium">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>{{ t('about.available') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
