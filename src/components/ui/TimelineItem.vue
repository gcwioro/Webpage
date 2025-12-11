<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import TechBadge from './TechBadge.vue'
import type { Experience } from '@/types/portfolio'

const { t } = useI18n()

const {
  company,
  positionKey,
  startDate,
  endDate = null,
  descriptionKey,
  technologies = []
} = defineProps<{
  company: string
  positionKey: string
  startDate: string
  endDate?: string | null
  descriptionKey: string
  technologies?: string[]
}>()

function formatDate(date: string): string {
  if (date.length === 4) return date
  const [year, month] = date.split('-')
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${monthNames[parseInt(month) - 1]} ${year}`
}
</script>

<template>
  <div class="relative pl-8 pb-12 last:pb-0">
    <div class="absolute left-0 top-0 w-4 h-4 bg-accent rounded-full border-4 border-white shadow"></div>
    <div class="absolute left-[7px] top-4 w-0.5 h-full bg-gray-200 last:hidden"></div>

    <div class="ml-4">
      <div class="flex flex-wrap items-center gap-2 mb-1">
        <span class="text-sm font-medium text-accent">
          {{ formatDate(startDate) }} — {{ endDate ? formatDate(endDate) : t('experience.present') }}
        </span>
      </div>

      <h3 class="text-lg font-semibold text-primary">{{ t(positionKey) }}</h3>
      <p class="text-text-secondary font-medium mb-2">{{ company }}</p>
      <p class="text-text-secondary text-sm mb-3">{{ t(descriptionKey) }}</p>

      <div class="flex flex-wrap gap-2">
        <TechBadge
          v-for="tech in technologies"
          :key="tech"
          :name="tech"
          proficiency="intermediate"
        />
      </div>
    </div>
  </div>
</template>
