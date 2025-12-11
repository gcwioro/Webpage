<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { ProjectDetail } from '@/data/projects'
import TechBadge from './TechBadge.vue'
import BaseButton from './BaseButton.vue'

const { t } = useI18n()

const { project, isOpen = false } = defineProps<{
  project: ProjectDetail | null
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

function close() {
  emit('close')
}

function handleBackdropClick(event: MouseEvent) {
  if (event.target === event.currentTarget) {
    close()
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen && project"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        @click="handleBackdropClick"
      >
        <Transition
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-200"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="isOpen"
            class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
          >
            <div class="bg-gradient-accent p-6 text-white relative">
              <button
                @click="close"
                class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>

              <h2 class="text-2xl font-bold pr-10">{{ t(project.titleKey) }}</h2>

              <div class="flex flex-wrap gap-4 mt-3 text-sm text-white/90">
                <span class="flex items-center gap-1">
                  <i class="fa-solid fa-user"></i>
                  {{ project.role }}
                </span>
                <span class="flex items-center gap-1">
                  <i class="fa-solid fa-calendar"></i>
                  {{ project.year }}
                </span>
              </div>
            </div>

            <div class="p-6 overflow-y-auto max-h-[60vh]">
              <p class="text-text-secondary leading-relaxed mb-6">
                {{ t(project.fullDescriptionKey) }}
              </p>

              <div
                v-if="project.awards && project.awards.length > 0"
                class="mb-6"
              >
                <h3 class="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                  <i class="fa-solid fa-trophy text-yellow-500"></i>
                  {{ t('projects.awards') }}
                </h3>
                <div class="space-y-3">
                  <div
                    v-for="award in project.awards"
                    :key="award.titleKey"
                    class="bg-yellow-50 border border-yellow-200 rounded-lg p-4"
                  >
                    <h4 class="font-semibold text-primary">{{ t(award.titleKey) }}</h4>
                    <p class="text-sm text-text-secondary mt-1">{{ t(award.descriptionKey) }}</p>
                  </div>
                </div>
              </div>

              <div
                v-if="project.highlights && project.highlights.length > 0"
                class="mb-6"
              >
                <h3 class="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                  <i class="fa-solid fa-star text-accent"></i>
                  {{ t('projects.highlights') }}
                </h3>
                <ul class="space-y-2">
                  <li
                    v-for="highlight in project.highlights"
                    :key="highlight"
                    class="flex items-start gap-2 text-text-secondary"
                  >
                    <i class="fa-solid fa-check text-accent mt-1 flex-shrink-0"></i>
                    <span>{{ t(highlight) }}</span>
                  </li>
                </ul>
              </div>

              <div class="mb-6">
                <h3 class="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                  <i class="fa-solid fa-code text-accent"></i>
                  {{ t('projects.technologies') }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  <TechBadge
                    v-for="tech in project.technologies"
                    :key="tech"
                    :name="tech"
                    proficiency="advanced"
                  />
                </div>
              </div>

              <div v-if="project.links && project.links.length > 0">
                <h3 class="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                  <i class="fa-solid fa-link text-accent"></i>
                  {{ t('projects.links') }}
                </h3>
                <div class="flex flex-wrap gap-3">
                  <BaseButton
                    v-for="link in project.links"
                    :key="link.url"
                    :href="link.url"
                    variant="outline"
                    size="sm"
                  >
                    <i class="fa-solid fa-arrow-up-right-from-square mr-2"></i>
                    {{ link.label }}
                  </BaseButton>
                </div>
              </div>
            </div>

            <div class="p-4 border-t border-gray-100 bg-gray-50">
              <BaseButton
                variant="secondary"
                size="sm"
                class="w-full"
                @click="close"
              >
                {{ t('projects.close') }}
              </BaseButton>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
