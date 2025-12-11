<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { services } from '@/data/services'

const { t } = useI18n()

const detailedServices = [
  {
    ...services[0],
    features: ['REST & GraphQL APIs', '.NET / C# / Node.js', 'Domain-Driven Design', 'Microservices Architecture', 'Database Design']
  },
  {
    ...services[1],
    features: ['Vue 3 / React', 'TypeScript', 'Responsive Design', 'Tailwind CSS', 'State Management']
  },
  {
    ...services[2],
    features: ['System Design', 'Cloud Architecture (GCP/Azure)', 'Scalability Planning', 'Performance Optimization', 'Security Best Practices']
  },
  {
    ...services[3],
    features: ['Code Reviews', 'Architecture Audits', 'Team Training', 'Best Practices', 'Tech Stack Selection']
  }
]
</script>

<template>
  <div class="pt-20">
    <section class="py-20 bg-gradient-to-br from-background via-white to-blue-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16 animate-fade-in-up">
          <h1 class="text-4xl md:text-5xl font-bold text-gradient mb-4">{{ t('services.title') }}</h1>
          <p class="text-xl text-text-secondary max-w-2xl mx-auto">{{ t('services.subtitle') }}</p>
          <div class="w-20 h-1 bg-gradient-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="(service, index) in detailedServices"
            :key="service.id"
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up"
            :style="{ animationDelay: `${0.15 * index}s` }"
          >
            <div class="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i :class="service.icon" class="text-2xl text-white"></i>
            </div>

            <h3 class="text-2xl font-bold text-primary mb-3">{{ t(service.titleKey) }}</h3>
            <p class="text-text-secondary mb-6">{{ t(service.descriptionKey) }}</p>

            <ul class="space-y-3">
              <li
                v-for="feature in service.features"
                :key="feature"
                class="flex items-center gap-3 text-text-secondary"
              >
                <i class="fa-solid fa-check text-accent"></i>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-primary text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
          Ready to Start Your Project?
        </h2>
        <p class="text-xl text-gray-300 mb-8 animate-fade-in-up" style="animation-delay: 0.1s">
          Let's discuss how I can help bring your ideas to life.
        </p>
        <RouterLink to="/contact" class="animate-fade-in-up inline-block" style="animation-delay: 0.2s">
          <BaseButton variant="secondary" size="lg">
            <i class="fa-solid fa-envelope mr-2"></i>
            Get in Touch
          </BaseButton>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
