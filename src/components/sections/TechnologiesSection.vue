<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechBadge from '@/components/ui/TechBadge.vue'
import { getTechnologiesByCategory } from '@/data/technologies'

const { t } = useI18n()

const categories = [
  { key: 'frontend', labelKey: 'technologies.categories.frontend', icon: 'fa-solid fa-desktop' },
  { key: 'backend', labelKey: 'technologies.categories.backend', icon: 'fa-solid fa-server' },
  { key: 'cloud', labelKey: 'technologies.categories.cloud', icon: 'fa-solid fa-cloud' },
  { key: 'methods', labelKey: 'technologies.categories.methods', icon: 'fa-solid fa-lightbulb' },
] as const
</script>

<template>
  <section
    id="technologies"
    class="py-20 bg-white"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        title-key="technologies.title"
        subtitle-key="technologies.subtitle"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="category in categories"
          :key="category.key"
          class="bg-background rounded-xl p-6 hover:shadow-md transition-shadow"
        >
          <h3 class="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <i
              :class="category.icon"
              class="text-accent"
            ></i>
            {{ t(category.labelKey) }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <TechBadge
              v-for="tech in getTechnologiesByCategory(category.key)"
              :key="tech.name"
              :name="tech.name"
              :proficiency="tech.proficiency"
              :icon="tech.icon"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
