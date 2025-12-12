<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import BaseButton from '@/components/ui/BaseButton.vue'
import TechBadge from '@/components/ui/TechBadge.vue'
import { technologies } from '@/data/technologies'
import { experiences } from '@/data/experience'

const { t } = useI18n()

const featuredTechs = technologies.filter((t) => t.proficiency === 'expert').slice(0, 6)
const featuredExperiences = experiences.slice(0, 3)
</script>

<template>
  <div>
    <section
      class="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-background via-white to-blue-50"></div>
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="text-center">
          <p
            class="text-gradient font-medium mb-4 text-lg animate-fade-in-up"
            style="animation-delay: 0.1s"
          >
            {{ t('hero.greeting') }}
          </p>

          <h1
            class="text-5xl md:text-7xl font-bold text-gradient mb-4 animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            {{ t('hero.name') }}
          </h1>

          <p
            class="text-2xl md:text-3xl text-secondary font-medium mb-6 animate-fade-in-up"
            style="animation-delay: 0.3s"
          >
            {{ t('hero.title') }}
          </p>

          <p
            class="text-lg text-text-secondary max-w-2xl mx-auto mb-8 animate-fade-in-up"
            style="animation-delay: 0.4s"
          >
            {{ t('hero.tagline') }}
          </p>

          <div
            class="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up"
            style="animation-delay: 0.5s"
          >
            <TechBadge
              v-for="tech in featuredTechs"
              :key="tech.name"
              :name="tech.name"
              :icon="tech.icon"
              :proficiency="tech.proficiency"
              size="lg"
            />
          </div>

          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style="animation-delay: 0.6s"
          >
            <RouterLink to="/contact">
              <BaseButton size="lg">
                <i class="fa-solid fa-envelope mr-2"></i>
                {{ t('hero.cta_contact') }}
              </BaseButton>
            </RouterLink>

            <RouterLink to="/about#experience">
              <BaseButton
                variant="outline"
                size="lg"
              >
                <i class="fa-solid fa-briefcase mr-2"></i>
                {{ t('nav.experience') }}
              </BaseButton>
            </RouterLink>
          </div>

          <div class="mt-16 animate-bounce">
            <RouterLink
              to="/about"
              class="text-text-secondary hover:text-accent transition-colors"
            >
              <i class="fa-solid fa-chevron-down text-2xl"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(exp, index) in featuredExperiences"
            :key="exp.id"
            class="group bg-background rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
            :style="{ animationDelay: `${0.1 * index}s` }"
          >
            <div
              v-if="exp.badge"
              class="mb-4"
            >
              <span
                class="inline-flex items-center gap-1 text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full"
              >
                <i class="fa-solid fa-trophy"></i>
                {{ exp.badge.label }}
              </span>
            </div>
            <h3
              class="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors"
            >
              {{ t(exp.positionKey) }}
            </h3>
            <p class="text-text-secondary text-sm mb-4 line-clamp-2">
              {{ t(exp.descriptionKey) }}
            </p>
            <RouterLink
              :to="`/about#experience`"
              class="text-accent font-medium text-sm hover:underline inline-flex items-center gap-1"
            >
              {{ t('experience.viewDetails') }}
              <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </RouterLink>
          </div>
        </div>

        <div class="text-center mt-12">
          <RouterLink to="/about#experience">
            <BaseButton variant="outline">
              {{ t('nav.experience') }}
              <i class="fa-solid fa-arrow-right ml-2"></i>
            </BaseButton>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
