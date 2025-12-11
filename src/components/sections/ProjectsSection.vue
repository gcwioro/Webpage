<script setup lang="ts">
import { ref } from 'vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import ProjectDetailModal from '@/components/ui/ProjectDetailModal.vue'
import { projects, type ProjectDetail } from '@/data/projects'

const selectedProject = ref<ProjectDetail | null>(null)
const isModalOpen = ref(false)

function openProject(project: ProjectDetail) {
  selectedProject.value = project
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}
</script>

<template>
  <section
    id="projects"
    class="py-20 bg-white"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        title-key="projects.title"
        subtitle-key="projects.subtitle"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          @click="openProject(project)"
        />
      </div>
    </div>

    <ProjectDetailModal
      :project="selectedProject"
      :is-open="isModalOpen"
      @close="closeModal"
    />
  </section>
</template>
