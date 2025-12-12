<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import TechBadge from './TechBadge.vue'

const { t } = useI18n()

const {
  company,
  positionKey,
  startDate,
  endDate = null,
  descriptionKey,
  technologies = [],
} = defineProps<{
  company: string
  positionKey: string
  startDate: string
  endDate?: string | null
  descriptionKey: string
  technologies?: string[]
  fullDescriptionKey?: string
  highlights?: string[]
  awards?: { titleKey: string; descriptionKey: string; logo?: string }[]
  links?: { label: string; url: string }[]
  badge?: { type: 'isef' | 'award'; label: string }
}>()

function formatDate(date: string): string {
  if (date.length === 4) return date
  const [year, month] = date.split('-')
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  return `${monthNames[parseInt(month) - 1]} ${year}`
}
</script>

<template>
  <div class="relative pl-8 pb-12 last:pb-0">
    <div
      class="absolute left-0 top-0 w-4 h-4 bg-accent rounded-full border-4 border-white shadow"
    ></div>
    <div class="absolute left-[7px] top-4 w-0.5 h-full bg-gray-200 last:hidden"></div>

    <div class="ml-4 bg-white p-6 rounded-lg shadow-md">
      <div class="flex flex-wrap items-center gap-2 mb-1">
        <span class="text-sm font-medium text-accent">
          {{ formatDate(startDate) }} —
          {{ endDate ? formatDate(endDate) : t('experience.present') }}
        </span>
        <span
          v-if="badge"
          class="inline-flex items-center gap-1 text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full"
        >
          <i class="fa-solid fa-trophy"></i>
          {{ badge.label }}
        </span>
      </div>

      <h3 class="text-lg font-semibold text-primary">{{ t(positionKey) }}</h3>
      <p class="text-text-secondary font-medium mb-2">{{ company }}</p>
      <p class="text-text-secondary text-sm mb-3">{{ t(descriptionKey) }}</p>

      <div
        v-if="fullDescriptionKey"
        class="text-text-secondary text-sm mb-4"
      >
        {{ t(fullDescriptionKey) }}
      </div>

      <div
        v-if="highlights && highlights.length > 0"
        class="mb-4"
      >
        <h4 class="font-semibold text-primary mb-2">Highlights:</h4>
        <ul class="list-disc list-inside text-text-secondary text-sm space-y-1">
          <li
            v-for="highlight in highlights"
            :key="highlight"
          >
            {{ t(highlight) }}
          </li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-2 mb-4">
        <TechBadge
          v-for="tech in technologies"
          :key="tech"
          :name="tech"
          proficiency="intermediate"
        />
      </div>

      <div
        v-if="awards && awards.length > 0"
        class="mb-4"
      >
        <h4 class="font-semibold text-primary mb-2">Awards:</h4>
        <div
          v-for="award in awards"
          :key="award.titleKey"
          class="flex items-center gap-4"
        >
          <img
            v-if="award.logo"
            :src="award.logo"
            :alt="t(award.titleKey)"
            class="w-12 h-12 object-contain"
          />
          <div>
            <p class="font-semibold text-primary">{{ t(award.titleKey) }}</p>
            <p class="text-text-secondary text-sm">{{ t(award.descriptionKey) }}</p>
          </div>
        </div>
      </div>

      <div
        v-if="links && links.length > 0"
        class="flex flex-wrap gap-4"
      >
        <a
          v-for="link in links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-accent hover:underline"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </div>
</template>
