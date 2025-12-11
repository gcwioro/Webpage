<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BaseCard from './BaseCard.vue'
import TechBadge from './TechBadge.vue'
import type { ProjectDetail } from '@/data/projects'

const { t } = useI18n()

const {
  project
} = defineProps<{
  project: ProjectDetail
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

const hasAwards = project.awards && project.awards.length > 0
</script>

<template>
  <BaseCard
    class="cursor-pointer group relative"
    @click="emit('click')"
  >
    <div v-if="hasAwards" class="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
      <i class="fa-solid fa-trophy text-white text-sm"></i>
    </div>

    <div class="flex justify-between items-start mb-3">
      <h3 class="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
        {{ t(project.titleKey) }}
      </h3>
      <span class="text-xs text-text-secondary bg-gray-100 px-2 py-1 rounded">{{ project.year }}</span>
    </div>

    <p class="text-text-secondary text-sm mb-4 line-clamp-2">{{ t(project.descriptionKey) }}</p>

    <div class="flex flex-wrap gap-2 mb-4">
      <TechBadge
        v-for="tech in project.technologies.slice(0, 4)"
        :key="tech"
        :name="tech"
        proficiency="intermediate"
      />
      <span
        v-if="project.technologies.length > 4"
        class="text-xs text-text-secondary self-center"
      >
        +{{ project.technologies.length - 4 }}
      </span>
    </div>

    <div class="flex items-center justify-between text-sm">
      <span class="text-text-secondary">{{ project.role }}</span>
      <span class="text-accent group-hover:translate-x-1 transition-transform flex items-center gap-1">
        {{ t('projects.viewDetails') }}
        <i class="fa-solid fa-arrow-right"></i>
      </span>
    </div>
  </BaseCard>
</template>
