<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechBadge from '@/components/ui/TechBadge.vue'
import TimelineItem from '@/components/ui/TimelineItem.vue'
import { getTechnologiesByCategory } from '@/data/technologies'
import { experiences } from '@/data/experience'

const { t } = useI18n()

const categories = [
  { key: 'frontend', labelKey: 'technologies.categories.frontend', icon: 'fa-solid fa-desktop' },
  { key: 'backend', labelKey: 'technologies.categories.backend', icon: 'fa-solid fa-server' },
  { key: 'cloud', labelKey: 'technologies.categories.cloud', icon: 'fa-solid fa-cloud' },
  { key: 'methods', labelKey: 'technologies.categories.methods', icon: 'fa-solid fa-lightbulb' },
] as const
</script>

<template>
  <div class="pt-20">
    <section class="py-20 bg-gradient-to-br from-background via-white to-blue-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16 animate-fade-in-up">
          <h1 class="text-4xl md:text-5xl font-bold text-gradient mb-4">{{ t('about.title') }}</h1>
          <div class="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6 animate-fade-in-left">
            <p class="text-lg text-text-secondary leading-relaxed">{{ t('about.p1') }}</p>
            <p class="text-lg text-text-secondary leading-relaxed">{{ t('about.p2') }}</p>
            <p class="text-lg text-text-secondary leading-relaxed">{{ t('about.p3') }}</p>

            <div class="flex flex-wrap items-center gap-6 pt-4">
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

          <div class="grid grid-cols-2 gap-4 animate-fade-in-right">
            <div
              class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div class="text-4xl font-bold text-gradient mb-2">10+</div>
              <div class="text-text-secondary text-sm">Years Experience</div>
            </div>
            <div
              class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div class="text-4xl font-bold text-gradient mb-2">50+</div>
              <div class="text-text-secondary text-sm">Projects Completed</div>
            </div>
            <div
              class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div class="text-4xl font-bold text-gradient mb-2">2</div>
              <div class="text-text-secondary text-sm">Awards Won</div>
            </div>
            <div
              class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div class="text-4xl font-bold text-gradient mb-2">1</div>
              <div class="text-text-secondary text-sm">Startup Founded</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title-key="technologies.title"
          subtitle-key="technologies.subtitle"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(category, index) in categories"
            :key="category.key"
            class="bg-background rounded-2xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
            :style="{ animationDelay: `${0.1 * index}s` }"
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

    <section class="py-20 bg-background">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title-key="experience.title"
          subtitle-key="experience.subtitle"
        />

        <div class="max-w-3xl mx-auto">
          <TimelineItem
            v-for="(exp, index) in experiences"
            :key="exp.id"
            :company="exp.company"
            :position-key="exp.positionKey"
            :start-date="exp.startDate"
            :end-date="exp.endDate"
            :description-key="exp.descriptionKey"
            :technologies="exp.technologies"
            class="animate-fade-in-up"
            :style="{ animationDelay: `${0.1 * index}s` }"
          />
        </div>
      </div>
    </section>
  </div>
</template>
