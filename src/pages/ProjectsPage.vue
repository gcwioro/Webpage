<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechBadge from '@/components/ui/TechBadge.vue'
import { projects } from '@/data/projects'

const { t } = useI18n()

const selectedFilter = ref<string>('all')

const filters = ['all', 'startup', 'enterprise', 'research']

const filteredProjects = computed(() => {
  if (selectedFilter.value === 'all') return projects
  if (selectedFilter.value === 'startup') {
    return projects.filter(p => ['autoletter', 'kickscale', 'saraas'].includes(p.id))
  }
  if (selectedFilter.value === 'enterprise') {
    return projects.filter(p => ['noborder', 'trustbit-ddd', 'hex-optimization', 'satalia-vrp'].includes(p.id))
  }
  if (selectedFilter.value === 'research') {
    return projects.filter(p => ['adhoc-routing', 'bitmoving-video'].includes(p.id))
  }
  return projects
})
</script>

<template>
  <div class="pt-20">
    <section class="py-20 bg-gradient-to-br from-background via-white to-blue-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12 animate-fade-in-up">
          <h1 class="text-4xl md:text-5xl font-bold text-gradient mb-4">{{ t('projects.title') }}</h1>
          <p class="text-xl text-text-secondary max-w-2xl mx-auto">{{ t('projects.subtitle') }}</p>
          <div class="w-20 h-1 bg-gradient-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style="animation-delay: 0.1s">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="selectedFilter = filter"
            class="px-6 py-2 rounded-full font-medium transition-all duration-300"
            :class="selectedFilter === filter
              ? 'bg-gradient-accent text-white shadow-lg'
              : 'bg-white text-text-secondary hover:bg-gray-100'"
          >
            {{ filter === 'all' ? 'All Projects' : filter.charAt(0).toUpperCase() + filter.slice(1) }}
          </button>
        </div>

        <TransitionGroup
          name="project-list"
          tag="div"
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <RouterLink
            v-for="project in filteredProjects"
            :key="project.id"
            :to="`/projects/${project.id}`"
            class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div class="h-3 bg-gradient-accent"></div>
            <div class="p-6">
              <div class="flex items-start justify-between mb-3">
                <div>
                  <div v-if="project.badge?.type === 'isef'" class="mb-2">
                    <span class="inline-flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                      <img src="https://www.societyforscience.org/wp-content/uploads/2023/08/ISEF-Logo-Full-Color.png" alt="Intel ISEF" class="h-4 w-auto" />
                      {{ project.badge.label }}
                    </span>
                  </div>
                  <div v-else-if="project.awards" class="mb-2">
                    <span class="inline-flex items-center gap-1 text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">
                      <i class="fa-solid fa-trophy"></i>
                      Award Winner
                    </span>
                  </div>
                  <h3 class="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {{ t(project.titleKey) }}
                  </h3>
                </div>
                <span class="text-xs text-text-secondary bg-gray-100 px-2 py-1 rounded">
                  {{ project.year }}
                </span>
              </div>

              <p class="text-text-secondary text-sm mb-4 line-clamp-3">
                {{ t(project.descriptionKey) }}
              </p>

              <div class="flex flex-wrap gap-1.5 mb-4">
                <TechBadge
                  v-for="tech in project.technologies.slice(0, 3)"
                  :key="tech"
                  :name="tech"
                  size="sm"
                />
                <span
                  v-if="project.technologies.length > 3"
                  class="text-xs text-text-secondary self-center"
                >
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>

              <div class="flex items-center justify-between text-sm pt-4 border-t border-gray-100">
                <span class="text-text-secondary">{{ project.role }}</span>
                <span class="text-accent font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </RouterLink>
        </TransitionGroup>
      </div>
    </section>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.project-list-move,
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.5s ease;
}

.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.project-list-leave-active {
  position: absolute;
}
</style>
