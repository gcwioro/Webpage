<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/ui/BaseButton.vue'
import TechBadge from '@/components/ui/TechBadge.vue'
import { getProjectById } from '@/data/projects'

const route = useRoute()
const { t } = useI18n()

const project = computed(() => getProjectById(route.params.id as string))
</script>

<template>
  <div class="pt-20 min-h-screen">
    <div v-if="project">
      <section
        class="py-12 bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden"
      >
        <div class="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <RouterLink
            to="/projects"
            class="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors animate-fade-in-up"
          >
            <i class="fa-solid fa-arrow-left"></i>
            Back to Projects
          </RouterLink>

          <div
            v-if="project.badge?.type === 'isef'"
            class="mb-4 animate-fade-in-up"
            style="animation-delay: 0.1s"
          >
            <span
              class="inline-flex items-center gap-2 text-sm font-medium text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <img
                src="https://www.societyforscience.org/wp-content/uploads/2023/08/ISEF-Logo-Full-Color.png"
                alt="Intel ISEF"
                class="h-5 w-auto brightness-0 invert"
              />
              {{ project.badge.label }}
            </span>
          </div>
          <div
            v-else-if="project.awards"
            class="mb-4 animate-fade-in-up"
            style="animation-delay: 0.1s"
          >
            <span
              class="inline-flex items-center gap-2 text-sm font-medium text-yellow-300 bg-yellow-500/20 px-3 py-1 rounded-full"
            >
              <i class="fa-solid fa-trophy"></i>
              Award-Winning Project
            </span>
          </div>

          <h1
            class="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up"
            style="animation-delay: 0.15s"
          >
            {{ t(project.titleKey) }}
          </h1>

          <div
            class="flex flex-wrap gap-6 text-white/80 mb-6 animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            <span class="flex items-center gap-2">
              <i class="fa-solid fa-user"></i>
              {{ project.role }}
            </span>
            <span class="flex items-center gap-2">
              <i class="fa-solid fa-calendar"></i>
              {{ project.year }}
            </span>
          </div>

          <div
            class="flex flex-wrap gap-2 animate-fade-in-up"
            style="animation-delay: 0.25s"
          >
            <TechBadge
              v-for="tech in project.technologies"
              :key="tech"
              :name="tech"
              proficiency="advanced"
            />
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6">
          <div class="prose prose-lg max-w-none mb-12 animate-fade-in-up">
            <p class="text-xl text-text-secondary leading-relaxed">
              {{ t(project.fullDescriptionKey) }}
            </p>
          </div>

          <div
            v-if="project.awards && project.awards.length > 0"
            class="mb-12 animate-fade-in-up"
            style="animation-delay: 0.1s"
          >
            <h2 class="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <i class="fa-solid fa-trophy text-yellow-500"></i>
              {{ t('projects.awards') }}
            </h2>
            <div class="grid md:grid-cols-2 gap-4">
              <div
                v-for="award in project.awards"
                :key="award.titleKey"
                class="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <i class="fa-solid fa-medal text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 class="font-bold text-primary mb-1">{{ t(award.titleKey) }}</h3>
                    <p class="text-sm text-text-secondary">{{ t(award.descriptionKey) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="project.highlights && project.highlights.length > 0"
            class="mb-12 animate-fade-in-up"
            style="animation-delay: 0.15s"
          >
            <h2 class="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <i class="fa-solid fa-star text-accent"></i>
              {{ t('projects.highlights') }}
            </h2>
            <ul class="space-y-4">
              <li
                v-for="(highlight, index) in project.highlights"
                :key="highlight"
                class="flex items-start gap-4 p-4 bg-background rounded-xl hover:shadow-md transition-shadow"
              >
                <div
                  class="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-accent font-bold text-sm">{{ index + 1 }}</span>
                </div>
                <span class="text-text-secondary">{{ t(highlight) }}</span>
              </li>
            </ul>
          </div>

          <div
            v-if="project.links && project.links.length > 0"
            class="animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            <h2 class="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <i class="fa-solid fa-link text-accent"></i>
              {{ t('projects.links') }}
            </h2>
            <div class="flex flex-wrap gap-3">
              <BaseButton
                v-for="link in project.links"
                :key="link.url"
                :href="link.url"
                variant="outline"
              >
                <i class="fa-solid fa-external-link mr-2"></i>
                {{ link.label }}
              </BaseButton>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div
      v-else
      class="flex items-center justify-center min-h-[60vh]"
    >
      <div class="text-center">
        <i class="fa-solid fa-folder-open text-6xl text-gray-300 mb-4"></i>
        <h2 class="text-2xl font-bold text-primary mb-2">Project Not Found</h2>
        <RouterLink
          to="/projects"
          class="text-accent hover:underline"
        >
          Back to Projects
        </RouterLink>
      </div>
    </div>
  </div>
</template>
